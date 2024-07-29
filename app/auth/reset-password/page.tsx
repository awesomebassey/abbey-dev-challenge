"use client"

import { ResetPassword } from "@/actions";
import { Form, FormInput, TextLink } from "@/components";
import { PasswordSchema } from "@/schemas";
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
      <Form
        buttonProps={{ mt: 3, text: "Reset Password" }}
        schema={PasswordSchema}
        action={ResetPassword}
        redirect="/auth/login"
      >
        {({ register, errors }) => (
          <>
            <FormInput
              name="password"
              register={register}
              errors={errors!}
              placeholder="New Password"
              type="password"
              isRequired={true}
            />
            <FormInput
              name="confirm_password"
              register={register}
              errors={errors!}
              placeholder="Confirm New Password"
              type="password"
              isRequired={true}
            />
          </>
        )}
      </Form>
      <TextLink text="Back to Login" href="/auth/login" fontWeight="semibold" />
    </Stack>
  );
}
