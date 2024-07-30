"use server";

import { db } from "@/lib";
import { revalidatePath } from "next/cache";

export const GetFriendsForUser = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
      include: { friends: { include: { friend: true } } },
    });
    return { data: user?.friends.map(({ friend }) => friend) };
  } catch (error) {
    return { error };
  }
};

export const AddFriend = async (userId: string, friendId: string) => {
  try {
    await db.userFriend.create({
      data: {
        user_id: userId,
        friend_id: friendId,
      },
    });
  } catch (error) {
    return { error };
  }
  revalidatePath("/profile");
  return { data: "Friend added!" };
};

export const GetFollowersForUser = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
      include: { followers: { include: { follower: true } } },
    });
    return { data: user?.followers.map(({ follower }) => follower) };
  } catch (error) {
    return { error };
  }
};

export const FollowUser = async (userId: string, followerId: string) => {
  try {
    await db.userFollower.create({
      data: {
        user_id: userId,
        follower_id: followerId,
      },
    });
  } catch (error) {
    return { error };
  }
  
  revalidatePath("/profile");
  return { data: "Follower added." };
};

export const GetOtherPeopleForUser = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
      include: {
        friends: { include: { friend: true } },
        followers: { include: { follower: true } },
      },
    });
    if (!user) return { error: "User not found" };

    const otherPeople = await db.user.findMany({
      where: {
        city: user.city,
        NOT: {
          OR: [
            { id: user.id },
            { id: { in: user.friends.map(({ friend: { id } }) => id) } },
            {
              id: {
                in: user.followers.map(({ follower: { id } }) => id),
              },
            },
          ],
        },
      },
    });
    return { data: otherPeople };
  } catch (error) {
    return { error };
  }
};
