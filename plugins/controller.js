import physics from "~/extension/demo/src/physics";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use({
    install(app) {
      app.provide("physics", physics());
    },
  });
});
