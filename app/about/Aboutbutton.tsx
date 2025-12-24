"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function AboutButton() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.push("/")}
      className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-2xl hover:bg-[#45B7AF] transition-all shadow-lg"
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