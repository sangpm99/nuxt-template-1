import themeConfig from "./themeConfig.json";
import categories from "./categories.json";

export default defineAppConfig({
  ...themeConfig,
  ...categories,
});
