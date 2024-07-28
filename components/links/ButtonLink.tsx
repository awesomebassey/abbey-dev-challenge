import { Button } from "@chakra-ui/react";
import Link from "next/link";

export function ButtonLink({
  href,
  text,
  colorScheme,
  variant,
}: {
  href: string;
  text: string;
  colorScheme: string;
  variant: string;
}) {
  return (
    <Link href={href}>
      <Button colorScheme={colorScheme} variant={variant} type="button">
        {text}
      </Button>
    </Link>
  );
}
