"use client";

import { AddFriend, RemoveFriend } from "@/actions";
import { showToast } from "@/constants";
import { Button, useToast } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useTransition } from "react";

export function AddFriendButton({
  id,
  user_id,
  isFriend,
  size
}: {
  id: string;
  user_id: string;
  isFriend: boolean;
  size: string;
}) {
  const path = usePathname();
  const [isPending, startTransition] = useTransition();
  const toast = useToast();

  const addFriend = () => {
    startTransition(async () => {
      try {
        await AddFriend(id, user_id, path);
        showToast(toast, "Friend Added", "success");
      } catch (error) {
        showToast(
          toast,
          "Something went wrong!",
          "error",
          "Try adding the friend again"
        );
      }
    });
  };

  const removeFriend = () => {
    startTransition(async () => {
      try {
        await RemoveFriend(id, user_id, path);
        showToast(toast, "Friend Removed", "success");
      } catch (error) {
        showToast(
          toast,
          "Something went wrong!",
          "error",
          "Try removing the friend again"
        );
      }
    });
  };

  return (
    <Button
      size={size}
      colorScheme={"secondary"}
      variant={"solid"}
      onClick={isFriend ? removeFriend : addFriend}
      isLoading={isPending}
    >
      {isFriend ? "Remove Friend" : "Add Friend"}
    </Button>
  );
}
