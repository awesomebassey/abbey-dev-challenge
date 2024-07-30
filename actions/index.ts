import { LoginUser } from "./login";
import { RegisterUser } from "./signup";
import { ForgotPassword, ResetPassword, ChangePassword } from "./password";
import { UpdateProfile, GetUserById } from "./user.actions";
import {
  GetFriendsForUser,
  GetFollowersForUser,
  GetOtherPeopleForUser,
  AddFriend,
  FollowUser,
} from "./people.actions";

export {
  LoginUser,
  RegisterUser,
  ForgotPassword,
  ResetPassword,
  ChangePassword,
  UpdateProfile,
  GetUserById,
  GetFollowersForUser,
  GetFriendsForUser,
  GetOtherPeopleForUser,
  AddFriend,
  FollowUser
};
