"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import AboutInteractiveSection from "../Components/about/AboutInteractiveSection";
import AboutContent from "../Components/about/AboutContent";
import FAQ from "../Components/faq/FAQ";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white font-sans">
      {/* 네비게이션 */}
      <Navbar />

      <main className="px-6 md:px-20 pt-32 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <section className="text-center mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            XPAIO 홈페이지
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-3xl text-[#4ECDC4] font-bold italic"
          >
            "은하수가 이끄는 새로운 비전"
          </motion.p>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <Header
            title="About XPAIO"
            subtitle="XPAIO는 설계자의 창의적 열정을 담아 무한히 확장 가능한 공간을 제공하는 플랫폼입니다."
          />
          <div className="mt-10">
            <AboutInteractiveSection />
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="mb-16">
          <Header
            title="Roadmap"
            subtitle="단계별 목표와 진행 상황을 확인하세요."
          />
          <div className="mt-10">
            <AboutContent />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <Header
            title="FAQ"
            subtitle="자주 묻는 질문들을 확인하세요."
          />
          <div className="mt-10">
            <FAQ />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <Header
            title="Contact"
            subtitle="문의: contact@xpaio.com"
          />
        </section>
      </main>
    </div>
  );
}