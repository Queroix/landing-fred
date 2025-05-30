"use client";

import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function LocationSection() {
  return (
    <section className="w-full bg-[#f8f5f1] py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
        {/* Logo */}
        <div className="w-32 h-32 relative">
          <Image
            src="/logo.png" // substitua pelo caminho correto do seu logo
            alt="Logo Avalia Expertise"
            fill
            className="object-contain"
          />
        </div>

        {/* Informações do endereço */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">Avalia Expertise e Gestão Imobiliária LTDA</h3>
          <p className="text-sm text-gray-700 mb-1">CNPJ 46.173.817/0001-62</p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-700 mb-1">
            <FaMapMarkerAlt className="text-green-600" /> Rua T-55 n.930 Walk Bueno Sala 806 - Setor Bueno
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-700">
            <FaPhoneAlt className="text-green-600" /> Tel: (62) 99629-4728
          </p>
        </div>
      </div>

      {/* Google Maps embed */}
      <div className="mt-8 w-full max-w-4xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5355.992171472591!2d-49.273157210639184!3d-16.704486092264247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef100187d6f13%3A0x878329f8fb4e8d2a!2sEdif%C3%ADcio%20Walk%20Bueno%20Business!5e1!3m2!1spt-BR!2sbr!4v1748649463668!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow"
        ></iframe>
      </div>
    </section>
  );
}
