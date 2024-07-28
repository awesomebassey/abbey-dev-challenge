"use client";

import { FormInput, SubmitButton, TextLink } from "@/components";
import {
  Checkbox,
  FormLabel,
  Heading,
  Input,
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
      <Stack w={"full"} textAlign={"start"}>
        <FormInput placeholder="Username" type="text" isRequired={true} />
        {showPassword ? (
          <>
            <FormInput
              placeholder="Password"
              type="password"
              isRequired={true}
            />
            <FormInput
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
                <TextLink href="#!" text="Terms & Conditions" color="black" />
              </Text>
            </Checkbox>
          </>
        )}
        <SubmitButton text="Create account" mt={5} />
        <Text>
          Already have an account?&nbsp;
          <TextLink href="/login" text="Login" fontWeight="semibold" />
        </Text>
      </Stack>
    </Stack>
  );
}
