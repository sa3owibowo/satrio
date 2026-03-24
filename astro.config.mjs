import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import Analytics from "@astrojs/analytics"

// https://astro.build/config
export default defineConfig({
  site: "https://satrio.net",
  integrations: [webAnalytics(), mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})

