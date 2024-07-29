import { Logo } from "@/components";
import { VStack } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abbey Mortgage Bank || Authentication",
  description: "Let's get you started on your digital journey...",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <VStack
        alignItems={"center"}
        justifyContent={"center"}
        bg={"brand.800"}
        minH={"100vh"}
      >
        <VStack
          maxW={"md"}
          bg={"white"}
          p={{ base: 5, md: 10 }}
          rounded={16}
          boxShadow={"md"}
          w={"full"}
          gap={5}
        >
          <Logo />
          {children}
        </VStack>
      </VStack>
    </main>
  );
}
