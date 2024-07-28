"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/app/_helpers";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <ChakraProvider
        theme={theme}
        toastOptions={{ defaultOptions: { position: "top" } }}
      >
         {children}
      </ChakraProvider>
  );
}