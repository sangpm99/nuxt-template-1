/* prettier-ignore */
import type { ThemeDefinition } from 'vuetify';

export const staticPrimaryColor = "rgba(81, 73, 66, 1)";
export const staticPrimaryDarkenColor = "rgba(81, 73, 66, 0.6)";

export const themes: Record<string, ThemeDefinition> = {
  light: {
    colors: {
      primary: staticPrimaryColor,
      "primary-darken-1": staticPrimaryDarkenColor,
    },
  },
};

export default themes;
