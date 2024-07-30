"use client";

import { User } from "@prisma/client";
import {
  Box,
  Divider,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  AddFollowerButton,
  AddFriendButton,
  AvatarComponent,
  ButtonLink,
} from "@/components";

export function ProfileInfo({
  user,
  currentUser,
  isFriend,
  isFollower,
}: {
  user: User;
  currentUser: string;
  isFriend?: boolean;
  isFollower?: boolean;
}) {
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
          <AvatarComponent
            size={{ base: "md", md: "xl" }}
            first_name={user?.first_name!}
            last_name={user?.last_name!}
          />
        </Box>
        <GridItem colSpan={{ base: 11, md: 7 }} ps={{ base: 10, md: 6 }}>
          <Text
            fontWeight={"bold"}
            fontSize={{ md: "1.5rem" }}
            textTransform={"capitalize"}
          >
            {user?.first_name} {user?.last_name}
          </Text>
          <HStack gap={2}>
            <Text textTransform={"lowercase"}>@{user?.username} |</Text>
            <Text fontSize={"sm"} textTransform={"capitalize"}>
              {user?.city}
              {user?.city && user?.state ? ", " + user?.state : user?.state}
            </Text>
          </HStack>
        </GridItem>
        <GridItem
          colSpan={{ base: 12, md: 4 }}
          display={"flex"}
          justifyContent={"end"}
          gap={4}
          alignItems={"center"}
        >
          {currentUser === user?.id ? (
            <ButtonLink
              colorScheme="brand"
              variant="solid"
              text="Edit Profile"
              href="/settings"
            />
          ) : (
            <>
              <AddFriendButton
                id={currentUser}
                user_id={user?.id!}
                isFriend={isFriend!}
                size="sm"
              />
              <AddFollowerButton
                id={currentUser}
                user_id={user?.id!}
                isFollower={isFollower!}
                size="sm"
              />
            </>
          )}
        </GridItem>
      </SimpleGrid>
    </Stack>
  );
}
