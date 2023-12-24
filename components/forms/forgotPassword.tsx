import CustomButton from "@/components/shared/customButton";
import { Form } from "@/components/shared/form";
import { ControlledInput } from "@/components/shared/controlled-input";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

const ForgotPassword = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <div className="text-2xl leading-7 font-bold mb-2 flex flex-col gap-4 mt-4">
      <p className="text-xs text-gray-500 font-medium text-justify">
        Enter the email address you used when you joined, and we’ll send you
        instructions to reset your password.
      </p>
      <p className="text-xs text-gray-500 font-medium text-justify">
        For security reasons, we do NOT store your password. So rest assured
        that we will never send your password via email.
      </p>

      <Form
        onSubmit={() => console.log("work")}
        isLoading={false}
        submitButtonLabel="Sign In"
        form={
          <div className="relative flex flex-col gap-4">
            <ControlledInput
              control={control}
              name="email"
              inputProps={{ type: "text" }}
              label="Email Address"
            />
            <Link className="link absolute right-2 top-1" href={"?flow=auth"}>
              Sign in
            </Link>
          </div>
        }
      />
    </div>
  );
};

export default ForgotPassword;
