import { FormInput, SubmitButton, TextLink } from "@/components";
import { Heading, Stack, Text } from "@chakra-ui/react";

export default function ForgotPasswordPage() {
  return (
    <Stack textAlign={"start"} w={"full"}>
      <Heading fontSize={{ base: 18, md: 26 }} fontWeight={"semibold"}>
        Forgot Password
      </Heading>
      <Text color="gray" mb={3}>
        Enter the username associated with your account and we will send you the
        verification code to reset your password.
      </Text>
      <FormInput placeholder="Username" type="text" isRequired={true} />
      <SubmitButton mt={3} text="Continue" />
      <TextLink text="Back to Login" href="/login" fontWeight="semibold" />
    </Stack>
  );
}
