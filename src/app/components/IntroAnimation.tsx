"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasPlayed = localStorage.getItem("introPlayed");
    if (!hasPlayed) {
        setShow(true); 
        localStorage.setItem("introPlayed", "true"); 
      }
  
      if (!hasPlayed) {
        const timer = setTimeout(() => setShow(false), 5500);
        return () => clearTimeout(timer);
      }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative flex w-full max-w-5xl flex-col items-center justify-center">
        {/* M, A, and Line in one relative container */}
        <div className="relative flex w-full items-center justify-center font-serif text-7xl text-black">
          {/* Line (always centered, overlaps letters) */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1.9, ease: "easeInOut" }}
            className="absolute h-0.5 origin-center bg-black"
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
      </div>
    </div>
  );
}
