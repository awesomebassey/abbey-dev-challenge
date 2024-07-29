"use client";

import { z } from "zod";
import { Button, Stack, useToast } from "@chakra-ui/react";
import { ReactNode, useTransition } from "react";
import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { AlertComponent } from "@/components";

export function Form<TSchema>({
  children,
  schema,
  action,
  defaultValues,
  redirect,
  toaster,
  buttonProps,
}: {
  children: (props: {
    register: UseFormRegister<z.Schema<TSchema>>;
    errors: FieldErrors | undefined;
  }) => ReactNode;
  schema: z.Schema<TSchema>;
  action: (values: any) => Promise<{ data?: any; error?: any } | undefined>;
  defaultValues?: z.Schema<TSchema>;
  redirect?: string;
  buttonProps: {
    mt: number;
    text: string;
  };
  toaster?: {
    title: string;
    description: string;
  };
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm<z.Schema<TSchema>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  function showToast(title: string, description: string) {
    toast({
      id: "toast",
      title: title,
      description: description,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  async function submitForm(values: z.Schema<TSchema>) {
    startTransition(async () => {
      try {
        const data = await action(values);
        if (data?.error) {
          throw new Error(data.error);
        }
        if (toaster) showToast(toaster.title, toaster.description);
        if (redirect) {
          return router.push(redirect);
        }
        return reset();
      } catch (error: any) {
        setError("root", {
          message: error.message || "Something went wrong, please try again.",
        });
      }
    });
  }

  return (
    <Stack width={"full"} spacing={3}>
      <form
        onSubmit={handleSubmit(submitForm)}
        onChange={() => {
          clearErrors;
          setError("root", { message: undefined });
        }}
      >
        <Stack spacing={3}>
          {errors.root?.message && (
            <AlertComponent status="error" message={errors.root.message} />
          )}
          {children({ register, errors })}
          <Button
            variant={"solid"}
            colorScheme={"brand"}
            type="submit"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={buttonProps.mt}
            isLoading={isPending}
            isDisabled={isPending}
          >
            {buttonProps.text}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
