import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form } from "@/components/shared/forms/form";
import { ControlledInput } from "@/components/shared/inputs/controlled-input";
import { useState } from "react";
import { PasswordScheme } from "@/constants/settings";

const Password = () => {
  const [avatar, setAvatar] = useState("auth.user?.avatar");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
      newPasswordConfirm: "",
    },
    resolver: yupResolver(PasswordScheme),
  });
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target?.result as string;

        setAvatar(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 mt-2">
      <Form
        onSubmit={handleSubmit((form) => console.log(form))}
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
