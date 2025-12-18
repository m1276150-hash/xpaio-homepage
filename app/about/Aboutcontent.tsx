"use client";

import { motion } from "framer-motion";

export function AboutContent() {
  const roadmapSteps = [
    { title: "Phase 01", desc: "Xpaio 생태계의 기초 구축 및 커뮤니티 조성" },
    { title: "Phase 02", desc: "파이 네트워크 기반의 혁신적인 게임 런칭" },
    { title: "Phase 03", desc: "글로벌 유저 확장을 위한 공격적인 마케팅" },
    { title: "Phase 04", desc: "Xpaio만의 독자적인 거버넌스 및 경제 시스템 완성" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
      {roadmapSteps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all"
        >
          <h3 className="text-3xl font-black text-[#45B7AF] mb-4">{step.title}</h3>
          <p className="text-xl text-slate-600 font-semibold leading-relaxed">
            {step.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}