"use client";

import { Avatar } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export function AvatarComponent({size}: {size: string}) {
  const session = useSession();
  const user = session?.data?.user;
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
