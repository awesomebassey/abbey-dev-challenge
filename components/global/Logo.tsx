import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { AbbeyLogo } from "@/components";
import Image from "next/image";

export function Logo() {
  return (
    <Link as={NextLink} href="/" textAlign={"center"}>
      <Image src={AbbeyLogo} alt="Logo Mark" width={70} />
    </Link>
  );
}
