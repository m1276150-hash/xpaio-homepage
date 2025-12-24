import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../Components/Navbar";

export const metadata: Metadata = {
  title: "XPAIO 공식 홈페이지",
  description: "XPAIO 로드맵과 FAQ를 소개하는 공식 홈페이지",
  keywords: ["XPAIO", "로드맵", "FAQ", "블록체인", "토큰", "메인넷"],
  authors: [{ name: "XPAIO Team" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[#0D1B2A] text-white font-sans">
        {/* 공통 네비게이션 */}
        <Navbar />
        {/* 페이지별 콘텐츠 */}
        {children}
      </body>
    </html>
  );
}