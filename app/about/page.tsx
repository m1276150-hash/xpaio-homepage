'use client'; // 프리렌더링 중 이벤트 핸들러 오류 방지

import React from 'react';
// Header 컴포넌트
import Header from '@/components/Header';
// AboutInteractiveSection 컴포넌트
import { AboutInteractiveSection } from '@/components/about/Aboutinteractivesection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* 상단 헤더 */}
      <Header />

      <main className="flex-1 px-10 md:px-20 pt-32 max-w-7xl mx-auto w-full">
        {/* 정적 섹션 */}
        <section className="text-center mb-24">
          <h1 className="text-6xl md:text-9xl font-black mb-12 text-slate-900 tracking-tighter">
            Xpaio 로드맵
          </h1>
          <p className="text-2xl md:text-4xl text-[#45B7AF] font-bold mb-8 italic">
            "은하수가 이끄는 새로운 비전"
          </p>
        </section>

        {/* 인터랙티브 섹션 */}
        <section className="text-center pb-32">
          <AboutInteractiveSection />
        </section>
      </main>
    </div>
  );
}