import CustomButton from "@/components/shared/customButton";
import { Form } from "@/components/shared/form";
import { ControlledInput } from "@/components/shared/controlled-input";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpScheme } from "@/constant/authorization.models";
import google from "@/public/assets/google.png";

const SignUp = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      username: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(signUpScheme),
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
          or sign up with email
        </p>
        <div className=" flex-grow bg-gray-400 h-px"></div>
      </div>

      <Form
        onSubmit={handleSubmit((form) => console.log(form))}
        isLoading={false}
        submitButtonLabel="Sign Up"
        form={
          <div className="relative flex flex-col gap-2">
            <div className="row__input_contianer">
              <ControlledInput
                control={control}
                name="name"
                inputProps={{ type: "text" }}
                label="Name"
                errors={errors.name}
              />
              <ControlledInput
                control={control}
                name="username"
                inputProps={{ type: "text" }}
                label="Username"
                errors={errors.username}
              />
            </div>
            <ControlledInput
              control={control}
              name="email"
              inputProps={{ type: "text" }}
              label="Email"
              errors={errors.email}
            />
            <div className="row__input_contianer">
              <ControlledInput
                control={control}
                name="password"
                label="Password"
                inputProps={{ type: "password" }}
                errors={errors.password}
              />
              <ControlledInput
                control={control}
                name="passwordConfirm"
                label="Repeat Password"
                inputProps={{ type: "password" }}
                errors={errors.passwordConfirm}
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
