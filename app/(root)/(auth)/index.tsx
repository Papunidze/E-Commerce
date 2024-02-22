"use client";

import ResetPassword from "@/components/forms/reset-password/reset-password-form";
import SignIn from "@/components/forms/signIn/sign-in-form";
import SignUp from "@/components/forms/signUp/sign-up-form";
import Dialog from "@/components/shared/appDialog";
import { useRouter, useSearchParams } from "next/navigation";

const Authorization = () => {
  const router = useRouter();

  const searchParams = useSearchParams()!;

  const flow = (searchParams.get("flow") as string) ?? "";

  const isValidFlow = ["sign-up", "sign-in", "password-reset"].includes(flow);

  const formattedTitle = flow.replace(/-/g, " ");

  const getPageComponent = () => {
    switch (flow) {
      case "sign-up":
        return <SignUp />;
      case "password-reset":
        return <ResetPassword />;
      case "sign-in":
        return <SignIn />;
      default:
        return null;
    }
  };
  return isValidFlow ? (
    <Dialog
      isOpen={Boolean(flow)}
      title={formattedTitle}
      onClose={() => router.push(location.pathname)}
    >
      {getPageComponent()}
    </Dialog>
  ) : null;
};

export default Authorization;
