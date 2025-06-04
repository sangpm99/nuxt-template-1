import "vuetify/styles";
import { createVuetify } from "vuetify";
import defaults from "./default";
import { themes } from "./theme";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    defaults,
    theme: {
      themes: themes,
    },
  });
  app.vueApp.use(vuetify);
});
