"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../../Components/Header";
import FAQ from "../../Components/faq/FAQ";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white flex flex-col font-sans">
      {/* 상단 헤더 */}
      <Header
        title="FAQ"
        subtitle="자주 묻는 질문들을 확인하세요."
      />

      <main className="flex-1 px-6 md:px-20 pt-32 max-w-7xl mx-auto w-full">
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FAQ />
          </motion.div>
        </section>
      </main>
    </div>
  );
}