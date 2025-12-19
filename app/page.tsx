'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans overflow-x-hidden">
      {/* 상단 네비게이션 */}
      <Header />

      {/* 메인 히어로 섹션 */}
      <main className="flex-1 relative pt-40 pb-24">
        {/* 안전한 폭 컨테이너: 텍스트가 좌우에 붙지 않도록 */}
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 relative z-10">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-left md:text-center"
          >
            {/* 서브 타이틀 */}
            <h2 className="text-[#45B7AF] font-semibold tracking-[0.3em] mb-5 text-xs md:text-sm">
              WELCOME TO XPAIO
            </h2>

            {/* 메인 타이틀: clamp로 반응형 크기, 안전한 줄높이 */}
            <h1 className="font-black mb-8 leading-[1.05] tracking-tighter text-slate-900
                           [font-size:clamp(2.5rem,6vw,6rem)]">
              은하수가 이끄는 <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#45B7AF] via-[#9B5DE5] to-[#FF6B6B]">
                Xpaio 생태계
              </span>
            </h1>

            {/* 설명 문구: 안전한 폭과 줄높이로 깨짐 방지 */}
            <p className="text-slate-600 font-medium mb-14 leading-relaxed
                         [font-size:clamp(1rem,2.2vw,1.5rem)] max-w-3xl mx-0 md:mx-auto">
              파이 네트워크 기반 차세대 알까기 게임과
              <br className="hidden md:block" />
              함께 성장하는 혁신적인 가상 자산 프로젝트입니다.
            </p>

            {/* CTA 버튼: 텍스트와 겹치지 않게 간격 확보 */}
            <div className="flex flex-col md:flex-row gap-6 md:justify-center">
              <button
                onClick={() => router.push('/about')}
                className="w-full md:w-auto bg-[#0D1B2A] text-white px-10 py-4 rounded-2xl font-black
                           text-xl md:text-2xl hover:bg-[#45B7AF] transition-transform
                           shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:scale-105 active:scale-95"
              >
                로드맵 확인하기
              </button>
            </div>
          </motion.section>
        </div>

        {/* 배경 글로우: 텍스트와 겹치지 않도록 레이어 조정 및 위치 오프셋 */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
        >
          {/* 좌측하단 은은한 민트 글로우 */}
          <div className="absolute left-[-10%] bottom-[-10%] w-[520px] h-[520px]
                          bg-[#4ECDC4] opacity-10 blur-[160px] rounded-full" />
          {/* 우측상단 퍼플/핑크 은은한 그라데이션 */}
          <div className="absolute right-[-8%] top-[-8%] w-[580px] h-[580px]
                          bg-gradient-to-br from-[#9B5DE5] to-[#FF6B6B] opacity-8
                          blur-[180px] rounded-full" />
        </div>
      </main>
    </div>
  );
}