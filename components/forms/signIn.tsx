import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "@/components/shared/customButton";
import { Form } from "@/components/shared/form";
import { ControlledInput } from "@/components/shared/controlled-input";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import google from "@/public/assets/google.png";
import { signInSchema } from "@/constant/authorization.models";

const SignIn = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(signInSchema),
  });

  return (
    <div className="text-2xl leading-7 font-bold mb-2 flex flex-col gap-4 mt-4">
      <CustomButton
        title={`Sign in with Google`}
        containerStyles="secondary"
        Icon={google}
      />
      <div className="flex items-center w-full">
        <div className=" flex-grow bg-gray-400 h-px"></div>
        <p className="mx-4 text-gray-500 text-sm lowercase">
          or sign in with email
        </p>
        <div className=" flex-grow bg-gray-400 h-px"></div>
      </div>

      <Form
        onSubmit={handleSubmit((form) => console.log(form))}
        isLoading={false}
        submitButtonLabel="Sign In"
        form={
          <div className="relative flex flex-col gap-4">
            <ControlledInput
              control={control}
              errors={errors.email}
              name="email"
              inputProps={{ type: "text" }}
              label="Email"
            />
            <div className="relative">
              <Link
                className="link right-1 absolute text-end top-1 "
                href={"?flow=password-reset"}
              >
                Forgot?
              </Link>
              <ControlledInput
                control={control}
                errors={errors.password}
                name="password"
                label="Password"
                inputProps={{ type: "password" }}
              />
            </div>
          </div>
        }
      />
      <p className="text-sm my-2 flex justify-center gap-1 font-montserrat items-center dark:text-clear">
        Don't have an account?
        <Link className="link" href={"?flow=signup"}>
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
