"use client";

import { sidemenu } from "@/constants";
import { Flex, Text, Link, Stack } from "@chakra-ui/react";
import { AvatarComponent } from "@/components";
import { PiArrowCircleRightFill } from "react-icons/pi";
import { signOut } from "next-auth/react";
import NextLink from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = searchParams.get("q");

  const isActive = (link: string, query?: string) => {
    if (query) {
      return pathname === link && params === query;
    } else {
      return pathname === link;
    }
  };

  return (
    <Stack
      p={5}
      bg={"secondary.500"}
      w={"full"}
      minH={{base: "100vh", md: "90vh"}}
      shadow={"md"}
    >
      {sidemenu.map(({ icon, label, link, query }) => (
        <Link
          as={NextLink}
          textDecor={"none"}
          href={`${link}${query ? `?q=${query}` : ""}`}
          bg={isActive(link, query) ? "brand.500" : "secondary.500"}
          rounded={8}
          _hover={{ bg: "brand.400" }}
          p={4}
          key={label}
          color={"white"}
        >
          <Flex gap={4} alignItems={"center"}>
            {icon({ fontSize: "1.2rem" })}
            <Text>{label}</Text>
          </Flex>
        </Link>
      ))}
      <Flex mt={"auto"} alignItems={"center"} gap={4}>
        <AvatarComponent size="sm" />
        <Text
          textDecor={"underline"}
          cursor={"pointer"}
          display={"flex"}
          alignItems={"center"}
          fontWeight={"semibold"}
          color={"white"}
          gap={1}
          onClick={() => signOut()}
        >
          Logout
          <PiArrowCircleRightFill fontSize={"0.9rem"} />
        </Text>
      </Flex>
    </Stack>
  );
}
