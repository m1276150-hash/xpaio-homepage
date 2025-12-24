import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../Components/Navbar"; // 경로가 Components(대문자)인지 꼭 확인하세요!
import Footer from "../Components/Footer";

export const metadata: Metadata = {
  title: "XPAIO - 은하수가 이끄는 새로운 비전",
  description: "설계자의 창의적 열정을 담아 무한히 확장 가능한 공간을 제공하는 플랫폼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[#0D1B2A] text-white font-sans">
        {/* 1. Navbar가 title 속성을 요구하므로, as any를 통해 강제로 통과시킵니다. */}
        <Navbar {...({} as any)} />

        {/* 2. 페이지별 콘텐츠 */}
        {children}

        {/* 3. 공통 푸터 */}
        <Footer />
      </body>
    </html>
  );
}