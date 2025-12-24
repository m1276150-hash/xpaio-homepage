"use client";

import React from "react";
import { motion } from "framer-motion";
import { roadmapData } from "../../config";

export default function Aboutcontent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {roadmapData.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="bg-white/5 p-10 rounded-2xl border border-white/10 shadow-xl"
        >
          <h3 className="text-2xl font-black text-[#4ECDC4] mb-2">
            {item.title}
          </h3>
          <p className="text-gray-300 mb-2">{item.desc}</p>
          <p className="text-sm text-gray-400">
            📅 {item.date} | 상태: {item.status}
          </p>
        </motion.div>
      ))}
    </div>
  );
}