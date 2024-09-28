import controllerState from "~/extension/src/plugins/controllerState";
import controllerClock from "~/extension/src/plugins/controllerClock";
import controllerShortcuts from "~/extension/src/plugins/controllerShortcuts";
import controllerOutput from "~/extension/src/plugins/controllerOutput";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .use(controllerState)
    .use(controllerClock)
    .use(controllerOutput)
    .use(controllerShortcuts);
});
