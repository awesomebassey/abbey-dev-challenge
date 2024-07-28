import { Button } from "@chakra-ui/react";

export function SubmitButton({ mt, text }: { mt?: number; text: string }) {
  return (
    <Button
      variant={"solid"}
      colorScheme={"brand"}
      type="submit"
      display={"block"}
      mt={mt}
    >
      {text}
    </Button>
  );
}
