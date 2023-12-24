"use client";

import DialogForm from "@/components/shared/Dialog";
import SignIn from "@/components/forms/signIn";
import { useSearchParams, useRouter } from "next/navigation";
import SignUp from "@/components/forms/signUp";
import ForgotPassword from "@/components/forms/forgotPassword";

const Authorization = () => {
  const router = useRouter();

  const searchParams = useSearchParams()!;
  const flow = searchParams.get("flow");

  const getPageComponent = () => {
    switch (flow) {
      case "signup":
        return <SignUp />;
      case "password-reset":
        return <ForgotPassword />;
      default:
        return <SignIn />;
    }
  };
  return (
    <DialogForm
      isOpen={Boolean(flow)}
      title="Sign In"
      onClose={() => router.push(location.pathname)}
    >
      {getPageComponent()}
    </DialogForm>
  );
};

export default Authorization;
