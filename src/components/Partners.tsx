export default function Partners() {
  const partners = [
    { name: "ILC", logo: "/logos/empresas/logo_ILC.webp" },
    { name: "Foothub", logo: "/logos/empresas/logo_foothub_.webp" },
    { name: "IDE Social", logo: "/logos/empresas/logo_ide.png" }
  ];

  return (
    <section id="parceiros" className="bg-[#EFEFEF] text-[#262626] py-32">
      <div className="container mx-auto">
        
        <div className="reveal mb-24 text-center">
          <h2 className="text-4xl font-bold mb-4">Quem Confia em Nós</h2>
          <p className="text-xl text-[#414548] font-light">Grandes Parceiros</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="reveal group flex items-center justify-center"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 md:h-20 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
