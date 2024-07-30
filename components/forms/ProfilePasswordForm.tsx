"use client";

import { Card, CardBody, Text } from "@chakra-ui/react";
import { Form, FormInput } from "@/components";
import { PasswordSchema } from "@/schemas";
import { ChangePassword } from "@/actions/password";
import { User } from "@prisma/client";

export function ProfilePasswordForm({user}: {user: User}) {
  return (
    <Card w={"full"}>
      <CardBody display={"flex"} flexDirection={"column"} gap={5}>
        <Text fontWeight={"semibold"}>Change Password</Text>
        <Form
          buttonProps={{ mt: 3, text: "Reset Password" }}
          schema={PasswordSchema}
          action={ChangePassword}
          redirect="/auth/login"
          defaultValues={{ id: user.id }}
        >
          {({ register, errors }) => (
            <>
              <FormInput
                name="old_password"
                register={register}
                errors={errors!}
                placeholder="Old Password"
                type="password"
                isRequired={true}
              />
              <FormInput
                name="password"
                register={register}
                errors={errors!}
                placeholder="New Password"
                type="password"
                isRequired={true}
              />
              <FormInput
                name="confirm_password"
                register={register}
                errors={errors!}
                placeholder="Confirm New Password"
                type="password"
                isRequired={true}
              />
            </>
          )}
        </Form>
      </CardBody>
    </Card>
  );
}
