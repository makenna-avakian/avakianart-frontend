"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative flex flex-col items-center justify-center w-full max-w-5xl">
        {/* M, A, and Line in one relative container */}
        <div className="relative flex items-center justify-center text-7xl font-serif text-black w-full">
          {/* Line (always centered, overlaps letters) */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1.9, ease: "easeInOut" }}
            className="absolute h-0.5 bg-black origin-center"
            style={{ width: "450px" }}
          />

          {/* M + akenna */}
          <motion.div
            className="absolute left-1/2 flex"
            initial={{ x: "-100%" }}
            animate={{ x: ["-100%", "-25%", "-100%"] }}
            transition={{ duration: 3.5, times: [0, 0.6, 1], ease: "easeInOut" }}
          >
            <span>M</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1] }}
              transition={{ duration: 1, delay: 2.5 }}
              className="ml-1"
            >
              akenna
            </motion.span>
          </motion.div>

          {/* A + vakian */}
          <motion.div
            className="absolute left-1/2 flex"
            initial={{ x: "100%" }}
            animate={{ x: ["100%", "0%", "10%"] }}
            transition={{ duration: 3.5, times: [0, 0.6, 1], ease: "easeInOut" }}
          >
            <span>A</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1] }}
              transition={{ duration: 1, delay: 2.5 }}
              className="ml-1"
            >
              vakian
            </motion.span>
          </motion.div>
        </div>

        {/* Art */}
        <motion.h3
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-8 text-3xl text-black font-serif"
        >
          Art
        </motion.h3>
      </div>
    </div>
  );
}