export default function Team() {
  const team = [
    {
      name: "Bruno Vedooto",
      role: "CEO / CFO",
      image: "/team/bruno.jpg",
      expertise: "Gestão de portfólios e projetos > R$ 300 milhões.",
      focus: "Viabilização de recursos e governança robusta.",
      differential: "Unindo rigor financeiro à Inteligência Artificial para escala no Terceiro Setor."
    },
    {
      name: "Viccenzo Zang",
      role: "CTO",
      image: "/team/viccenzo.png",
      expertise: "Arquiteto especialista em IA, sistemas distribuídos.",
      focus: "Automação de governança e análise preditiva.",
      differential: "Transformando regras de compliance em algoritmos de transparência."
    },
    {
      name: "Jaime Freitas",
      role: "Diretor de Marketing",
      image: "/team/jaimes.jpg",
      expertise: "Parcerias estratégicas e expansão de ecossistemas.",
      focus: "Posicionamento e canais de alto nível.",
      differential: "Traduzir tecnologia em propostas de valor claras."
    },
    {
      name: "Fahbricio Muller",
      role: "Diretor de Operações (COO)",
      image: "/team/fahbricio.jpg",
      expertise: "Gestão de projetos complexos e metodologias ágeis.",
      focus: "Otimização de fluxos e garantia de entrega.",
      differential: "Converter a inteligência da Noé em resultados práticos."
    }
  ];

  return (
    <section id="equipe" className="bg-[#EFEFEF] text-[#262626] py-32">
      <div className="container mx-auto">
        
        <div className="reveal mb-20 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Nosso Esquadrão de Elite</h2>
          <p className="text-xl text-[#414548] font-light max-w-3xl">
            "Combinação única de visão estratégica, expertise técnica e conhecimento regulatório que nos permite executar com excelência em um mercado altamente especializado."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="reveal group relative overflow-hidden bg-[#262626] aspect-[3/4]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Photo with monochrome filter */}
              <div className="absolute inset-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#262626]/40 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Static Info */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#262626] to-transparent z-10">
                <h3 className="text-2xl font-bold text-[#EFEFEF] mb-1">{member.name}</h3>
                <p className="text-[#6BE900] font-semibold text-sm">{member.role}</p>
              </div>

              {/* Hover Overlay Info */}
              <div className="absolute inset-0 bg-[#262626]/95 p-6 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                <h3 className="text-2xl font-bold text-[#EFEFEF] mb-1">{member.name}</h3>
                <p className="text-[#6BE900] font-semibold text-sm mb-6 pb-4 border-b border-[#414548]">{member.role}</p>
                
                <div className="space-y-4 text-sm text-[#EFEFEF]/90">
                  <p><strong className="text-white block mb-1">Expertise:</strong> {member.expertise}</p>
                  <p><strong className="text-white block mb-1">Foco:</strong> {member.focus}</p>
                  <p><strong className="text-white block mb-1">Diferencial:</strong> {member.differential}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
