import { resolve } from "path";

const r = (...args: string[]) => resolve(__dirname, ...args);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["~/assets/css/main.scss"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/icon-512.svg" }],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [],
    },
  },
  $production: {
    app: {
      head: {
        link: [{ rel: "icon", type: "image/png", href: "/icon-512.svg" }],
        meta: [
          { name: "viewport", content: "width=device-width, initial-scale=1" },
        ],
        script: [
          {
            src: "https://plausible.io/js/script.js",
            "data-domain": "minitap.io",
            defer: true,
          },
        ],
      },
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("Tres") && tag !== "TresCanvas",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/variables.scss";',
        },
      },
    },
  },

  // devtools: { enabled: true },
});
