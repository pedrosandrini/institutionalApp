export default function Impact() {
  const steps = [
    "Formação Tech",
    "Mentoria",
    "Acompanhamento",
    "Emprego",
    "Inserção"
  ];

  return (
    <section id="impacto" className="bg-[#262626] text-[#EFEFEF] py-32 relative overflow-hidden">
      {/* Background texture simulation */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 reveal">
            <h2 className="text-sm uppercase tracking-widest text-[#414548] font-bold mb-4">Impacto Vinculado</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Instituto Jericó</h3>
            
            <div className="flex items-start gap-6 mb-8">
              <span className="text-[#6BE900] text-6xl md:text-8xl font-bold leading-none">10%</span>
              <p className="text-xl md:text-2xl font-light mt-2">
                de cada cliente vai para o Instituto Jericó.
              </p>
            </div>
            
            <p className="text-lg text-[#EFEFEF]/70 leading-relaxed mb-12">
              Nossa iniciativa de transformação social através da tecnologia. Ao escolher a ARCA, a sua organização cofinancia a formação de novos talentos tecnológicos, convertendo investimento em software em responsabilidade social direta (ESG).
            </p>

            <blockquote className="border-l-4 border-[#6BE900] pl-6 py-2 text-2xl italic font-light">
              "Derrubando muros.<br /> Construindo futuros."
            </blockquote>
          </div>

          <div className="lg:w-1/2 w-full reveal" style={{ transitionDelay: '200ms' }}>
            <div className="bg-[#EFEFEF] text-[#262626] p-10 md:p-16">
              <h4 className="text-2xl font-bold mb-10">A Jornada</h4>
              
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-[#414548]/20"></div>
                
                <div className="space-y-8 relative">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-6 group">
                      <div className="w-[32px] h-[32px] rounded-none bg-[#262626] border-2 border-[#6BE900] flex items-center justify-center relative z-10 group-hover:bg-[#6BE900] transition-colors duration-300">
                        <span className="text-[#EFEFEF] group-hover:text-[#262626] text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-xl font-semibold text-[#414548] group-hover:text-[#262626] transition-colors duration-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
