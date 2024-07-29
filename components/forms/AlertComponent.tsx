import {
    Alert,
    AlertDescription,
    AlertIcon,
  } from "@chakra-ui/react";
  
  export function AlertComponent({
    status,
    message,
  }: {
    status: "info" | "warning" | "success" | "error" | "loading" | undefined;
    message: string;
  }) {
    return (
      <Alert status={status} borderRadius={8} mb={5} position={"relative"}>
        <AlertIcon />
        <AlertDescription fontSize={"sm"}>{message}</AlertDescription>
      </Alert>
    );
  }
  