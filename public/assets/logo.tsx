"use client";
import React from "react";
import { motion } from "framer-motion";

function AnimatedIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="74"
      height="74"
      version="1"
      viewBox="0 0 55.5 55.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.path
        fill="#404040"
        d="M6.648-7.117v-1.5c0-.047-.046-.102-.12-.102H5.108C2.941-8.719 0-8.086 0-4.359 0-.492 2.977 0 5.11 0h1.417c.075 0 .121-.055.121-.098v-5.34H3.301v1.668h1.68v2.18c-1.899.098-3.301-.7-3.301-2.77 0-2.69 2.242-2.8 3.3-2.757zm0 0"
        transform="translate(13.732 31.793)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      ></motion.path>
      <motion.path
        fill="#404040"
        d="M3.55-1.492h-.87V-8.72H1.012v7.227h-.89c-.067 0-.122.043-.122.097v1.297C0-.055.055 0 .121 0h3.43c.078 0 .12-.055.12-.098v-1.297c0-.054-.042-.097-.12-.097zm0 0"
        transform="translate(21.914 31.793)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      ></motion.path>
      <motion.path
        fill="#404040"
        d="M6.648-7.117v-1.5c0-.047-.046-.102-.12-.102H5.108C2.941-8.719 0-8.086 0-4.359 0-.492 2.977 0 5.11 0h1.417c.075 0 .121-.055.121-.098v-5.34H3.301v1.668h1.68v2.18c-1.899.098-3.301-.7-3.301-2.77 0-2.69 2.242-2.8 3.3-2.757zm0 0"
        transform="translate(26.97 31.793)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      ></motion.path>
      <motion.path
        fill="#404040"
        d="M6.844-.129L3.53-8.652c-.035-.086-.187-.086-.219 0L.013-.13C-.023-.066.023 0 .122 0h1.491c.043 0 .098-.023.11-.066l1.699-4.86 1.723 4.86c.007.043.062.066.097.066h1.504c.074 0 .129-.066.098-.129zm0 0"
        transform="translate(35.152 31.793)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      ></motion.path>
      <motion.path
        fill="none"
        stroke="#404040"
        strokeWidth="1.556"
        d="M53.434 17.29H40.293M52.656 29.809V16.977M1.563 37.715h13.14M2.34 25.191v12.836"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      ></motion.path>
    </motion.svg>
  );
}

export default AnimatedIcon;
