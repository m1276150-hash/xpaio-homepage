"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import AboutInteractiveSection from "../Components/about/AboutInteractiveSection";
import AboutContent from "./about/Aboutcontent";
import FAQ from "./faq/FAQ";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white font-sans flex flex-col">
      <Navbar {...({ title: "XPAIO" } as any)} />

      <main className="flex-1 px-6 md:px-20 pt-32 pb-20 max-w-7xl mx-auto w-full">
        
        {/* Hero Section: className 문제아들 분리 */}
        <section className="text-center mb-16 md:mb-24">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">XPAIO 공식 홈페이지</h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-xl md:text-3xl text-[#4ECDC4] font-bold italic">"은하수가 이끄는 새로운 비전"</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              이곳은 XPAIO의 로드맵, FAQ, 커뮤니티 정보를 소개하는 공간입니다. <br />
              설계자의 창의적 열정을 담아 무한히 확장 가능한 플랫폼을 경험하세요.
            </p>
          </motion.div>
        </section>

        {/* Header 문제아들: as any 마법으로 전체 박멸 */}
        <section id="about" className="mb-24">
          <Header {...({ title: "About XPAIO", subtitle: "창의적 열정을 담아 무한히 확장 가능한 공간을 제공합니다." } as any)} />
          <div className="mt-10"><AboutInteractiveSection /></div>
        </section>

        <section id="roadmap" className="mb-24">
          <Header {...({ title: "Roadmap", subtitle: "XPAIO가 걸어갈 단계별 목표와 진행 상황을 확인하세요." } as any)} />
          <div className="mt-10"><AboutContent /></div>
        </section>

        <section id="faq" className="mb-24">
          <Header {...({ title: "FAQ", subtitle: "자주 묻는 질문들을 통해 궁금증을 해결해 드립니다." } as any)} />
          <div className="mt-10"><FAQ /></div>
        </section>

        <section id="contact" className="py-10 border-t border-gray-800 text-center">
          <Header {...({ title: "Contact", subtitle: "문의사항이 있으시면 언제든 연락주세요." } as any)} />
          <p className="text-[#4ECDC4] font-bold text-xl mt-4">contact@xpaio.com</p>
        </section>
      </main>
    </div>
  );
}