"use client";

import { LoginUser } from "@/actions";
import { Form, FormInput, TextLink } from "@/components";
import { LoginSchema } from "@/schemas";
import { Heading, Stack, Text } from "@chakra-ui/react";

export default function LoginPage() {
  return (
    <Stack textAlign={"center"} w={"full"}>
      <Heading fontSize={{ base: 18, md: 26 }} fontWeight={"semibold"} mb={5}>
        Sign in to your account
      </Heading>
      <Form
        buttonProps={{ mt: 5, text: "Sign In" }}
        schema={LoginSchema}
        action={LoginUser}
        redirect="/"
      >
        {({ register, errors }) => (
          <Stack w={"full"} textAlign={"start"}>
            <FormInput
              name="username"
              register={register}
              errors={errors!}
              placeholder="Username"
              type="text"
              isRequired={true}
            />
            <FormInput
              name="password"
              register={register}
              errors={errors!}
              placeholder="Password"
              type="password"
              isRequired={true}
            />
            <TextLink
              href="/forgot-password"
              text="Forgot Password"
              fontWeight="semibold"
            />
          </Stack>
        )}
      </Form>
      <Text>
        Don't have an account?&nbsp;
        <TextLink href="/signup" text="Sign Up" fontWeight="semibold" />
      </Text>
    </Stack>
  );
}
