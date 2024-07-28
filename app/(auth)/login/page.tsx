import { FormInput, SubmitButton, TextLink } from "@/components";
import { Heading, Stack, Text } from "@chakra-ui/react";

export default function LoginPage() {
  return (
    <Stack textAlign={"center"} w={"full"}>
      <Heading fontSize={{ base: 18, md: 26 }} fontWeight={"semibold"} mb={5}>
        Sign in to your account
      </Heading>
      <Stack w={"full"} textAlign={"start"}>
        <FormInput placeholder="Username" type="text" isRequired={true} />
        <FormInput placeholder="Password" type="password" isRequired={true} />
        <TextLink
          href="/forgot-password"
          text="Forgot Password"
          fontWeight="semibold"
        />
        <SubmitButton text="Sign In" mt={5} />
        <Text>
          Don't have an account?&nbsp;
          <TextLink href="/signup" text="Sign Up" fontWeight="semibold" />
        </Text>
      </Stack>
    </Stack>
  );
}
