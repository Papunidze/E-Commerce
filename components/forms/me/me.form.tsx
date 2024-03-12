import React, { use, useState } from "react";
import Image from "next/image";
import Dialog from "@/components/shared/appDialog";
import { signOut } from "next-auth/react";
import { Tab } from "@headlessui/react";
import MyDetails from "./my-detailts";
import Password from "./Password";
import Billing from "./Billing";

export interface UserProps {
  user:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;
}

const Me = ({ user }: UserProps) => {
  const page = [
    {
      title: "My Details",
      components: <MyDetails user={user} />,
    },
    {
      title: "Password",
      components: <Password />,
    },
    {
      title: "Billing",
      components: <Billing />,
    },
  ];

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
          title={"Settings"}
          onClose={() => setIsDialogOpen((prev) => !prev)}
        >
          <div className="w-full max-w-md  py-4">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                {page.map((element, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      `w-full rounded-lg py-1.5 text-sm font-medium leading-5  ring-offset-2 ring-primary-light focus:outline-none focus:ring-2 transition-all ${
                        selected
                          ? "bg-secondary text-primary shadow"
                          : "text-accent hover:bg-white/[0.12] hover:text-primary-light hover:bg-gray-300"
                      }`
                    }
                  >
                    {element.title}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2 font-sans">
                {page.map((element, index) => (
                  <Tab.Panel key={index} className={`rounded-xl bg-white p-3 `}>
                    {element.components}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className="flex items-center justify-end w-full">
            <button
              onClick={() => signOut()}
              className="button primary w-auto "
            >
              Logout
            </button>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default Me;
