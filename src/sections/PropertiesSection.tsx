'use client';

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaMapMarkerAlt } from 'react-icons/fa';

const properties = [
  {
    images: ["/imovel1.jpg", "/fred.jpg"],
    title: "Apartamento Luxo no Setor Bueno",
    location: "Goiânia - GO",
    description: "Cobertura com 4 suítes, área gourmet e vista panorâmica da cidade.",
    price: "R$ 1.450.000",
    destaque: true,
  },
  {
    images: ["/imovel2.webp",  "/fred.jpg"],
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

function AutoSlidePlugin(slider: any) {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 2500); // Tempo entre slides
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}


export default function PropertiesSection() {
  return (
    <section className="w-full bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Imóveis Disponíveis</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, index) => {
            const [sliderRef] = useKeenSlider<HTMLDivElement>(
              {
                loop: true,
                slides: { perView: 1 },
              },
              [AutoSlidePlugin]
            );
            

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden"
              >
                {/* Carrossel de imagens */}
                <div className="relative group">
                  <div ref={sliderRef} className="keen-slider h-60 overflow-hidden">
                    {property.images.map((img, idx) => (
                      <div key={idx} className="keen-slider__slide w-full h-full">
                        <img
                          src={img}
                          alt={`${property.title} ${idx + 1}`}
                          className="w-full h-60 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  {property.destaque && (
                    <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Destaque
                    </span>
                  )}
                </div>

                {/* Informações do imóvel */}
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{property.title}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                      <FaMapMarkerAlt className="text-green-600" />
                      {property.location}
                    </p>
                    <p className="text-gray-700">{property.description}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg font-bold text-green-700">{property.price}</p>
                    <button
                      onClick={() => {
                        document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`mt-3 w-full px-4 py-2 rounded font-semibold transition ${
                        property.destaque
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      Entrar em contato
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
