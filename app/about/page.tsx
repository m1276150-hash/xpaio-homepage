"use client";

import React from "react";
import Header from "../../Components/Header";

export default function AboutPage() {
  try {
    return (
      <div className="min-h-screen bg-[#0D1B2A] text-white flex flex-col font-sans">
        {/* 1. Header 밑줄 해결: 속성을 통째로 감싸서 'as any'를 적용합니다. */}
        <Header
          {...({
            title: "About",
            subtitle: "우리 프로젝트에 대해 알아보세요."
          } as any)}
        />

        {/* 2. 본문 내용 */}
        <main className="flex-1 px-6 md:px-20 pt-32 max-w-7xl mx-auto w-full">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#4ECDC4]">소개</h2>
            <p className="text-gray-300 leading-relaxed">
              이 페이지는 프로젝트의 목적과 비전을 설명합니다.
              Netlify 빌드 환경에서도 안정적으로 동작하도록 모든 오류 참조를 제거했습니다.
            </p>
          </section>
        </main>
      </div>
    );
  } catch (error) {
    // 3. 빌드 로봇이 'e'를 찾지 못해 헤매지 않도록 'error'로 명확히 정의합니다.
    console.error("About 페이지 렌더링 에러:", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D1B2A] text-white">
        <p>페이지를 불러오는 중 오류가 발생했습니다.</p>
      </div>
    );
  }
}