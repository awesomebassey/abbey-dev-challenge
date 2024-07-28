import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-outfit)",
    body: "var(--font-yserif)",
  },
  colors: {
    brand: {
      400: "#0B061D",
      500: "#5D34F2",
      800: "#190064"
    }
  }
});