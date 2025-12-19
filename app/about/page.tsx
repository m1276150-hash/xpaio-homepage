'use client'; 

import React from 'react';
import Header from '@/components/Header';
import { AboutInteractiveSection } from '@/components/about/Aboutinteractivesection';

export default function AboutPage() {
  return (
    /* bg-[#0D1B2A]로 변경하여 globals.css 테마와 일치시킴 */
    <div className="min-h-screen bg-[#0D1B2A] text-white flex flex-col font-sans">
      <Header />

      {/* 히어로 배경을 위해 'hero' 클래스 적용 여부 검토 */}
      <main className="flex-1 px-6 md:px-20 pt-32 max-w-7xl mx-auto w-full">
        {/* 정적 섹션 */}
        <section className="text-center mb-16 md:mb-24">
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-white tracking-tighter">
            Xpaio 로드맵
          </h1>
          <p className="text-xl md:text-3xl text-[#4ECDC4] font-bold mb-8 italic">
            "은하수가 이끄는 새로운 비전"
          </p>
        </section>

        {/* 인터랙티브 섹션 (로드맵 상세 내용) */}
        <section className="text-center pb-32">
          {/* AboutInteractiveSection 내부에서 roadmap-01.png 등을 사용하는지 확인하세요! */}
          <AboutInteractiveSection />
        </section>
      </main>
    </div>
  );
}