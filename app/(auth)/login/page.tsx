"use client";
import React from "react";
import SidePicture from "@/app/(auth)/components/SidePicture";
import AuthFormSection from "@/app/(auth)/components/AuthFormSection";

import { AnimatePresence, motion } from "framer-motion";

const LogIn: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: "-25px" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "25px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="shadow-md rounded-lg"
      >
        <div className="bg-white max-h-screen md:h-1/3 flex flex-row items-center justify-center p-5 my-auto">
          <SidePicture
            alt="login"
            src="/login-pic.webp"
            className="hidden md:flex"
          />
          <AuthFormSection
            formType="login"
            className="form mb-2 w-full h-full md:w-2/5"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LogIn;
