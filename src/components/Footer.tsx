export default function Footer() {
    return (
      <footer className="w-full bg-[#333] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Fred Corretor de Imóveis</p>
            <p className="text-sm text-gray-300">CRECI: 123456 - Goiás</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">Telefone: (62) 99999-9999</p>
            <p className="text-sm">Email: contato@fredcorretor.com.br</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 mt-6">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </footer>
    );
  }
  