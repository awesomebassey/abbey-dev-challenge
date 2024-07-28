"use client";

import { RegisterUser } from "@/actions";
import { Form, FormInput, TextLink } from "@/components";
import { RegisterSchema } from "@/schemas";
import {
  Checkbox,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Stack textAlign={"center"} w={"full"}>
      <Heading fontSize={{ base: 18, md: 26 }} fontWeight={"semibold"} mb={5}>
        Create your account
      </Heading>
      <Form
        buttonProps={{ mt: 5, text: "Create account" }}
        schema={RegisterSchema}
        action={RegisterUser}
        redirect="/login"
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
            {showPassword ? (
              <>
                <FormInput
                  name="password"
                  register={register}
                  errors={errors!}
                  placeholder="Password"
                  type="password"
                  isRequired={true}
                />
                <FormInput
                  name="confirm_password"
                  register={register}
                  errors={errors!}
                  placeholder="Confirm Password"
                  type="password"
                  isRequired={true}
                />
              </>
            ) : (
              <>
                <Checkbox size={"sm"} colorScheme="brand">
                  <Text fontSize={"sm"}>
                    I have read and agreed to the&nbsp;
                    <TextLink
                      href="#!"
                      text="Terms & Conditions"
                      color="black"
                    />
                  </Text>
                </Checkbox>
              </>
            )}
          </Stack>
        )}
      </Form>
      <Text>
        Already have an account?&nbsp;
        <TextLink href="/login" text="Login" fontWeight="semibold" />
      </Text>
    </Stack>
  );
}
