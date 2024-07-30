"use client";

import { Card, CardBody, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { Form, FormInput } from "@/components";
import { UserSchema } from "@/schemas";
import { UpdateProfile } from "@/actions";
import { personalInfoFields } from "@/constants";
import { User } from "@prisma/client";

export function ProfileForm({ user }: { user: User | null }) {
  return (
    <Card w={"full"}>
      <CardBody display={"flex"} flexDirection={"column"} gap={5}>
        <Text fontWeight={"semibold"}>Personal Information</Text>
        <Form
          buttonProps={{ mt: 5, text: "Save Personal Information" }}
          schema={UserSchema}
          action={UpdateProfile}
          defaultValues={user}
          toaster={{
            title: "Profile updated!",
          }}
        >
          {({ register, errors }) => (
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
              {personalInfoFields.map(
                ({ name, type, colSpan, readonly, label, isRequired }) => (
                  <GridItem colSpan={{ base: 1, md: colSpan }} key={name}>
                    <FormInput
                      name={name}
                      type={type}
                      placeholder={label}
                      readonly={readonly}
                      register={register}
                      errors={errors!}
                      isRequired={isRequired}
                    />
                  </GridItem>
                )
              )}
            </SimpleGrid>
          )}
        </Form>
      </CardBody>
    </Card>
  );
}
