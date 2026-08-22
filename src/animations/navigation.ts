const STICKY_THRESHOLD = 80;

export function initStickyNavigation() {
  const navigation = document.querySelector<HTMLElement>(
    "[data-site-navigation]",
  );

  if (!navigation) return;

  const updateNavigation = () => {
    navigation.classList.toggle(
      "is-scrolled",
      window.scrollY > STICKY_THRESHOLD,
    );
  };

  updateNavigation();
  window.addEventListener("scroll", updateNavigation, { passive: true });
}
