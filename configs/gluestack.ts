import { config as defaultConfig } from "@gluestack-ui/config";
import { createConfig } from "@gluestack-ui/themed";

export const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      primary300: "#F9F9F9",
      primary400: "#D6D4D4",
      primary500: "#A4A4A4",
      primary600: "#8B8B8B",
      primary700: "#7B7B7B",

      darkBlue600: "#1E2D46",
      darkBlue650: "#182233",
      darkBlue700: "#05090E",

      error700: "#DE1212",

      textLight900: "#18191C",
      grayLight500: "rgba(123,123, 123, 0.5)",
    },
  },
} as const);

type ConfigType = typeof config;

declare module "@gluestack-style/react" {
  interface UIConfig extends ConfigType {}
}
