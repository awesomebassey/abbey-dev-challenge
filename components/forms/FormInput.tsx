"use client";

import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";

export function FormInput({
  type,
  name,
  isRequired,
  placeholder
}: {
  name?: string;
  type: "text" | "email" | "number" | "password";
  isRequired?: boolean;
  placeholder?: string;
}) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <FormControl>
      <InputGroup>
        <Input
          id={name}
          type={type === "password" && show ? "text" : type}
          placeholder={placeholder}
          bg={"white"}
          isRequired={isRequired}
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
    </FormControl>
  );
}