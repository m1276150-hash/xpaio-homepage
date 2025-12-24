"use client";

import React from "react";

export default function AboutContent() {
  return (
    <div className="bg-white/5 p-10 rounded-2xl border border-white/10 shadow-xl space-y-6">
      <h2 className="text-2xl font-bold text-[#4ECDC4]">XPAIO 로드맵</h2>
      <p className="text-gray-300">
        XPAIO는 창의적 열정을 담아 무한히 확장 가능한 플랫폼을 목표로 합니다.
        단계별 로드맵을 통해 성장 방향을 제시합니다.
      </p>
      <ul className="list-disc list-inside text-gray-400 space-y-2">
        <li>1단계: 메인 홈페이지 및 커뮤니티 구축</li>
        <li>2단계: 토큰 생태계 확장 및 파트너십</li>
        <li>3단계: 글로벌 서비스 및 플랫폼 강화</li>
        <li>4단계: 창의적 프로젝트와 협업 생태계 확대</li>
      </ul>
    </div>
  );
}