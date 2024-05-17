const shouldInstrumentCode = "INSTRUMENT_CODE" in process.env;

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      shouldInstrumentCode && "istanbul",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@/configs": "./configs",
            "@/providers": "./providers",
            "@/hooks": "./hooks",
            "@/features": "./features",
            "@/generated": "./generated",
            "@/components": "./components",
            "@/utils": "./utils",
            "@/constants": "./constants",
          },
        },
      ],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ].filter(i => !!i),
  };
};
