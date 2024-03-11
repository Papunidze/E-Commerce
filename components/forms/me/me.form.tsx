import React, { useState } from "react";
import Image from "next/image";
import Dialog from "@/components/shared/appDialog";
import { signOut } from "next-auth/react";

interface UserProps {
  user:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;
}
const Me = ({ user }: UserProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="relative inline-block">
        <Image
          src={user?.image || ""}
          alt="Avatar"
          objectFit="cover"
          loading="lazy"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
          onClick={() => setIsDialogOpen((prev) => !prev)}
        />
        <Dialog
          isOpen={isDialogOpen}
          title={user?.name || ""}
          onClose={() => setIsDialogOpen((prev) => !prev)}
        >
          <div>User</div>
          <button onClick={() => signOut()} className="button primary w-2">
            Logout
          </button>
        </Dialog>
      </div>
    </>
  );
};

export default Me;
