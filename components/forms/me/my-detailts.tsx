import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";

import { Form } from "@/components/shared/forms/form";
import { ControlledInput } from "@/components/shared/inputs/controlled-input";
import { MyDetailsScheme } from "@/constants/settings";
import { useState } from "react";
import Image from "next/image";
import { UserProps } from "./me.form";

const MyDetails = ({ user }: UserProps) => {
  const [avatar, setAvatar] = useState(user?.image || "");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
    resolver: yupResolver(MyDetailsScheme),
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
        onSubmit={handleSubmit((form) => console.log(form))}
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
            <ControlledInput
              control={control}
              name="email"
              label="Email"
              inputProps={{ type: "text" }}
              errors={errors.email}
            />
          </>
        }
      />
    </div>
  );
};

export default MyDetails;
