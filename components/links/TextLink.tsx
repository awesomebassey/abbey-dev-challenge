import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export function TextLink({
  href,
  text,
  color,
  fontWeight
}: {
  href: string;
  text: string;
  color?: string;
  fontWeight?: string;
}) {
  return (
    <Link
      as={NextLink}
      href={href}
      color={color ?? "secondary.500"}
      fontWeight={fontWeight}
    >
      {text}
    </Link>
  );
}
