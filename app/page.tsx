'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  return (
    // 배경을 밝은 회색빛 흰색(bg-slate-50)으로, 글자를 진한 색(text-slate-900)으로 변경
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1 px-6 pt-40 pb-20 flex flex-col items-center justify-center relative">
        {/* 배경에 은은한 민트색 빛 효과 (너무 어둡지 않게!) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#4ECDC4] opacity-5 blur-[150px] pointer-events-none"></div>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h2 className="text-[#45B7AF] font-bold tracking-[0.4em] mb-6 text-sm md:text-base">
            WELCOME TO XPAIO
          </h2>
          
          <h1 className="text-6xl md:text-9xl font-black mb-10 leading-tight text-slate-900 tracking-tighter">
            은하수가 이끄는 <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#45B7AF] via-[#9B5DE5] to-[#FF6B6B]">
              Xpaio 생태계
            </span>
          </h1>

          <p className="text-slate-500 text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            파이 네트워크 기반 차세대 알까기 게임과 <br className="hidden md:block" />
            함께 성장하는 혁신적인 가상 자산 프로젝트입니다.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => router.push('/about')}
              className="w-full md:w-auto bg-[#0D1B2A] text-white px-12 py-5 rounded-2xl font-black text-2xl hover:bg-[#45B7AF] transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:scale-105 active:scale-95"
            >
              로드맵 확인하기
            </button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}