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
    hidden: { y: "100%" },
    visible: { y: 0 },
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
        className="bg-slate-100 w-full max-h-[calc(80%-theme(space.16))] absolute left-0 bottom-0 rounded-tl-2xl rounded-tr-2xl overflow-y-auto overflow-x-hidden h-full block md:hidden border-2 border-slate-200 border-l-8 border-r-8"
        variants={drawerVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="hidden"
      >
        <div
          className="flex w-full items-center justify-center border-slate-300 border-2 border-t-0 p-2 border-l-0 border-r-0"
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
