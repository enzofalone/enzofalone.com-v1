import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

// deprecated
// const breakpoints = createBreakpoints();

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#2B2D42", "#2B2D42")(props),
      },
    }),
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      menuMobile: {
        default: "#f8f8f8",
        _dark: "black",
      },
      heroGradientStart: {
        default: "#f8f8f8",
        _dark: "#ffffff",
      },
      heroGradientEnd: {
        default: "#ffffff",
        _dark: "#f8f8f8",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
    sectionBackground: "#161629",
    section1: "#2B2D42",
    section2: "#22223B",
    section3: "#422780",
  },
  spacing: {
    main: [0, 5, 5, "20vw"],
  },
  // todo add diferent font sizes adapted for h1,h2,p tags
  fonts,
  breakpoints: {
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em",
  },
});

export default theme;
