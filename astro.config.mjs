// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [],
  },
  site: "http://localhost:4321",
  integrations: [sitemap()],
});
