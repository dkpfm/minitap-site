import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import highlightJS from "@highlightjs/vue-plugin";
import "highlight.js/styles/tokyo-night-dark.css";

export default defineNuxtPlugin((nuxtApp) => {
  hljs.registerLanguage("javascript", javascript);
  nuxtApp.vueApp.use(highlightJS);
});
