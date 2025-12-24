"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../../Components/Header";
import AboutInteractiveSection from "../../Components/about/AboutInteractiveSection";
import AboutContent from "./Aboutcontent";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white flex flex-col font-sans">
      {/* 상단 헤더 */}
      <Header
        title="About XPAIO"
        subtitle="XPAIO는 설계자의 창의적 열정을 담아 무한히 확장 가능한 공간을 제공하는 플랫폼입니다."
      />

      <main className="flex-1 px-6 md:px-20 pt-32 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <section className="text-center mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black mb-8 text-white tracking-tighter"
          >
            Xpaio 로드맵
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-3xl text-[#4ECDC4] font-bold mb-8 italic"
          >
            "은하수가 이끄는 새로운 비전"
          </motion.p>
        </section>

        {/* 인터랙티브 섹션 */}
        <section className="text-center pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <AboutInteractiveSection />
          </motion.div>
        </section>

        {/* 로드맵 콘텐츠 */}
        <section className="pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <AboutContent />
          </motion.div>
        </section>
      </main>
    </div>
  );
}
