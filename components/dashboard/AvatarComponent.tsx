import { Avatar, ResponsiveValue } from "@chakra-ui/react";
import { User } from "@prisma/client";
import Link from "next/link";

export function AvatarComponent({
  size,
  user,
}: {
  size: ResponsiveValue<string>;
  user: User;
}) {
  return (
    <Link href={"/profile"}>
      <Avatar
        colorScheme="brand"
        size={size}
        name={`${user?.first_name} ${user?.last_name}`}
      />
    </Link>
  );
}
