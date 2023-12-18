"use client";

import { Popover, Transition } from "@headlessui/react";
import React, { Fragment, ReactNode, ReactElement } from "react";

interface PopoverContentProps {
  icon: ReactElement;
  title: string;
  children: ReactNode;
}

const iconProps = {
  width: 20,
  strokeWidth: 1,
  className: "cursor-pointer",
};

const PopoverContent = ({ icon, title, children }: PopoverContentProps) => {
  return (
    <Popover className="relative flex items-center flex-col py-2">
      {({ open }: { open: boolean }) => (
        <>
          <Popover.Button className="focus:outline-none">
            {React.cloneElement(icon, {
              ...iconProps,
              className: `${iconProps.className} ${open && "text-blue-500"}`,
            })}
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel
              static
              className="absolute z-10 w-64 bg-white rounded-lg shadow-md top-10"
            >
              <div className="p-4">{children}</div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default PopoverContent;
