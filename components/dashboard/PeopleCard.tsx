"use client";

import React, { useState } from "react";
import {
  Card,
  CardBody,
  Divider,
  Flex,
  GridItem,
  SimpleGrid,
  Tag,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import { User } from "@prisma/client";
import { peopleTags } from "@/constants";
import { PersonCard } from "@/components";

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
  const [selected, setSelected] = useState<{ title: string; data: User[] }>({
    title: "Friends",
    data: friends,
  });

  const isFriend = (user_id: string) => {
    const friend = friends.filter(({ id }) => id === user_id);
    return !!friend.length;
  };

  const isFollower = (user_id: string) => {
    const follower = followers.filter(({ id }) => id === user_id);
    return !!follower.length;
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

  return (
    <Card>
      <CardBody>
        <Flex
          gap={4}
          mb={3}
          justifyContent={{ base: "space-evenly", md: "start" }}
        >
          {peopleTags.map(({ tag, icon }) => (
            <Tag
              size={"lg"}
              variant={"solid"}
              colorScheme={selected.title === tag ? "secondary" : "grey"}
              key={tag}
              cursor={"pointer"}
              onClick={() => handleSelected(tag)}
              p={3}
            >
              <TagLeftIcon boxSize={{ base: 6, md: 4 }} as={icon} />
              <Text display={{ base: "none", md: "block" }}>{tag}</Text>
            </Tag>
          ))}
        </Flex>
        <Divider mb={{ base: 5, md: 10 }} />
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
          <Text
            display={{ base: "block", md: "none" }}
            fontWeight={"semibold"}
            fontSize={"1.2rem"}
            mb={3}
          >
            {selected.title}
          </Text>
          {selected.data.length > 0 ? (
            <>
              {selected.data.map((user) => (
                <GridItem key={user.id}>
                  <PersonCard
                    user={user!}
                    title={selected.title}
                    id={id}
                    isFriend={isFriend(user.id)}
                    isFollower={isFollower(user.id)}
                  />
                </GridItem>
              ))}
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
