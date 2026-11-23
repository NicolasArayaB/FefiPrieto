"""Check the built bilingual site: python3 scripts/check-localized-build.py."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1] / "dist"
ORIGIN = "https://fernandaprieto.cl"


class Page(HTMLParser):
    def __init__(self, file):
        super().__init__(convert_charrefs=True)
        self.nodes = []
        self.text = []
        self.feed(file.read_text())

    def handle_starttag(self, tag, attrs):
        self.nodes.append((tag, dict(attrs)))

    def handle_data(self, data):
        self.text.append(data)

    def attrs(self, tag, **match):
        return [a for t, a in self.nodes if t == tag and all(a.get(k) == v for k, v in match.items())]


files = sorted(ROOT.rglob("*.html"))
assert len(files) == 18, f"Expected 18 localized pages; found {len(files)}"
pages = {"/" + str(file.relative_to(ROOT)).removesuffix("index.html"): Page(file) for file in files}
assert "/" in pages and "/en/" in pages
assert len([path for path in pages if path.startswith("/en/")]) == 9
assert len([path for path in pages if path.startswith("/servicios/")]) == 6
assert len([path for path in pages if path.startswith("/en/services/")]) == 6

for path, page in pages.items():
    locale = "en" if path.startswith("/en/") else "es"
    assert page.attrs("html", lang=locale), f"Wrong document language: {path}"
    canonical = page.attrs("link", rel="canonical")
    assert len(canonical) == 1 and canonical[0]["href"] == ORIGIN + path, f"Canonical: {path}"
    alternates = {a["hreflang"]: a["href"] for a in page.attrs("link", rel="alternate")}
    assert set(alternates) == {"es", "en", "x-default"}, f"Alternates: {path}"
    assert alternates[locale] == ORIGIN + path
    assert alternates["x-default"] == alternates["es"]
    for language in ("es", "en"):
        target = urlsplit(alternates[language]).path
        assert target in pages, f"Missing translated page: {target}"
        reverse = {a["hreflang"]: a["href"] for a in pages[target].attrs("link", rel="alternate")}
        assert reverse == alternates, f"Non-reciprocal translation pair: {path}"
        switches = page.attrs("a", hreflang=language)
        assert len(switches) == 1 and switches[0]["href"] == target, f"Switcher: {path}"
        assert switches[0].get("lang") == language
        assert (switches[0].get("aria-current") == "true") == (language == locale)
    for tag, attrs in page.nodes:
        if tag != "a" or not attrs.get("href"):
            continue
        link = urlsplit(urljoin(ORIGIN + path, attrs["href"]))
        if link.netloc != urlsplit(ORIGIN).netloc or link.scheme not in ("http", "https"):
            continue
        target = link.path if link.path.endswith("/") else link.path + "/"
        assert target in pages, f"Broken internal link: {path} -> {link.path}"
        if "hreflang" not in attrs:
            assert target.startswith("/en/") == (locale == "en"), f"Locale lost: {path} -> {target}"
        if link.fragment:
            assert any(a.get("id") == unquote(link.fragment) for _, a in pages[target].nodes), f"Broken fragment: {path} -> {link.geturl()}"
    ids = {a["id"] for _, a in page.nodes if "id" in a}
    for _, attrs in page.nodes:
        for reference in attrs.get("aria-labelledby", "").split():
            assert reference in ids, f"Unresolved accessible label {reference}: {path}"
    assert len(page.attrs("h1")) == 1, f"Main heading: {path}"
    assert len(page.attrs("title")) == 1
    assert page.attrs("meta", name="description")[0]["content"]
    assert page.attrs("meta", property="og:locale")[0]["content"] == ("en_US" if locale == "en" else "es_CL")
    text = " ".join(page.text)
    if locale == "en":
        for spanish in ("Etapa", "Conversemos", "Duración", "Gestionar cookies", "Tu privacidad", "Información legal", "Última actualización", "Requisito previo"):
            assert spanish not in text, f"Untranslated label {spanish}: {path}"
        assert "Your privacy" in text and "Manage cookies" in text
        if "/services/" in path:
            assert "CLP $" in text and "Ready to begin?" in text
        if path in ("/en/privacy-policy/", "/en/terms-and-conditions/"):
            assert "Last updated:" in text

sitemap = ET.parse(ROOT / "sitemap-0.xml")
locations = {urlsplit(node.text).path for node in sitemap.findall(".//{*}loc")}
assert locations == set(pages), "Sitemap must list exactly the localized pages"
print(f"Passed bilingual build checks for {len(pages)} pages: language, links, switchers, SEO, content, and sitemap.")
