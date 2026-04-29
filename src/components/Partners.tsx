export default function Partners() {
  const partners = [
    {
      name: "Liga Feminina de Combate ao Câncer de NH",
      description: "Parceria estratégica para captação de recursos e gestão de projetos na área da saúde."
    },
    {
      name: "SOS do Bem",
      description: "Apoio institucional e consultoria para ampliar o impacto social das iniciativas."
    },
    {
      name: "IDE Social do Recife",
      description: "Desenvolvimento de projetos de transformação social com foco em comunidades vulneráveis."
    }
  ];

  return (
    <section id="parceiros" className="bg-[#EFEFEF] text-[#262626] py-32">
      <div className="container mx-auto">
        
        <div className="reveal mb-24 text-center">
          <h2 className="text-4xl font-bold mb-4">Quem Confia em Nós</h2>
          <p className="text-xl text-[#414548] font-light">Grandes Parceiros</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="reveal flex flex-col items-center md:items-start text-center md:text-left group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Typographic "Logo" placeholder since we don't have images */}
              <div className="h-24 w-full flex items-center justify-center md:justify-start mb-6 border-b border-[#414548]/20 pb-6 group-hover:border-[#6BE900] transition-colors duration-300">
                <h3 className="text-2xl font-bold font-serif italic text-[#414548] group-hover:text-[#262626] transition-colors duration-300">
                  {partner.name}
                </h3>
              </div>
              <p className="text-[#414548] leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
