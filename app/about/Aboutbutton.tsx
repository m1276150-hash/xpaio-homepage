"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Aboutbutton() {
  const router = useRouter();

  return (
    // 1. 일반 div에 className을 주어 TypeScript 에러를 원천 차단합니다.
    <div className="inline-block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          type="button"
          onClick={() => router.push("/")}
          className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-2xl hover:bg-[#45B7AF] transition-all shadow-lg cursor-pointer"
        >
          메인으로 돌아가기
        </button>
      </motion.div>
    </div>
  );
}