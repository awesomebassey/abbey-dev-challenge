import { GetUserById } from "@/actions";
import { auth } from "@/auth";
import {
  ProfileForm,
  ProfilePasswordForm,
  SecuritySettingsForm,
} from "@/components";
import { GridItem, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

export default async function SettingsPage() {
  const session = await auth();
  const { data: user } = await GetUserById(session?.user.id!);

  return (
    <Stack gap={10} >
      <Heading fontSize={{ base: 18, md: 28 }}>Profile Settings</Heading>
      <SimpleGrid columns={2} gap={10}>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <ProfileForm user={user!} />
        </GridItem>
        <GridItem
          colSpan={{ base: 2, md: 1 }}
          display={"flex"}
          flexDir={"column"}
          gap={5}
        >
          <ProfilePasswordForm user={user!} />
          <SecuritySettingsForm />
        </GridItem>
      </SimpleGrid>
    </Stack>
  );
}
