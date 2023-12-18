"use client";

import { Variants, motion, useCycle } from "framer-motion";
import Searchbar from "./Searchbar";

interface PathProps {
  variants: Variants;
  transition?: any;
  d?: string;
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const Menubar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <div className="z-50 flex md:hidden items-center">
        <motion.button
          onClick={() => toggleOpen()}
          animate={isOpen ? "open" : "closed"}
          className="mt-2"
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              d="M 2 2.5 L 20 2.5"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              d="M 2 16.346 L 20 16.346"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 2.5 2.5 L 18.346 17.346" },
              }}
            />
          </svg>
        </motion.button>
      </div>
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        className="w-full fixed  top-0 left-0 bg-slate-100 h-full z-40 block md:hidden"
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: "100%" },
        }}
        initial="closed"
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center mt-16 p-4  ">
          <Searchbar />
        </div>
      </motion.nav>
    </>
  );
};

export default Menubar;
