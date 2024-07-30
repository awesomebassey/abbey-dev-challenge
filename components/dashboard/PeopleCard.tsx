"use client";

import React, { useState, useTransition } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
  Tag,
  TagLeftIcon,
  Text,
  useToast,
} from "@chakra-ui/react";
import { User } from "@prisma/client";
import { peopleTags } from "@/constants";
import { AvatarComponent, ButtonLink } from "@/components";
import { AddFriend, FollowUser } from "@/actions";

export function PeopleCard({
  id,
  friends,
  followers,
  otherPeople,
}: {
  id: string;
  friends: User[];
  followers: User[];
  otherPeople: User[];
}) {
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState<{ item: string; id: string } | null>(
    null
  );
  const [selected, setSelected] = useState<{ title: string; data: User[] }>({
    title: "Friends",
    data: friends,
  });
  const toast = useToast();
  const isLoading = (id: string, item: string) =>
    isPending && loading?.id === id && loading.item === item;

  const showToast = (
    title: string,
    status: "success" | "error",
    description?: string
  ) => {
    toast({
      id: "toast",
      title: title,
      description: description,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSelected = (item: string) => {
    switch (item) {
      case "People You May Know":
        setSelected({ title: item, data: otherPeople });
        break;
      case "Followers":
        setSelected({ title: item, data: followers });
        break;
      default:
        setSelected({ title: item, data: friends });
        break;
    }
  };

  const addFriend = (friend: string) => {
    startTransition(async () => {
      try {
        setLoading({ item: "friend", id: friend });
        await AddFriend(id, friend);
        showToast("Friend Added", "success");
      } catch (error) {
        setLoading(null);
        showToast(
          "Something went wrong!",
          "error",
          "Try adding the user again"
        );
      }
    });
  };

  const followUser = (friend: string) => {
    startTransition(async () => {
      try {
        setLoading({ item: "follower", id: friend });
        await FollowUser(id, friend);
        showToast("Follower Added", "success");
      } catch (error) {
        setLoading(null);
        showToast(
          "Something went wrong!",
          "error",
          "Try adding the user again"
        );
      }
    });
  };

  return (
    <Card>
      <CardBody>
        <Flex gap={4} mb={3}>
          {peopleTags.map(({ tag, icon }) => (
            <Tag
              size={"lg"}
              variant={"solid"}
              colorScheme={selected.title === tag ? "secondary" : "grey"}
              key={tag}
              cursor={"pointer"}
              onClick={() => handleSelected(tag)}
            >
              <TagLeftIcon as={icon} />
              {tag}
            </Tag>
          ))}
        </Flex>
        <Divider mb={10} />
        <SimpleGrid columns={{ base: 2, md: 3 }} gap={5}>
          {selected.data.length > 0 ? (
            <>
              {selected.data.map(
                ({
                  username,
                  first_name,
                  last_name,
                  city,
                  state,
                  id,
                  bgImage,
                }) => (
                  <GridItem key={id}>
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
                              {city}
                              {city && state ? ", " + state : state}
                            </Text>
                          </Stack>
                        </Flex>
                        <HStack gap={3} alignItems={"center"}>
                          {selected.title !== "Friends" && (
                            <Button
                              size={"xs"}
                              colorScheme={"secondary"}
                              variant={"solid"}
                              onClick={() => addFriend(id)}
                              isLoading={isLoading(id, "friend")}
                            >
                              Add Friend
                            </Button>
                          )}
                          {selected.title !== "Followers" && (
                            <Button
                              size={"xs"}
                              colorScheme={"teal"}
                              variant={"solid"}
                              onClick={() => followUser(id)}
                              isLoading={isLoading(id, "follow")}
                            >
                              Follow
                            </Button>
                          )}
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
                  </GridItem>
                )
              )}
            </>
          ) : (
            <GridItem colSpan={{ base: 2, md: 4 }}>
              <Text
                fontWeight={"semibold"}
                p={20}
                fontSize={{ base: 18, md: 24 }}
                textAlign={"center"}
              >
                No {selected.title}
              </Text>
            </GridItem>
          )}
        </SimpleGrid>
      </CardBody>
    </Card>
  );
}
