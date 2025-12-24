"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  // 빌드 오류를 일으키는 'e' 참조를 모두 제거하고 
  // 순수하게 정적인 텍스트와 구조만 남겼습니다.
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-black text-[#4ECDC4] mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-8">길을 잃으셨나요?</h2>
        <p className="text-gray-400 mb-12 max-w-md mx-auto">
          찾으시는 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          은하수의 길잡이를 따라 메인으로 돌아가세요.
        </p>

        <Link href="/">
          {/* onClick={handleClick}이나 e 관련 참조가 없는지 다시 확인하세요! */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
            {...({} as any)} // className 시비 방지 마법
          >
            <button 
              type="button" 
              className="px-12 py-4 rounded-2xl bg-[#4ECDC4] text-black font-black text-xl hover:bg-[#FFD93D] transition-all shadow-xl cursor-pointer"
            >
              홈으로 돌아가기
            </button>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}