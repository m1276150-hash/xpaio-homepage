"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutInteractiveSection() {
  const sections = [
    { title: "Vision", content: "은하수가 이끄는 새로운 미래" },
    { title: "Mission", content: "무한히 확장 가능한 플랫폼 구축" },
    { title: "Values", content: "설계자의 창의적 열정 존중" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {sections.map((item, index) => (
        <div key={index} className="inline-block"> {/* className을 일반 div로 이동 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="button"
              className="w-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all cursor-pointer text-left"
            >
              <h3 className="text-[#4ECDC4] text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.content}</p>
            </button>
          </motion.div>
        </div>
      ))}
    </div>
  );
}