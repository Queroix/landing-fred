'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;


  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
