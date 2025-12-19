'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  return (
    /* 1. 배경을 다크 테마로 변경하고 텍스트를 흰색으로 설정 */
    <div className="min-h-screen bg-[#0D1B2A] text-white flex flex-col font-sans overflow-x-hidden relative">
      <Header />

      {/* 2. 배경 이미지 섹션 추가 */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/mobile-bg1.webp')", // 아까 확인한 정확한 파일명
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <main className="flex-1 relative pt-40 pb-24 z-10">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 relative z-10">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-left md:text-center"
          >
            <h2 className="text-[#4ECDC4] font-semibold tracking-[0.3em] mb-5 text-xs md:text-sm">
              WELCOME TO XPAIO
            </h2>

            {/* 3. 텍스트 색상을 밝은 톤으로 조정하여 가독성 확보 */}
            <h1 className="font-black mb-8 leading-[1.05] tracking-tighter text-white
                           [font-size:clamp(2.5rem,6vw,6rem)]">
              은하수가 이끄는 <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4ECDC4] via-[#9B5DE5] to-[#FFD93D]">
                Xpaio 생태계
              </span>
            </h1>

            <p className="text-slate-300 font-medium mb-14 leading-relaxed
                         [font-size:clamp(1rem,2.2vw,1.5rem)] max-w-3xl mx-0 md:mx-auto">
              파이 네트워크 기반 차세대 알까기 게임과
              <br className="hidden md:block" />
              함께 성장하는 혁신적인 가상 자산 프로젝트입니다.
            </p>

            <div className="flex flex-col md:flex-row gap-6 md:justify-center">
              <button
                onClick={() => router.push('/about')}
                className="w-full md:w-auto bg-[#FFD93D] text-[#0D1B2A] px-10 py-4 rounded-2xl font-black
                           text-xl md:text-2xl hover:bg-white transition-transform
                           shadow-[0_20px_40px_rgba(255,217,61,0.2)] hover:scale-105 active:scale-95"
              >
                로드맵 확인하기
              </button>
            </div>
          </motion.section>
        </div>

        {/* 하단 글로우 효과 유지 */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute left-[-10%] bottom-[-10%] w-[520px] h-[520px] bg-[#4ECDC4] opacity-20 blur-[160px] rounded-full" />
          <div className="absolute right-[-8%] top-[-8%] w-[580px] h-[580px] bg-gradient-to-br from-[#9B5DE5] to-[#FF6B6B] opacity-15 blur-[180px] rounded-full" />
        </div>
      </main>
    </div>
  );
}