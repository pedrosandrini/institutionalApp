'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#262626]/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="z-50 relative w-32 h-10 block">
          <img 
            src={scrolled ? "/logos/logo-horizontal-light.svg" : "/logos/logo-horizontal-light.svg"} 
            alt="ARCA Logo" 
            className="w-full h-full object-contain"
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#sobre" className="text-sm font-semibold hover:text-[#6BE900] transition-colors">Sobre</Link>
          <Link href="#servicos" className="text-sm font-semibold hover:text-[#6BE900] transition-colors">Serviços</Link>
          <Link href="#equipe" className="text-sm font-semibold hover:text-[#6BE900] transition-colors">Equipe</Link>
          <Link href="#impacto" className="text-sm font-semibold hover:text-[#6BE900] transition-colors">Impacto</Link>
          <Link href="#parceiros" className="text-sm font-semibold hover:text-[#6BE900] transition-colors">Parceiros</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50 text-[#EFEFEF]" onClick={toggleMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Nav */}
        <div className={`fixed inset-0 bg-[#262626] z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <Link href="#sobre" onClick={toggleMenu} className="text-2xl font-semibold hover:text-[#6BE900]">Sobre</Link>
          <Link href="#servicos" onClick={toggleMenu} className="text-2xl font-semibold hover:text-[#6BE900]">Serviços</Link>
          <Link href="#equipe" onClick={toggleMenu} className="text-2xl font-semibold hover:text-[#6BE900]">Equipe</Link>
          <Link href="#impacto" onClick={toggleMenu} className="text-2xl font-semibold hover:text-[#6BE900]">Impacto</Link>
          <Link href="#parceiros" onClick={toggleMenu} className="text-2xl font-semibold hover:text-[#6BE900]">Parceiros</Link>
        </div>
      </div>
    </header>
  );
}
