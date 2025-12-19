'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  return (
    <div className="main-container">
      {/* 1. CSS를 파일 안에 직접 삽입 (가장 확실한 방법) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .main-container {
          min-height: 100vh;
          background-color: #0D1B2A; /* 다크 블루 배경 */
          color: white;
          font-family: sans-serif;
          overflow-x: hidden;
          position: relative;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.4;
          background-image: url('/mobile-bg1.webp'); /* 이미지 경로 */
          background-size: cover;
          background-position: center;
          pointer-events: none;
        }
        .content-wrap {
          position: relative;
          z-index: 10;
          padding-top: 160px;
          text-align: center;
        }
        .main-title {
          font-size: clamp(2.5rem, 6vw, 6rem);
          font-weight: 900;
          line-height: 1.05;
          margin-bottom: 2rem;
        }
        .gradient-text {
          background: linear-gradient(to right, #4ECDC4, #9B5DE5, #FFD93D);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cta-btn {
          background-color: #FFD93D;
          color: #0D1B2A;
          padding: 1rem 2.5rem;
          border-radius: 1rem;
          font-weight: 900;
          font-size: 1.5rem;
          cursor: pointer;
          border: none;
          transition: transform 0.2s;
        }
        .cta-btn:hover { transform: scale(1.05); }
      `}} />

      <Header />

      {/* 배경 이미지 레이어 */}
      <div className="hero-bg" />

      <main className="content-wrap">
        <div className="mx-auto max-w-6xl px-6">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 style={{ color: '#4ECDC4', letterSpacing: '0.3em', marginBottom: '1rem' }}>
              WELCOME TO XPAIO
            </h2>
            
            <h1 className="main-title">
              은하수가 이끄는 <br />
              <span className="gradient-text">Xpaio 생태계</span>
            </h1>

            <p style={{ color: '#cbd5e1', marginBottom: '3rem', fontSize: '1.2rem' }}>
              파이 네트워크 기반 차세대 알까기 게임과 <br />
              함께 성장하는 혁신적인 가상 자산 프로젝트입니다.
            </p>

            <button className="cta-btn" onClick={() => router.push('/about')}>
              로드맵 확인하기
            </button>
          </motion.section>
        </div>
      </main>
    </div>
  );
}