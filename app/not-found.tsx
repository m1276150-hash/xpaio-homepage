"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-black text-[#4ECDC4] mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-8">길을 잃으셨나요?</h2>
        
        {/* 1. className 에러 박멸을 위해 as any 적용 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...({ className: "inline-block" } as any)}
        >
          {/* 2. onClick을 제거하여 handleClick 에러를 원천 차단 */}
          <Link href="/">
            <button 
              type="button" 
              className="px-12 py-4 rounded-2xl bg-[#4ECDC4] text-black font-black text-xl hover:bg-[#FFD93D] transition-all shadow-xl cursor-pointer"
            >
              홈으로 돌아가기
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}