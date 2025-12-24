"use client";

import React from "react";
import { motion } from "framer-motion";

// Navbar 컴포넌트의 제목 부분 (로그상 18번 줄 근처)
export default function Navbar({ title }: { title?: string }) {
  return (
    <nav className="...">
      {/* ... 기존 코드들 ... */}
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
          {title || "XPAIO"}
        </h2>
      </motion.div>

      {/* ... 기존 코드들 ... */}
    </nav>
  );
}