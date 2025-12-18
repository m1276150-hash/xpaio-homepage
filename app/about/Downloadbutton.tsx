"use client";

import { motion } from "framer-motion";

export function DownloadButton() {
  const handleDownload = () => {
    // 실제 파일이 public 폴더에 있어야 작동합니다.
    const link = document.createElement("a");
    link.href = "/sample.pdf"; 
    link.download = "Xpaio_Roadmap.pdf";
    link.click();
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="bg-[#45B7AF] text-white px-12 py-5 rounded-2xl font-black text-2xl hover:bg-slate-900 transition-all shadow-lg"
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      📥 로드맵 다운로드
    </motion.button>
  );
}