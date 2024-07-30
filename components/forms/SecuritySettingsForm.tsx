"use client";

import {
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Stack,
  StackDivider,
  Switch,
  Text,
} from "@chakra-ui/react";

export function SecuritySettingsForm() {
  return (
    <Card w={"full"}>
      <CardBody display={"flex"} flexDirection={"column"} gap={5}>
        <Text fontWeight={"semibold"}>Security Settings</Text>
        <Stack gap={2} divider={<StackDivider />}>
          <FormControl display="flex" alignItems="center" w={"full"}>
            <FormLabel htmlFor="email-alerts" mb="0" me={"auto"}>
              Enable email alerts?
            </FormLabel>
            <Switch colorScheme="secondary" id="email-alerts" isChecked />
          </FormControl>
          <FormControl display="flex" alignItems="center" w={"full"}>
            <FormLabel htmlFor="mfa" mb="0" me={"auto"}>
              Enable Multi-factor Authentication (MFA)?
            </FormLabel>
            <Switch colorScheme="secondary" id="mfa" />
          </FormControl>
        </Stack>
      </CardBody>
    </Card>
  );
}
