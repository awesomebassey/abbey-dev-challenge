"use client";

import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FieldErrors } from "react-hook-form";
import { PiEye, PiEyeSlash } from "react-icons/pi";

export function FormInput({
  type,
  name,
  isRequired,
  placeholder,
  register,
  errors,
}: {
  name: string;
  type: "text" | "email" | "number" | "password";
  isRequired?: boolean;
  placeholder?: string;
  register: any;
  errors: FieldErrors;
}) {
  const [show, setShow] = useState<boolean>(false);
  const errorMessage = errors?.[name]?.message as string
  return (
    <FormControl isInvalid={!!errorMessage}>
      <InputGroup>
        <Input
          id={name}
          type={type === "password" && show ? "text" : type}
          placeholder={placeholder}
          bg={"white"}
          isRequired={isRequired}
          {...register(name)}
          w={"full"}
          rounded={8}
          _focusVisible={{ borderColor: "brand.500", boxShadow: "brand.800" }}
        />
        {type === "password" && (
          <InputRightElement marginRight={1}>
            <Button
              aria-label="Toggle Password"
              size="sm"
              colorScheme="transparent"
              color={"black"}
              onClick={() => setShow(!show)}
              p={0}
              fontSize={18}
            >
              {show ? <PiEye /> : <PiEyeSlash />}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      {errorMessage && (
        <Text color={"red"} fontSize={"smaller"} mt={2}>
          {errorMessage}
        </Text>
      )}
    </FormControl>
  );
}
