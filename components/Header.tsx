'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react'; // 아이콘 설치가 필요할 수 있습니다
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Roadmap', href: '/about' }, // 일단 같은 곳으로 연결
    { name: 'Community', href: '#' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0D1B2A]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* 로고 영역 */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-[#4ECDC4]">
          XPAIO
        </Link>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-bold transition-colors hover:text-[#4ECDC4] ${
                pathname === item.href ? 'text-[#4ECDC4]' : 'text-gray-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isOpen && (
        <div className="md:hidden bg-[#0D1B2A] border-b border-gray-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold ${
                pathname === item.href ? 'text-[#4ECDC4]' : 'text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}