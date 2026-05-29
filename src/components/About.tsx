export default function About() {
  return (
    <section id="sobre" className="bg-[#EFEFEF] text-[#262626] py-32">
      <div className="container max-w-3xl mx-auto">
        
        <div className="reveal text-center mb-24">
          <p className="text-2xl md:text-4xl font-light italic leading-relaxed text-[#414548]">
            "Existimos para que independente do tamanho do teu projeto, a falta de tecnologia e recursos nunca sejam o limite para uma grande causa."
          </p>
        </div>

        <div className="space-y-16">
          <div className="reveal flex flex-col md:flex-row gap-8 items-baseline">
            <h2 className="text-4xl font-bold md:w-1/3">Transformando Ideias em Impacto</h2>
            <div className="md:w-2/3 text-lg leading-relaxed text-[#414548] space-y-6">
              <p>
                A <strong className="text-[#262626]">Arca & Noé</strong> é uma empresa de consultoria e tecnologia especializada em captação de recursos e gestão de projetos de alto impacto.
              </p>
              <p>
                Com uma equipe multidisciplinar e experiente, oferecemos soluções completas para organizações que buscam crescer com responsabilidade e propósito.
              </p>
              <p>
                Nossa plataforma <strong className="text-[#262626]">Noé</strong> combina <span className="text-[#6BE900] bg-[#262626] px-1 font-semibold">inteligência artificial</span> com expertise humana para otimizar a gestão de projetos e maximizar resultados.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
