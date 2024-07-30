"use client";

import React from "react";
import { User } from "@prisma/client";
import { Box, GridItem, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { AvatarComponent, ButtonLink } from "@/components";
import NextLink from "next/link";

export function ProfileInfo({ user }: { user: User }) {
  return (
    <Stack gap={0} rounded={8}>
      <Box
        roundedTop={8}
        bgImage={`url(${user?.bgImage!})`}
        minH={180}
        maxH={180}
        bgPos={"center"}
        bgSize={"cover"}
      />
      <SimpleGrid
        columns={12}
        alignItems={"center"}
        bg={"secondary.200"}
        roundedBottom={8}
        gap={5}
        p={5}
        position={"relative"}
      >
        <GridItem colSpan={1} />
        <Box position={"absolute"} left={5} bottom={{ base: 20, md: 5 }}>
          <AvatarComponent size={{ base: "md", md: "xl" }} user={user} />
        </Box>
        <GridItem colSpan={{ base: 11, md: 9 }} ps={{ base: 10, md: 6 }}>
          <Text
            fontWeight={"bold"}
            fontSize={{ md: "1.5rem" }}
            textTransform={"capitalize"}
          >
            {user.first_name} {user.last_name}
          </Text>
          <Text fontSize={"sm"} textTransform={"capitalize"}>
            {user.city ? user.city + ", " : ""}
            {user.state}
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 2 }}>
          <ButtonLink
            colorScheme="secondary"
            variant="solid"
            text="Edit Profile"
            href="/settings"
          />
        </GridItem>
      </SimpleGrid>
    </Stack>
  );
}
