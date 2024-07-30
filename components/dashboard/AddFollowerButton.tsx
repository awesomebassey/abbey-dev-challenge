"use client";

import { FollowUser, UnfollowUser } from "@/actions";
import { showToast } from "@/constants";
import { Button, useToast } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useTransition } from "react";

export function AddFollowerButton({
  id,
  user_id,
  isFollower,
  size
}: {
  user_id: string;
  id: string;
  isFollower: boolean;
  size: string;
}) {
  const path = usePathname();
  const [isPending, startTransition] = useTransition();
  const toast = useToast();

  const followUser = () => {
    startTransition(async () => {
      try {
        await FollowUser(id, user_id, path);
        showToast(toast, "Follower Added", "success");
      } catch (error) {
        showToast(
          toast,
          "Something went wrong!",
          "error",
          "Try following the user again"
        );
      }
    });
  };

  const unfollowUser = () => {
    startTransition(async () => {
      try {
        await UnfollowUser(id, user_id, path);
        showToast(toast, "Unfollowed!", "success");
      } catch (error) {
        showToast(
          toast,
          "Something went wrong!",
          "error",
          "Try unfollowing the user again"
        );
      }
    });
  };

  return (
    <Button
      size={size}
      colorScheme={"teal"}
      variant={"solid"}
      onClick={isFollower ? unfollowUser : followUser}
      isLoading={isPending}
    >
      {isFollower ? "Unfollow" : "Follow"}
    </Button>
  );
}
