import physics from "~/extension/demo/src/physics";
import audio from "~/extension/demo/src/audio";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .use({
      install(app) {
        app.provide("physics", physics());
      },
    })
    .use({
      install(app) {
        app.provide("audio", audio());
      },
    });
});
