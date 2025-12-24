"use client";

import React from "react";

export default function FAQ() {
  return (
    <div className="bg-white/5 p-10 rounded-2xl border border-white/10 shadow-xl space-y-6">
      <h2 className="text-2xl font-bold text-[#4ECDC4]">자주 묻는 질문 (FAQ)</h2>
      <ul className="space-y-4 text-gray-300">
        <li>
          <strong>Q:</strong> XPAIO는 무엇인가요?<br />
          <strong>A:</strong> 창의적 열정을 담아 무한히 확장 가능한 플랫폼입니다.
        </li>
        <li>
          <strong>Q:</strong> 어떻게 참여할 수 있나요?<br />
          <strong>A:</strong> 커뮤니티 가입 후 로드맵을 따라가며 프로젝트에 참여할 수 있습니다.
        </li>
        <li>
          <strong>Q:</strong> 로드맵은 어디서 확인할 수 있나요?<br />
          <strong>A:</strong> 메인 홈페이지의 Roadmap 섹션에서 단계별 목표를 확인할 수 있습니다.
        </li>
        <li>
          <strong>Q:</strong> 문의는 어디로 하면 되나요?<br />
          <strong>A:</strong> contact@xpaio.com 으로 언제든 연락주세요.
        </li>
      </ul>
    </div>
  );
}