"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "창의적 공간",
    desc: "XPAIO는 설계자의 창의적 열정을 담아 무한히 확장 가능한 공간을 제공합니다.",
  },
  {
    id: 2,
    title: "커뮤니티 중심",
    desc: "사용자와 함께 성장하는 커뮤니티를 기반으로 새로운 가치를 창출합니다.",
  },
  {
    id: 3,
    title: "혁신적 게임",
    desc: "파이 네트워크 기반의 혁신적인 게임을 통해 글로벌 유저를 연결합니다.",
  },
  {
    id: 4,
    title: "거버넌스",
    desc: "독자적인 거버넌스와 경제 시스템을 완성하여 지속 가능한 생태계를 구축합니다.",
  },
];

export default function AboutInteractiveSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: item.id * 0.2 }}
          onClick={() => setActiveId(item.id)}
          className={`cursor-pointer p-8 rounded-xl border border-white/10 shadow-lg transition 
            ${activeId === item.id ? "bg-[#4ECDC4]/20" : "bg-white/5 hover:bg-white/10"}`}
        >
          <h3 className="text-2xl font-bold text-[#4ECDC4] mb-4">{item.title}</h3>
          <p className="text-gray-300">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}