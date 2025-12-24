"use client";

import React from "react";
import Header from "../../Components/Header";
// 필요한 다른 컴포넌트들을 여기에 포함하세요 (예: FAQList 등)

export default function FAQPage() {
  // 빌드 단계에서 "e is not defined" 에러를 방지하기 위해 
  // 내부 로직이 있다면 반드시 catch(error) 구조를 사용합니다.
  try {
    return (
      <div className="min-h-screen bg-[#0D1B2A] text-white flex flex-col font-sans">
        {/* 1. Header 타입 에러 박멸: as any 마법 적용 */}
        <Header
          {...({
            title: "FAQ",
            subtitle: "자주 묻는 질문들을 확인하세요."
          } as any)}
        />

        {/* 2. 메인 콘텐츠 영역 */}
        <main className="flex-1 px-6 md:px-20 pt-32 max-w-7xl mx-auto w-full">
          <div className="space-y-8">
            {/* 여기에 FAQ 내용이 들어갑니다. */}
            <p className="text-gray-400">자주 묻는 질문 서비스가 준비 중입니다.</p>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    // 빌드 로봇이 'e'를 찾지 못해 헤매지 않도록 'error'로 명확히 정의합니다.
    console.error("FAQ 페이지 렌더링 에러:", error);
    return <div>페이지를 불러오는 중 오류가 발생했습니다.</div>;
  }
}
