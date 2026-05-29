export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#EFEFEF] pt-24 pb-12 border-t border-[#414548]/30">
      <div className="container mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-20">
          <div className="w-48">
            <img 
              src="/logos/logo-horizontal-light.svg" 
              alt="ARCA Logo" 
              className="w-full h-auto"
            />
          </div>

          <div className="max-w-md text-center md:text-right">
            <p className="text-lg font-light italic text-[#EFEFEF]/70 mb-4">
              "A IA acelera e escala, mas é o propósito que impacta de verdade. Democratizando o acesso a recursos públicos & privados."
            </p>
            <p className="text-sm text-[#6BE900] font-semibold">
              "Tudo tem o seu tempo determinado, e há tempo para todo propósito debaixo do céu." - Eclesiastes 3:1
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#414548]/30 text-sm text-[#EFEFEF]/50">
          <p>&copy; {new Date().getFullYear()} Arca & Noé. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Projetos Inteligentes.</p>
        </div>

      </div>
    </footer>
  );
}
