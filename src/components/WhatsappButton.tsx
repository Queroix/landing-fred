"use client";

import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsappButton() {
  const [minimized, setMinimized] = useState(false);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const toggleMinimize = (e: React.MouseEvent) => {
    e.preventDefault();
    setMinimized(!minimized);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2">
      <AnimatePresence>
        {!minimized && (
          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition transform hover:scale-105"
            aria-label="Fale conosco no WhatsApp"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-700">
              <FaWhatsapp className="text-2xl" />
            </div>

            <div className="ml-3 pr-4 flex flex-col justify-center text-sm hidden sm:flex">
              <span className="font-semibold">Atendimento via WhatsApp</span>
              <span className="font-bold text-center">Clique aqui!</span>
            </div>
          </motion.a>
        )}
      </AnimatePresence>

      <button
        onClick={toggleMinimize}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-green-700 text-white shadow-lg hover:bg-green-800 transition"
        aria-label={minimized ? 'Expandir WhatsApp' : 'Minimizar WhatsApp'}
      >
        <FaWhatsapp className="text-2xl" />
      </button>
    </div>
  );
}