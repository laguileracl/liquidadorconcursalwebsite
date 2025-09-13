import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://liquidadorconcursalwebsite.vercel.app",
  integrations: [
    sitemap(), 
    icon({
      include: {
        tabler: ["*"], // Include all Tabler icons
      },
    })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});