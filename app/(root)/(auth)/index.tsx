"use client";

import DialogForm from "@/components/shared/Dialog";
import { useSearchParams, useRouter } from "next/navigation";

const Authorization = () => {
  const router = useRouter();

  const searchParams = useSearchParams()!;
  const flow = searchParams.get("flow");

  return (
    <DialogForm
      isOpen={flow === "auth"}
      onClose={() => router.push(location.pathname)}
    >
      {flow}
    </DialogForm>
  );
};

export default Authorization;
