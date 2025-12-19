'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white flex flex-col font-sans overflow-x-hidden relative">
      <Header />

      {/* 1. 배경 이미지: 고정 레이어 */}
      <div 
        className="fixed inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url('/mobile-bg1.webp')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <main className="flex-1 relative z-10">
        
        {/* --- Hero 섹션 --- */}
        <section id="hero" className="min-h-screen flex flex-col justify-center pt-32 pb-20">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left md:text-center mb-16"
            >
              <h2 className="text-[#4ECDC4] font-semibold tracking-[0.3em] mb-5 text-xs md:text-sm">
                WELCOME TO XPAIO
              </h2>
              <h1 className="font-black mb-8 leading-[1.05] tracking-tighter text-white [font-size:clamp(2.5rem,6vw,5rem)]">
                은하수가 이끄는 <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4ECDC4] via-[#9B5DE5] to-[#FFD93D]">
                  Xpaio 생태계
                </span>
              </h1>
              <p className="text-slate-300 font-medium mb-10 leading-relaxed [font-size:clamp(1rem,2vw,1.25rem)] max-w-3xl mx-0 md:mx-auto">
                파이 네트워크 기반 차세대 알까기 게임과 함께 성장하는 <br className="hidden md:block" />
                혁신적인 가상 자산 프로젝트입니다.
              </p>
            </motion.div>

            {/* 히어로 슬라이더 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <HeroSlider />
            </motion.div>
          </div>
        </section>

        {/* --- 공통 카드 스타일 섹션들 --- */}
        
        {/* About 섹션 */}
        <section id="about" className="py-24 border-t border-white/5 bg-[#0D1B2A]/50 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: -20 }}
              className="bg-white/5 p-10 rounded-3xl border border-white/10"
            >
              <div className="text-[#4ECDC4] mb-4 text-4xl font-bold">01</div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">About Xpaio</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Xpaio는 파이 네트워크 기반 차세대 게임과 함께 성장하는 혁신적인 가상 자산 프로젝트입니다.
              </p>
              <button onClick={() => router.push('/roadmap')} className="text-[#FFD93D] font-bold hover:underline">
                Roadmap 보기 →
              </button>
            </motion.div>
          </div>
        </section>

        {/* Roadmap 섹션 */}
        <section id="roadmap" className="py-24 border-t border-white/5">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: 20 }}
              className="bg-white/5 p-10 rounded-3xl border border-white/10"
            >
              <div className="text-[#9B5DE5] mb-4 text-4xl font-bold">02</div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">Roadmap</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                초기 개발 → 베타 테스트 → 글로벌 런칭까지 이어지는 단계별 계획을 소개합니다.
              </p>
              <button onClick={() => router.push('/game')} className="text-[#9B5DE5] font-bold hover:underline">
                Game으로 이동 →
              </button>
            </motion.div>
          </div>
        </section>

        {/* Game 섹션 */}
        <section id="game" className="py-24 border-t border-white/5 bg-[#0D1B2A]/50 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }} 
              initial={{ opacity: 0, y: 20 }}
              className="bg-white/5 p-10 rounded-3xl border border-white/10"
            >
              <div className="text-[#FFD93D] mb-4 text-4xl font-bold">03</div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">Game</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                차세대 알까기 게임을 통해 재미와 보상을 동시에 경험할 수 있습니다.
              </p>
              <button onClick={() => router.push('/contact')} className="bg-[#FFD93D] text-[#0D1B2A] px-6 py-2 rounded-xl font-bold">
                게임 시작하기
              </button>
            </motion.div>
          </div>
        </section>

        {/* Contact 섹션 */}
        <section id="contact" className="py-24 border-t border-white/5 pb-40">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Contact</h2>
              <p className="text-slate-300 text-lg mb-10">
                문의 사항이나 협업 제안은 언제든지 연락 주세요.
              </p>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-2xl transition-all"
              >
                맨 위로 돌아가기 ↑
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      {/* 배경 글로우 효과 */}
      <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-[-5%] bottom-[-5%] w-[500px] h-[500px] bg-[#4ECDC4] opacity-10 blur-[150px] rounded-full" />
        <div className="absolute right-[-5%] top-[-5%] w-[500px] h-[500px] bg-[#9B5DE5] opacity-10 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}