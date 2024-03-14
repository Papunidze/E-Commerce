import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form } from "@/components/shared/forms/form";
import { ControlledInput } from "@/components/shared/inputs/controlled-input";
import { PasswordScheme } from "@/constants/settings";
import { updatePassword } from "./me.api";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { UserSession } from "./me.form";

const Password = ({ session }: UserSession) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
      newPasswordConfirm: "",
    },
    resolver: yupResolver(PasswordScheme),
  });
  const $updatePassword = useMutation(updatePassword);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 mt-2">
      <Form
        onSubmit={handleSubmit((form) =>
          $updatePassword.mutate(
            { ...form, userId: session?.user?.id || "" },
            {
              onSuccess: () => {
                toast.success("Your password has been successfully reset");
                reset();
              },
              onError: (error) => {
                const customError = error as { error: string };

                toast.error(customError.error);
              },
            }
          )
        )}
        submitButtonLabel="Save"
        btnStyle="w-fit  px-5"
        form={
          <>
            <ControlledInput
              control={control}
              name="password"
              inputProps={{ type: "password" }}
              label="Current password"
              errors={errors.password}
            />
            <ControlledInput
              control={control}
              name="newPassword"
              label="New password"
              inputProps={{ type: "password" }}
              errors={errors.newPassword}
            />
            <ControlledInput
              control={control}
              name="newPasswordConfirm"
              label="Confirm password"
              inputProps={{ type: "password" }}
              errors={errors.newPasswordConfirm}
            />
          </>
        }
      />
    </div>
  );
};

export default Password;
