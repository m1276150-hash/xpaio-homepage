"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AboutButton() {
  const router = useRouter();

  return (
    /* 1. 중복 태그 제거 및 구조 최적화 */
    <motion.button
      onClick={() => router.push("/")}
      className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-2xl hover:bg-[#45B7AF] transition-all shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      메인으로 돌아가기
    </motion.button>
  );
}