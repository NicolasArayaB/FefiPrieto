import type { Locale } from "@lib/i18n";
import { homeContent as esHome, homeMetadata as esMetadata } from "./home";
import { homeContent as enHome, homeMetadata as enMetadata } from "./home.en";
import { services as esServices } from "./services";
import { services as enServices } from "./services.en";
import {
  privacyPolicy as esPrivacy,
  termsAndConditions as esTerms,
} from "./legal";
import {
  privacyPolicy as enPrivacy,
  termsAndConditions as enTerms,
} from "./legal.en";

export function contentFor(locale: Locale) {
  return locale === "en"
    ? {
        home: enHome,
        metadata: enMetadata,
        services: enServices,
        privacy: enPrivacy,
        terms: enTerms,
      }
    : {
        home: esHome,
        metadata: esMetadata,
        services: esServices,
        privacy: esPrivacy,
        terms: esTerms,
      };
}
