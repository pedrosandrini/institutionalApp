export default function Services() {
  const services = [
    {
      title: "Radar de Editais (Noé / IA)",
      description: "Monitoramento diário para identificar e acessar fontes de financiamento do mundo todo para o seu projeto acontecer.",
      features: [
        "Monitoramento global de editais",
        "Alertas diários personalizados",
        "Fontes de financiamento variadas",
        "Match inteligente com seu projeto"
      ]
    },
    {
      title: "Projetos Inteligentes (Noé / IA)",
      description: "Montamos sua ideia em projetos inteligentes para captação de recursos.",
      features: [
        "Estruturação de projetos",
        "Otimização para captação",
        "Análise de viabilidade com IA",
        "Documentação estratégica"
      ]
    },
    {
      title: "Prestação de Contas (IA / Noé)",
      description: "Prestação de contas com IA para uma transparência radical.",
      features: [
        "Relatórios automatizados",
        "Transparência radical",
        "Compliance inteligente",
        "Auditoria assistida por IA"
      ]
    },
    {
      title: "PMO Inteligente (Noé / IA)",
      url: "https://dev.arcaprojetos.com.br/",
      description: "Gerente de Projetos inteligente com a Noé (IA) para controlar custo, cronograma e compliance do teu projeto.",
      features: [
        "Controle de custos",
        "Gestão de cronograma",
        "Compliance automatizado",
        "Dashboards em tempo real"
      ]
    }
  ];

  return (
    <section id="servicos" className="bg-[#262626] text-[#EFEFEF] py-32 border-t border-[#414548]">
      <div className="container mx-auto">
        
        <div className="reveal mb-20 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-xl text-[#414548] font-light">Soluções Completas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="reveal border border-[#414548] p-10 hover:border-[#6BE900] transition-colors duration-300 group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {service.url ? (
                <a href={service.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
                  <h3 className="text-2xl font-semibold mb-6 group-hover:text-[#6BE900] transition-colors">{service.title}</h3>
                  <svg className="w-5 h-5 mb-6 group-hover:text-[#6BE900] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              ) : (
                <h3 className="text-2xl font-semibold mb-6 group-hover:text-[#6BE900] transition-colors">{service.title}</h3>
              )}
              
              <p className="text-[#EFEFEF]/80 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-4">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <span className="text-[#6BE900] mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
