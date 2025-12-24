"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AboutCta() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <motion.button
      onClick={handleClick}
      className="bg-white/10 text-white px-12 py-5 rounded-2xl font-black text-2xl 
                 hover:bg-[#4ECDC4] hover:text-black transition-all shadow-xl backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      메인으로 돌아가기
    </motion.button>
  );
}