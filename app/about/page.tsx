"use client"; // [해결] 프리렌더링 중 이벤트 핸들러(onClick 등) 전달 오류를 방지합니다.

import React from "react";
// 파일명을 'Header.tsx'로 수정하셨으므로 대문자로 불러옵니다.
import Header from "../../components/Header"; 
// 파일명을 'Aboutinteractivesection.tsx'로 수정하셨으므로 해당 경로를 따릅니다.
import { AboutInteractiveSection } from "../../components/about/Aboutinteractivesection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* 상단 헤더: 대문자 Header 컴포넌트 호출 */}
      <Header />

      <main className="flex-1 p-8 md:p-20 pt-32 max-w-7xl mx-auto w-full">
        {/* 정적 섹션: 은하수님이 이끄는 비전 문구 */}
        <section className="text-center mb-24">
          <h1 className="text-6xl md:text-9xl font-black mb-12 text-slate-900 tracking-tighter">
            Xpaio 로드맵
          </h1>
          <p className="text-2xl md:text-4xl text-[#45B7AF] font-bold mb-8 italic">
            "은하수가 이끄는 새로운 비전"
          </p>
        </section>

        {/* 인터랙티브 섹션: 빌드 에러의 원인이었던 이벤트 핸들러가 포함된 영역 */}
        <div className="text-center pb-32">
          <AboutInteractiveSection />
        </div>
      </main>
    </div>
  );
}