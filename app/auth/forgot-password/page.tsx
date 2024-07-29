"use client"

import { ForgotPassword } from "@/actions";
import { Form, FormInput, TextLink } from "@/components";
import { UsernameSchema } from "@/schemas";
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
      <Form
        buttonProps={{ mt: 3, text: "Continue" }}
        schema={UsernameSchema}
        action={ForgotPassword}
        redirect="/auth/reset-password"
      >
        {({ register, errors }) => (
          <FormInput
            name="username"
            register={register}
            errors={errors!}
            placeholder="Username"
            type="text"
            isRequired={true}
          />
        )}
      </Form>
      <TextLink text="Back to Login" href="/auth/login" fontWeight="semibold" />
    </Stack>
  );
}
