import {
  GetFollowersForUser,
  GetFriendsForUser,
  GetUserByUsername,
} from "@/actions";
import { auth } from "@/auth";
import { ProfileInfo } from "@/components";
import { notFound } from "next/navigation";

export default async function ProfilePage({
  params: { username },
}: {
  params: { username: string };
}) {
  const session = await auth();
  const id = session?.user.id!;
  const { data: friends } = await GetFriendsForUser(id);
  const { data: followers } = await GetFollowersForUser(id);
  const { data: user, error } = await GetUserByUsername(
    decodeURIComponent(username).substring(1)
  );

  const isFriend = (user_id: string) => {
    const friend = friends?.filter(({ id }) => id === user_id);
    return !!friend?.length
  };

  const isFollower = (user_id: string) => {
    const follower = followers?.filter(({ id }) => id === user_id);
    return !!follower?.length;
  };

  if (error) notFound();
  return (
    <ProfileInfo
      user={user!}
      currentUser={id}
      isFollower={isFollower(user?.id!)}
      isFriend={isFriend(user?.id!)}
    />
  );
}
