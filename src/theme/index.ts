import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          lightBlack: { value: "rgb(27 37 75)" },
          lightGray: { value: "rgb(247 248 254)" },
          gray: { value: "rgb(163 174 208)" },
          white: { value: "rgb(255 255 255)" },
          purple: { value: "rgb(66 42 251)" },
          darkPurple: { value: "rgb(17 4 122)" },
          lightBlue: { value: "rgb(106, 210, 255)" },
          orange: { value: "rgb(249 115 22)" },
          red: { value: "rgb(245 57 57)" },
          green: { value: "rgb(34 197 94)" },
        },
        light: {
          bg: {
            primary: {
              value: "rgb(255 255 255)",
            },
            secondary: {
              value: "rgb(247 248 254)",
            },
            tertiary: {
              value: "rgb(244 247 254)",
            },
          },
          text: {
            primary: {
              value: "rgb(27 37 75)",
            },
            secondary: {
              value: "rgb(163 174 208)",
            },
            tertiary: {
              value: "rgb(66 42 251)",
            },
          },
        },
        dark: {
          bg: {
            primary: {
              value: "rgb(17 28 68)",
            },
            secondary: {
              value: "rgb(11 20 55)",
            },
          },
          text: {
            primary: {
              value: "rgb(255 255 255)",
            },
            secondary: {
              value: "rgb(255 255 255)",
            },
            tertiary: {
              value: "rgb(255 255 255)",
            },
            quaternary: {
              value: "rgb(27 37 75)",
            },
          },
        },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          primary: {
            value: {
              base: "{colors.light.bg.primary}",
              _dark: "{colors.dark.bg.primary}",
            },
          },
          secondary: {
            value: {
              base: "{colors.light.bg.secondary}",
              _dark: "{colors.dark.bg.secondary}",
            },
          },
          tertiary: {
            value: {
              base: "{colors.light.bg.tertiary}",
              _dark: "{colors.dark.bg.tertiary}",
            },
          },
        },
        text: {
          primary: {
            value: {
              base: "{colors.light.text.primary}",
              _dark: "{colors.dark.text.primary}",
            },
          },
          secondary: {
            value: {
              base: "{colors.light.text.secondary}",
              _dark: "{colors.dark.text.secondary}",
            },
          },
          tertiary: {
            value: {
              base: "{colors.light.text.tertiary}",
              _dark: "{colors.dark.text.tertiary}",
            },
          },
        },
      },
    },
  },
});
