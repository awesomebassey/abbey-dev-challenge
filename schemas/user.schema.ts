import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  username: z.string({
    required_error: "This field is required",
    invalid_type_error: "Enter your username",
  }),
  first_name: z.string({
    required_error: "This field is required",
    invalid_type_error: "Enter your First Name",
  }),
  last_name: z.string({
    required_error: "This field is required",
    invalid_type_error: "Enter your Last Name",
  }),
  email: z
    .string({
      required_error: "This field is required",
      invalid_type_error: "Enter your Email",
    })
    .email({ message: "Enter a valid email" }),
  phone: z.string({
    required_error: "This field is required",
    invalid_type_error: "Enter your Phone Number",
  }),
  city: z.string().optional(),
  state: z.string().optional(),
  address: z.string({
    required_error: "This field is required",
    invalid_type_error: "Enter your Residential Address",
  }),
});
