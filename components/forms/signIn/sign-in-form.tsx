import { Form } from "@/components/shared/forms/form";
import { ControlledInput } from "@/components/shared/inputs/controlled-input";
import { signInSchema } from "@/constants/authorization";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import GoogleImg from "@/public/assets/google.png";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const router = useRouter();
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(signInSchema),
  });

  return (
    <div className="text-2xl leading-7 font-bold mb-2 flex flex-col gap-4 mt-4">
      <button className="button secondary flex items-center justify-center">
        <Image src={GoogleImg} alt="Google" className="w-6" />
        Sign in with Google
      </button>
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
                className="link right-1 absolute text-end top-2 "
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
        Don`t have an account?
        <Link className="link" href={"?flow=sign-up"}>
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
