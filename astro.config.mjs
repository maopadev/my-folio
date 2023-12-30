import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), tailwind(), prefetch()],
  i18n: {
    locales: ["es", "en", "pt"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
