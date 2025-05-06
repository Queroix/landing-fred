"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  const match = digits.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
  if (!match) return value;

  const [, ddd, parte1, parte2] = match;
  return [
    ddd ? `(${ddd}` + (ddd.length === 2 ? ") " : "") : "",
    parte1,
    parte2 ? `-${parte2}` : "",
  ].join("");
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    tipo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "telefone") {
      setFormData({ ...formData, [name]: formatPhone(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, meu nome é ${formData.nome}.
Telefone: ${formData.telefone}
Tenho interesse em: ${formData.tipo}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="w-full bg-[#f8f5f1] py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          Solicite uma Avaliação
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium text-gray-700">Nome</label>
            <input
              type="text"
              name="nome"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Telefone
            </label>
            <input
              type="text"
              name="telefone"
              required
              maxLength={15}
              value={formData.telefone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600"
              placeholder="(00) 99999-9999"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Tipo de Imóvel
            </label>
            <select
              name="tipo"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600"
            >
              <option value="">Selecione</option>
              <option value="Avaliação de Imóvel">Avaliação de Imóvel</option>
              <option value="Compra de Imóvel">Compra de Imóvel</option>
              <option value="Venda de Imóvel">Venda de Imóvel</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
          >
            <FaWhatsapp className="text-xl" />
            Enviar via WhatsApp
          </button>
        </form>
      </motion.div>
    </section>
  );
}
