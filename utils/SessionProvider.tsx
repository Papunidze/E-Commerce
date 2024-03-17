"use client";

import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
}
