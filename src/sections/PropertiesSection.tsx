"use client";

import "keen-slider/keen-slider.min.css";
import PropertyCard, { Property } from "@/components/PropertyCard";

const properties: Property[] = [
  {
    images: ["/imovel1.jpg", "/fred.jpg"],
    title: "Apartamento Luxo no Setor Bueno",
    location: "Goiânia - GO",
    description: "Cobertura com 4 suítes, área gourmet e vista panorâmica da cidade.",
    price: "R$ 1.450.000",
    destaque: true,
  },
  {
    images: ["/imovel2.webp", "/fred.jpg"],
    title: "Casa Moderna no Jardins Munique",
    location: "Goiânia - GO",
    description: "Residência térrea com 3 suítes, piscina aquecida e acabamento premium.",
    price: "R$ 2.100.000",
    destaque: false,
  },
  {
    images: ["/imovel3.webp", "/fred.jpg"],
    title: "Apartamento Alto Padrão em Alphaville",
    location: "Goiânia - GO",
    description: "Condomínio fechado, segurança 24h, 3 vagas na garagem.",
    price: "R$ 1.780.000",
    destaque: false,
  },
];

export default function PropertiesSection() {
  return (
    <section className="w-full bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Imóveis Disponíveis</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
