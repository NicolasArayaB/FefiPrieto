import { siteUrl } from "@lib/env";
import { homeMetadata } from "@content/home";

export const siteMetadata = {
  ...homeMetadata,
  url: siteUrl,
};
