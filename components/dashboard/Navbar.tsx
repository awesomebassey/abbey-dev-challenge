"use client";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { AvatarComponent, Logo, Sidebar } from "@/components";
import {
  PiBellSimpleBold,
  PiDotsThreeOutlineVerticalLight,
} from "react-icons/pi";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { User } from "@prisma/client";

export function Navbar({ user }: { user: User }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = searchParams.get("q");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onClose();
  }, [pathname, params]);

  return (
    <Flex
      py={5}
      px={{ base: 5, md: 9 }}
      bg={"secondary.500"}
      alignItems={"center"}
    >
      <Logo className="filterToWhite" />
      <Flex ms={"auto"} gap={4} alignItems={"center"}>
        <Box color={"white"} _hover={{ color: "brand.500" }} cursor={"pointer"}>
          <PiBellSimpleBold fontSize={"1.5rem"} />
        </Box>
        <AvatarComponent
          size="sm"
          first_name={user.first_name!}
          last_name={user.last_name!}
        />
        <Box display={{ base: "block", md: "none" }}>
          <Box
            display={{ base: "block", md: "none" }}
            color={"white"}
            cursor={"pointer"}
            onClick={onOpen}
          >
            <PiDotsThreeOutlineVerticalLight fontSize={"1.2rem"} />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            size={"xs"}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody p={0}>
                <Sidebar user={user} />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </Flex>
  );
}
