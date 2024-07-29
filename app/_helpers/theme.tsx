import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-outfit)",
    body: "var(--font-yserif)",
  },
  colors: {
    brand: {
      50: "#ffc5c5",
      100: "#ffb3b3",
      200: "#ffa1a1",
      300: "#ff8f8f",
      400: "#ff7777",
      500: "#c81e19",
      600: "#b31515",
      800: "#931212",
      900: "#7a0a0a",
    },
    secondary: {
      50: "#e5f2ff",
      100: "#cce0f5",
      200: "#99c6f4",
      300: "#66b3f3",
      400: "#338cf1",
      500: "#002668",
      600: "#001f5f",
      800: "#00133b",
      900: "#000921",
    },
    grey: {
      50: "#ffffff",
      100: "#f7f7f7",
      200: "#ededed",
      300: "#e5e5e5",
      400: "#e3e3e3",
      500: "#e6e6e6",
      600: "#d9d9d9",
      800: "#c4c4c4",
      900: "#a8a8a8",
      }
  },
});
