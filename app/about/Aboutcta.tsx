"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Aboutcta() {
  const handleClick = () => {
    // 이동하고 싶은 경로나 동작을 여기에 적으세요. 
    // 예: window.location.href = "/contact";
    console.log("CTA Clicked");
  };

  return (
    <div className="flex justify-center mt-12">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          type="button"
          onClick={handleClick}
          className="bg-white/10 text-white px-12 py-5 rounded-2xl font-black text-2xl hover:bg-[#4ECDC4] hover:text-black transition-all shadow-xl backdrop-blur-sm cursor-pointer"
        >
          지금 시작하기
        </button>
      </motion.div>
    </div>
  );
}