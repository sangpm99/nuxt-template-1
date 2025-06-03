import "vuetify/styles";
import { createVuetify } from "vuetify";
import defaults from "./default";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    defaults,
  });
  app.vueApp.use(vuetify);
});
