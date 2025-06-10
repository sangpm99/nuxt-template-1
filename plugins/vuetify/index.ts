import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import defaults from "./default";
import { themes } from "./theme";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    defaults,
    theme: {
      themes: themes,
    },
  });
  app.vueApp.use(vuetify);
});
