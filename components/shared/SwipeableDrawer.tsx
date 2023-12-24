import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SwipeableDrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const SwipeableDrawer = ({
  children,
  isOpen,
  onClose,
}: SwipeableDrawerProps) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
  };

  const drawerVariants = {
    hidden: { y: "100%", width: "0px" },
    visible: { y: 0, width: "100%" },
  };

  const [initialTouchY, setInitialTouchY] = useState(0);

  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <motion.div
        className={`bg-ghost-10 shadow-sm w-full max-h-[calc(80%-theme(space.16))] absolute left-0 bottom-0 rounded-tl-2xl rounded-tr-2xl overflow-y-auto overflow-x-hidden h-full block md:hidden `}
        variants={drawerVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="hidden"
      >
        <div
          className="flex w-full items-center justify-center border-slate-100 border-2 border-t-0 p-2 border-l-0 border-r-0"
          onTouchStart={(e) => setInitialTouchY(e.touches[0].clientY)}
          onTouchMove={(e) => {
            const currentTouchY = e.touches[0].clientY;
            const deltaY = currentTouchY - initialTouchY;

            if (deltaY > 50) {
              onClose();
            }
          }}
        >
          <div className="bg-slate-900 w-7 h-2 rounded-md bg-opacity-50" />
        </div>
        <div className="p-4 grid grid-cols-1 gap-4">{children}</div>
      </motion.div>
    </div>
  );
};

export default SwipeableDrawer;
