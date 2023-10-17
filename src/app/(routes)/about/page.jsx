"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import Navbar from "@/app/_components/Navbar";
import Welcome from "@/app/_components/Welcome";
import Info from "@/app/_components/Info";

const page = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <AnimatePresence mode='wait'>
        <motion.div
          className='slide-in'
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}></motion.div>
        <motion.div
          className='slide-out'
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}></motion.div>

        <Navbar />
        <div
          style={{
            display: "flex",
            gap: "20vh",
            flexDirection: "column",
            backgroundColor: "#e8e5e1",
          }}>
          <Welcome />
          <Info />
        </div>
      </AnimatePresence>
    </div>
  );
};

export default page;
