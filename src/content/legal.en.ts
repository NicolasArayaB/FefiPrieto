import type { LegalDocument } from "./legal";
export const privacyPolicy = {
  title: "Privacy Policy",
  description:
    "Learn how Fernanda Prieto handles personal data shared through this website.",
  updatedAt: "September 1, 2026",
  intro:
    "This policy explains how we handle the information you choose to share when contacting Fernanda Prieto through this website.",
  sections: [
    {
      title: "Information you may share",
      paragraphs: [
        "When you open an email contact link, you choose what information to send. This may include your name, email address, inquiry, and any other information you decide to include in your message.",
      ],
    },
    {
      title: "How it is used",
      paragraphs: [
        "Your information is used only to respond to your inquiry, arrange a possible consultation, and continue the conversation you begin.",
        "It is not used for marketing campaigns unrelated to your inquiry without your permission.",
      ],
    },
    {
      title: "Website analytics",
      paragraphs: [
        "With your consent, we use PostHog to understand general use of the website. These analytics may process technical and browsing data, such as pages visited, referral source, interactions needed to measure an inquiry, device type, browser, IP address, and performance information.",
        "We do not send PostHog the contents of emails you choose to send, or use these analytics for personalized advertising.",
      ],
    },
    {
      title: "Your requests",
      paragraphs: [
        "You can request access to, correction of, or deletion of information you have shared by writing to contacto@fernandaprieto.cl. You can also ask that it not be used for future contact.",
      ],
    },
    {
      title: "Cookies and withdrawing consent",
      paragraphs: [
        "You can accept or reject analytics cookies when the choices appear on your visit to the website. You can also change your decision at any time through the “Manage cookies” link in the footer.",
        "Analytics are activated only after you accept. If you withdraw consent, future collection from this browser stops.",
      ],
    },
    {
      title: "Changes to this policy",
      paragraphs: [
        "This policy may be updated if our data handling practices or tools change. The update date identifies the current version.",
      ],
    },
  ],
} satisfies LegalDocument;
export const termsAndConditions = {
  title: "Terms and Conditions",
  description: "Terms of use for Fernanda Prieto’s website.",
  updatedAt: "September 1, 2026",
  intro:
    "These terms describe the informational use of this website and how to begin an inquiry with Fernanda Prieto.",
  sections: [
    {
      title: "Using the website",
      paragraphs: [
        "The content on this website is informational. Its purpose is to explain Fernanda Prieto’s approach, offering, and image consulting services.",
        "It does not constitute a binding offer or psychological diagnosis, and does not replace any professional assessment appropriate to an individual case.",
      ],
    },
    {
      title: "Inquiries and services",
      paragraphs: [
        "An inquiry sent by email does not confirm a booking or the purchase of a service. Availability, scope, delivery format, and the terms of each process are confirmed directly by email.",
      ],
    },
    {
      title: "Intellectual property",
      paragraphs: [
        "The website’s text, images, visual identity, and other content belong to Fernanda Prieto or are used with the appropriate permission. They may not be reproduced or reused without prior permission.",
      ],
    },
    {
      title: "External links and changes",
      paragraphs: [
        "Links to social media or external services are subject to those platforms’ policies. These terms may be updated when the website or the way services are provided changes.",
      ],
    },
  ],
} satisfies LegalDocument;
