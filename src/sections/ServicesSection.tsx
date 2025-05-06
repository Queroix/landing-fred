'use client';
import { FaBalanceScale, FaBuilding, FaHandshake } from 'react-icons/fa';

const services = [
  {
    title: "Avaliação Imobiliária",
    description: "Análise precisa do valor de mercado do seu imóvel, com base em dados atualizados e metodologia reconhecida.",
    icon: <FaBalanceScale className="text-3xl text-green-600 mb-4" />,
  },
  {
    title: "Venda de Imóveis de Alto Padrão",
    description: "Divulgação estratégica, atendimento premium e negociação personalizada para imóveis de alto valor.",
    icon: <FaBuilding className="text-3xl text-green-600 mb-4" />,
  },
  {
    title: "Intermediação Particular",
    description: "Apoio completo para quem deseja vender ou comprar imóvel entre particulares com segurança jurídica.",
    icon: <FaHandshake className="text-3xl text-green-600 mb-4" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Serviços Prestados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f8f5f1] p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
