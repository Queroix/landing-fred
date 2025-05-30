"use client";

import { FaBuilding, FaMoneyCheckAlt, FaHandshake } from "react-icons/fa";

export default function SpecialOffersSection() {
  return (
    <section className="w-full bg-[#f8f5f1] py-20 px-4 text-yellow-700">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Imóveis Lançamentos */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center border">
          <FaBuilding className="text-4xl mx-auto mb-4 text-yellow-700" />
          <h3 className="text-xl font-semibold mb-2">Imóveis Lançamentos</h3>
          <p className="mb-4 text-sm text-gray-700">
            Descreva o imóvel que deseja comprar pronto ou na planta nas melhores regiões de Goiânia com o suporte de um profissional especialista em apartamentos e condomínio fechado.
          </p>
          <a
            href="#contato"
            className="inline-block mt-2 text-yellow-700 font-semibold border-b border-yellow-700 hover:text-yellow-800 transition"
          >
            Encomende seu imóvel →
          </a>
        </div>

        {/* Financiamento */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center border">
          <FaMoneyCheckAlt className="text-4xl mx-auto mb-4 text-yellow-700" />
          <h3 className="text-xl font-semibold mb-2">Financiamento</h3>
          <p className="mb-4 text-sm text-gray-700">
            Fazemos simulação e aprovação do seu crédito imobiliário em vários bancos e sem custo algum!
          </p>
          <a
            href="#contato"
            className="inline-block mt-2 text-yellow-700 font-semibold border-b border-yellow-700 hover:text-yellow-800 transition"
          >
            Faça uma simulação →
          </a>
        </div>

        {/* Quer Vender */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center border">
          <FaHandshake className="text-4xl mx-auto mb-4 text-yellow-700" />
          <h3 className="text-xl font-semibold mb-2">Quer Vender seu Imóvel?</h3>
          <p className="mb-4 text-sm text-gray-700">
            Fale conosco! Nós encontraremos o melhor negócio para você.
          </p>
          <a
            href="#contato"
            className="inline-block mt-2 text-yellow-700 font-semibold border-b border-yellow-700 hover:text-yellow-800 transition"
          >
            Cadastre seu imóvel →
          </a>
        </div>
      </div>
    </section>
  );
}