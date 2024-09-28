import { resolve } from "path";

const r = (...args: string[]) => resolve(__dirname, ...args);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["~/assets/css/main.scss"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/icon-512.svg" }],
    },
  },

  // devtools: { enabled: true },
});
