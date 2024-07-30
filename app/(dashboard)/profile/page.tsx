import {
  GetFollowersForUser,
  GetFriendsForUser,
  GetOtherPeopleForUser,
  GetUserById,
} from "@/actions";
import { auth } from "@/auth";
import { PeopleCard, ProfileInfo } from "@/components";
import { Heading, Stack } from "@chakra-ui/react";

export default async function UserProfilePage() {
  const session = await auth();
  const id = session?.user.id!;
  const { data: user } = await GetUserById(id);
  const { data: friends } = await GetFriendsForUser(id);
  const { data: followers } = await GetFollowersForUser(id);
  const { data: otherPeople } = await GetOtherPeopleForUser(id);

  return (
    <Stack gap={10}>
      <Heading fontSize={{ base: 18, md: 28 }}>My Profile</Heading>
      <ProfileInfo user={user!} currentUser={id} />
      <PeopleCard
        id={id}
        friends={friends!}
        followers={followers!}
        otherPeople={otherPeople!}
      />
    </Stack>
  );
}
