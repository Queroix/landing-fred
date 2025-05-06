"use client";
import { useKeenSlider } from "keen-slider/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export type Property = {
  images: string[];
  title: string;
  location: string;
  description: string;
  price: string;
  destaque?: boolean;
};

export default function PropertyCard({ property }: { property: Property }) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
    },
    [
      (slider) => {
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
          }, 4000);
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
      },
    ]
  );

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden">
      <div className="relative group">
        <div ref={sliderRef} className="keen-slider h-60 overflow-hidden relative">
          {property.images.map((img, idx) => (
            <div key={idx} className="keen-slider__slide relative w-full h-60">
              <Image
                src={img}
                alt={`${property.title} ${idx + 1}`}
                fill
                className="object-cover"
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
            onClick={() =>
              document
                .getElementById("contato")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`mt-3 w-full px-4 py-2 rounded font-semibold transition ${
              property.destaque
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Entrar em contato
          </button>
        </div>
      </div>
    </div>
  );
}
