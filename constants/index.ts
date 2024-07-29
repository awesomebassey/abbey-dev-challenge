import {
  PiGearBold,
  PiGridFourFill,
  PiUserCircleBold,
  PiUsersBold,
  PiUsersFourBold,
} from "react-icons/pi";

export const sidemenu: {
  icon: any;
  label: string;
  link: string;
  query?: string;
}[] = [
  {
    icon: PiGridFourFill,
    label: "Dashboard",
    link: "/",
  },
  {
    icon: PiUserCircleBold,
    label: "Profile",
    link: "/profile",
  },
  {
    icon: PiUsersFourBold,
    label: "Friends",
    link: "/people",
    query: "friends"
  },
  {
    icon: PiUsersBold,
    label: "Followers",
    link: "/people",
    query: "followers"
  },
  {
    icon: PiGearBold,
    label: "Settings",
    link: "/settings",
  },
];
