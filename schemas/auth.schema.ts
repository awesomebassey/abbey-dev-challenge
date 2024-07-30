import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string({
    required_error: "This field is required",
    invalid_type_error: "Enter your username",
  }),
  password: z
    .string({
      required_error: "This field is required",
      invalid_type_error: "Enter your password",
    })
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const RegisterSchema = z
  .object({
    username: z.string({
      required_error: "This field is required",
      invalid_type_error: "Select a username",
    }),
    password: z
      .string({
        required_error: "This field is required",
        invalid_type_error: "Enter a password",
      })
      .min(8, { message: "Password must be at least 8 characters" }),
    confirm_password: z.string(),
  })
  .superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        code: "custom",
        path: ["confirm_password"],
        message: "The passwords do not match",
      });
    }
  });

export const UsernameSchema = z.object({
  username: z.string({
    required_error: "This field is required",
    invalid_type_error: "Enter your username",
  }),
});

export const PasswordSchema = z
  .object({
    id: z.string(),
    old_password: z.string().optional(),
    password: z
      .string({
        required_error: "This field is required",
        invalid_type_error: "Enter a password",
      })
      .min(8, { message: "Password must be at least 8 characters" }),
    confirm_password: z.string(),
  })
  .superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        code: "custom",
        path: ["confirm_password"],
        message: "The passwords do not match",
      });
    }
  });
