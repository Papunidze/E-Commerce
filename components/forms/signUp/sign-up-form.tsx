import { Form } from "@/components/shared/forms/form";
import { ControlledInput } from "@/components/shared/inputs/controlled-input";
import { signUpScheme } from "@/constants/authorization";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import GoogleImg from "@/public/assets/google.png";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const router = useRouter();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(signUpScheme),
  });

  return (
    <div className="text-2xl leading-7 font-bold mb-2 flex flex-col gap-4 mt-4">
      <button className="button secondary flex items-center justify-center">
        <Image src={GoogleImg} alt="Google" className="w-6" />
        Sign up with Google
      </button>
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
              inputProps={{ type: "text" }}
              label="Email"
              errors={errors.email}
            />
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
        }
      />
      <p className="text-sm my-2 flex justify-center gap-1 font-montserrat items-center dark:text-clear">
        Already have an account?
        <Link className="link" href={"?flow=sign-in"}>
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
