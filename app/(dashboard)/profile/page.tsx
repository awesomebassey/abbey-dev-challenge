import { GetUserById } from "@/actions";
import { auth } from "@/auth";
import { ProfileInfo } from "@/components";
import { Heading, Stack } from "@chakra-ui/react";

export default async function UserProfilePage() {
  const session = await auth();
  const { data: user } = await GetUserById(session?.user.id!);

  return (
    <Stack gap={10}>
      <Heading fontSize={{ base: 18, md: 28 }}>My Profile</Heading>
      <ProfileInfo user={user!} />
    </Stack>
  );
}
