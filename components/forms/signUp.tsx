import CustomButton from "@/components/shared/customButton";
import { Form } from "@/components/shared/form";
import { ControlledInput } from "@/components/shared/controlled-input";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

const SignUp = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <div className="text-2xl leading-7 font-bold mb-2 flex flex-col gap-4 mt-4">
      <CustomButton title={`Sign in with Google`} containerStyles="primary" />
      <div className="flex items-center w-full">
        <div className=" flex-grow bg-gray-400 h-px"></div>
        <p className="mx-4 text-gray-500 text-sm lowercase">
          or sign up with email
        </p>
        <div className=" flex-grow bg-gray-400 h-px"></div>
      </div>

      <Form
        onSubmit={() => console.log("work")}
        isLoading={false}
        submitButtonLabel="Sign In"
        form={
          <div className="relative flex flex-col gap-2">
            <div className="row__input_contianer">
              <ControlledInput
                control={control}
                name="name"
                inputProps={{ type: "text" }}
                label="Name"
              />
              <ControlledInput
                control={control}
                name="username"
                inputProps={{ type: "text" }}
                label="Username"
              />
            </div>
            <ControlledInput
              control={control}
              name="email"
              inputProps={{ type: "text" }}
              label="Email"
            />
            <div className="row__input_contianer">
              <ControlledInput
                control={control}
                name="password"
                label="Password"
                inputProps={{ type: "password" }}
              />
              <ControlledInput
                control={control}
                name="passwordConfirm"
                label="Repeat Password"
                inputProps={{ type: "password" }}
              />
            </div>
          </div>
        }
      />
      <p className="text-sm my-2 flex justify-center gap-1 font-montserrat items-center dark:text-clear">
        Already have an account?
        <Link className="link" href={"?flow=auth"}>
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
