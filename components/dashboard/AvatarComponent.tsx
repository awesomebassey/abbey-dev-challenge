import { Avatar, ResponsiveValue } from "@chakra-ui/react";
import { User } from "@prisma/client";
import Link from "next/link";

export function AvatarComponent({
  size,
  first_name,
  last_name
}: {
  size: ResponsiveValue<string>;
  first_name: string;
  last_name: string;
}) {
  return (
    <Link href={"/profile"}>
      <Avatar
        colorScheme="brand"
        size={size}
        name={`${first_name} ${last_name}`}
      />
    </Link>
  );
}
