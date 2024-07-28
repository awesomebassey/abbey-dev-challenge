import { FormInput, SubmitButton, TextLink } from "@/components";
import { Heading, Stack, Text } from "@chakra-ui/react";

export default function ResetPasswordPage() {
  return (
    <Stack textAlign={"start"} w={"full"}>
      <Heading fontSize={{ base: 18, md: 26 }} fontWeight={"semibold"}>
        Reset Password
      </Heading>
      <Text color="gray" mb={3}>
        Password requires a minimum of 8 characters and should contain a mix of
        letters, numbers and symbols.
      </Text>
      <FormInput placeholder="New Password" type="password" isRequired={true} />
      <FormInput
        placeholder="Confirm New Password"
        type="password"
        isRequired={true}
      />
      <SubmitButton mt={3} text="Reset Password" />
      <TextLink text="Back to Login" href="/login" fontWeight="semibold" />
    </Stack>
  );
}
