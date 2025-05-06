import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f8f5f1] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Sobre o Corretor</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image 
            src="/fred.jpg"
            alt="Foto do corretor"
            className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-white"
            width={1280} height={720} 
          />
          <div className="text-lg text-gray-700">
            <p>
              Com mais de 10 anos de experiência no mercado, ofereço avaliações
              precisas e suporte completo na compra e venda de imóveis de alto
              padrão e de clientes particulares.
            </p>
            <p className="mt-4">
              Atendimento personalizado, sigilo e compromisso com os melhores
              resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
