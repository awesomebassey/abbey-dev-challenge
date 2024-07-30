import { Button } from "@chakra-ui/react";
import Link from "next/link";

export function ButtonLink({
  href,
  text,
  colorScheme,
  variant,
  size,
}: {
  href: string;
  text: string;
  colorScheme: string;
  variant: string;
  size?: string
}) {
  return (
    <Link href={href}>
      <Button size={size} colorScheme={colorScheme} variant={variant} type="button">
        {text}
      </Button>
    </Link>
  );
}
