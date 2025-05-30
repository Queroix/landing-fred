"use client";

import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpeg", "/hero4.jpg"];

function AutoSlidePlugin(slider: KeenSliderInstance) {
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
    }, 2000);
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

export default function HeroSection() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "performance",
      slides: { perView: 1 },
    },
    [AutoSlidePlugin]
  );

  return (
    <section className="relative w-full h-[90vh] overflow-hidden text-white">
      {/* Imagens de fundo */}
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {images.map((img, i) => (
          <div key={i} className="keen-slider__slide w-full h-full">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </div>

      {/* Sobreposição e texto */}
      <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Avaliação Imobiliária, Vendas, Vistorias e Serviços Diversos
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Com expertise e transparência, ajudamos você a tomar decisões
            seguras no mercado imobiliário.
          </p>
          <button
            onClick={() => {
              document
                .getElementById("contato")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Solicite uma Avaliação
          </button>
        </div>
      </div>
    </section>
  );
}
