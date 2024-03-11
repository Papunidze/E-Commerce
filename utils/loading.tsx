"use client";

import { useSession } from "next-auth/react";

const Loading = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  return status === "loading" ? <p>Loading...</p> : <>{children}</>;
};

export default Loading;
