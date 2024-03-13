import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";

import { Form } from "@/components/shared/forms/form";
import { ControlledInput } from "@/components/shared/inputs/controlled-input";
import { MyDetailsScheme } from "@/constants/settings";
import { useState } from "react";
import Image from "next/image";
import { useMutation } from "react-query";
import { updateUser } from "./me.api";
import { toast } from "react-toastify";
import { UserSession } from "./me.form";
import { useSession } from "next-auth/react";

const MyDetails = ({ session }: UserSession) => {
  const { update } = useSession();
  const [avatar, setAvatar] = useState(session?.user?.image || "");
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: session?.user?.name || "",
    },
    resolver: yupResolver(MyDetailsScheme),
  });
  const $updateUser = useMutation(updateUser);

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
      <div className="flex flex-row items-center justify-start w-full gap-6">
        <Image
          src={avatar}
          alt="Avatar"
          objectFit="cover"
          width={94}
          height={94}
          className="rounded-lg"
        />
        <div className="flex flex-col items-start justify-center gap-4 relative">
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
            id="image-upload-input"
          />
          <label
            htmlFor="image-upload-input"
            className="button primary cursor-pointer"
          >
            Change Avatar
          </label>

          <span className="text-gray-400 text-sm">
            JPG, GIF or PNG. 1MB max.
          </span>
        </div>
      </div>
      <Form
        onSubmit={handleSubmit((form) =>
          $updateUser.mutate(
            { ...form, avatar, userId: session?.user?.id },
            {
              onSuccess: ({ ...args }) => {
                toast.success(args.status);
                update({ name: form.name });
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
              name="name"
              inputProps={{ type: "text" }}
              label="Name"
              errors={errors.name}
            />
          </>
        }
      />
    </div>
  );
};

export default MyDetails;
