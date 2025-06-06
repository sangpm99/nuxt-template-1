import themeConfigDefault from "./themeConfigDefault.json";
import themeConfig from "./themeConfig.json";

export default defineAppConfig({
  ...themeConfigDefault,
  ...themeConfig,
});
