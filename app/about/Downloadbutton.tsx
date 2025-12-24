"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Downloadbutton() {
  const handleDownload = () => {
    alert("다운로드를 시작합니다.");
  };

  return (
    /* 1. TypeScript가 싫어하는 className을 일반 div로 옮겼습니다. */
    <div className="inline-block"> 
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          type="button"
          onClick={handleDownload}
          className="bg-[#4ECDC4] text-black px-12 py-5 rounded-2xl font-black text-2xl hover:bg-[#FFD93D] transition-all shadow-xl backdrop-blur-sm cursor-pointer"
        >
          앱 다운로드
        </button>
      </motion.div>
    </div>
  );
}