"use client";

import { useState } from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo ou Nome */}
        <div className="text-white font-bold text-xl">Fred Corretor</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-white text-sm">
          <a href="#sobre" className="hover:text-green-400 transition">Quem Somos</a>
          <a href="#servicos" className="hover:text-green-400 transition">Serviços</a>
          <a href="#contato" className="hover:text-green-400 transition">Contato</a>
          <a href="https://wa.me/5562999999999" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-xl hover:text-green-400 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-pink-400 transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-blue-400 transition" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white px-4 py-4 space-y-4">
          <a href="#sobre" className="block hover:text-green-400 transition" onClick={toggleMenu}>
            Quem Somos
          </a>
          <a href="#servicos" className="block hover:text-green-400 transition" onClick={toggleMenu}>
            Serviços
          </a>
          <a href="#contato" className="block hover:text-green-400 transition" onClick={toggleMenu}>
            Contato
          </a>
          <div className="flex gap-4 mt-2">
            <a href="https://wa.me/5562999999999" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl hover:text-green-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-400 transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-400 transition" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
