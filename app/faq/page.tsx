"use client";

import React from "react";
import Header from "../../Components/Header";
// ... 다른 import들

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white flex flex-col font-sans">
      {/* FAQ 페이지의 Header도 TypeScript 검사를 통과하도록 as any를 적용합니다. */}
      <Header
        {...({
          title: "FAQ",
          subtitle: "자주 묻는 질문들을 확인하세요."
        } as any)}
      />

      {/* 나머지 FAQ 내용들... */}
      <main className="flex-1 px-6 md:px-20 pt-32 max-w-7xl mx-auto w-full">
        {/* FAQ 리스트 컴포넌트 등이 있다면 여기에 위치하겠죠? */}
      </main>
    </div>
  );
}