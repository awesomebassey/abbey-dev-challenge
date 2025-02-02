import { IconType } from "react-icons/lib";
import {
  PiGearBold,
  PiGridFourFill,
  PiUserCircleBold,
  PiUserSwitchBold,
  PiUsersBold,
  PiUsersFourBold,
} from "react-icons/pi";

export const sidemenu: {
  icon: IconType;
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
    query: "friends",
  },
  {
    icon: PiUsersBold,
    label: "Followers",
    link: "/people",
    query: "followers",
  },
  {
    icon: PiGearBold,
    label: "Settings",
    link: "/settings",
  },
];

export const personalInfoFields: {
  label: string;
  name: string;
  type: "text" | "email";
  colSpan: 1 | 2;
  readonly?: boolean;
  isRequired: boolean;
}[] = [
  {
    label: "Username",
    name: "username",
    type: "text",
    colSpan: 2,
    readonly: true,
    isRequired: true,
  },
  {
    label: "First Name",
    name: "first_name",
    type: "text",
    colSpan: 1,
    isRequired: true
  },
  {
    label: "Last Name",
    name: "last_name",
    type: "text",
    colSpan: 1,
    isRequired: true
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    colSpan: 1,
    isRequired: true
  },
  {
    label: "Phone Number",
    name: "phone",
    type: "text",
    colSpan: 1,
    isRequired: true
  },
  {
    label: "City",
    name: "city",
    type: "text",
    colSpan: 1,
    isRequired: false
  },
  {
    label: "State",
    name: "state",
    type: "text",
    colSpan: 1,
    isRequired: false
  },
  {
    label: "Residential Address",
    name: "address",
    type: "text",
    colSpan: 2,
    isRequired: false
  },
];

export const peopleTags: {tag: string; icon: IconType}[] = [
  {
    tag: "Friends",
    icon: PiUsersFourBold
  },
  {
    tag: "Followers",
    icon: PiUsersBold
  },
  {
    tag: "People You May Know",
    icon: PiUserSwitchBold
  },
]

export const showToast = (
  toast: any,
  title: string,
  status: "success" | "error",
  description?: string
) => {
  toast({
    id: "toast",
    title: title,
    description: description,
    status: status,
    duration: 3000,
    isClosable: true,
  });
};