"use client";

import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { User } from "@prisma/client";
import {
  AddFollowerButton,
  AddFriendButton,
  AvatarComponent,
  ButtonLink,
} from "@/components";

export function PersonCard({
  user,
  title,
  id,
  isFriend,
  isFollower,
}: {
  user: User;
  title: string;
  id: string;
  isFriend: boolean;
  isFollower: boolean;
}) {
  const {
    username,
    first_name,
    last_name,
    bgImage,
    city,
    state,
    id: user_id,
  } = user;

  return (
    <Stack gap={0} rounded={8}>
      <Box
        roundedTop={8}
        bgImage={`url(${bgImage})`}
        minH={180}
        maxH={180}
        bgPos={"center"}
        bgSize={"cover"}
      />
      <Stack gap={3} p={4} shadow={"lg"} roundedBottom={8}>
        <Flex gap={3} alignItems={"center"}>
          <AvatarComponent
            size={"sm"}
            first_name={first_name!}
            last_name={last_name!}
          />
          <Stack gap={0}>
            <Text fontWeight={"semibold"} fontSize={"1.1rem"}>
              {first_name} {last_name}
            </Text>
            <Text fontSize={"sm"}>
              @{username}
            </Text>
          </Stack>
        </Flex>
        <HStack gap={3} alignItems={"center"}>
          <AddFriendButton
            id={id}
            user_id={user_id}
            isFriend={isFriend}
            size="xs"
          />
          <AddFollowerButton
            id={id}
            user_id={user_id}
            isFollower={isFollower}
            size="xs"
          />
          <ButtonLink
            href={`/people/@${username}`}
            text="View Profile"
            variant="solid"
            colorScheme="brand"
            size="xs"
          />
        </HStack>
      </Stack>
    </Stack>
  );
}
