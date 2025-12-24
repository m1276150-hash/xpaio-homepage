"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white flex flex-col items-center justify-center p-6 text-center">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <h1 className="text-9xl font-black text-[#4ECDC4] mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-8">길을 잃으셨나요?</h2>
        <Link href="/">
          {/* onClick={handleClick} 같은 유령 참조가 절대 없어야 합니다 */}
          <button 
            type="button" 
            className="px-12 py-4 rounded-2xl bg-[#4ECDC4] text-black font-black text-xl hover:bg-[#FFD93D] transition-all"
          >
            홈으로 돌아가기
          </button>
        </Link>
      </motion.div>
    </div>
  );
}