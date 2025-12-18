"use client"; // 클라이언트 컴포넌트 선언

import { useState } from "react";

export function AboutInteractiveSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6">
      <button
        onClick={() => setOpen(!open)}
        className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-2xl hover:bg-[#45B7AF] transition-all"
      >
        {open ? "상세 정보 닫기" : "로드맵 상세 보기"}
      </button>

      {open && (
        <div className="mt-4 p-6 bg-gray-100 text-black rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-2">로드맵 상세</h2>
          <p className="leading-relaxed">
            이곳에 프로젝트 로드맵이나 상세 설명을 넣을 수 있습니다.
            예: 개발 단계, 출시 일정, 주요 기능 등.
          </p>
        </div>
      )}
    </div>
  );
}