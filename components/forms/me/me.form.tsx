import React, { use, useState } from "react";
import Image from "next/image";
import Dialog from "@/components/shared/appDialog";
import { signOut } from "next-auth/react";
import { Tab } from "@headlessui/react";
import MyDetails from "./my-detailts";
import Password from "./Password";
import Billing from "./Billing";
import { Session } from "next-auth";

export interface UserSession {
  session:
    | (Session & {
        user?: {
          id?: string | null;
        };
      })
    | null;
}
const Me = ({ session }: UserSession) => {
  const page = [
    {
      title: "My Details",
      components: <MyDetails session={session} />,
    },
    {
      title: "Password",
      components: <Password session={session} />,
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
        <div className="w-10 h-10">
          <Image
            src={session?.user?.image || ""}
            alt="Avatar"
            objectFit="cover"
            loading="lazy"
            width={500}
            height={500}
            className="rounded-full cursor-pointer max-w-10 max-h-10 w-full h-full"
            onClick={() => setIsDialogOpen((prev) => !prev)}
          />
        </div>
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
