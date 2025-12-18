"use client"; // [진단 해결] 이 지시어가 있어야 onClick 핸들러를 사용할 수 있습니다.

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AboutCta() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/"); // 기존의 메인 이동 로직
  };

  return (
    <motion.button
      onClick={handleClick}
      className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-2xl hover:bg-[#45B7AF] transition-all shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      메인으로 돌아가기
    </motion.button>
  );
}