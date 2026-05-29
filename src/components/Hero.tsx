'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6BE900] rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#414548] rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Animated Logo Container */}
        <div className="w-full max-w-md mb-8 reveal relative h-48 flex justify-center items-center">
          <img 
            src="/logos/logo-vertical-light.svg" 
            alt="ARCA Logo Vertical" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <h1 className="text-[2.5rem] md:text-hero font-bold leading-tight mb-6 tracking-tight reveal" style={{ transitionDelay: '200ms' }}>
          Inteligência Artificial para<br />
          <span className="text-[#6BE900]">democratizar o acesso</span><br />
          à captação de recursos e impulsionar<br />
          projetos inteligentes.
        </h1>
        
        <p className="text-xl md:text-2xl text-[#EFEFEF]/80 font-light mb-12 max-w-2xl reveal" style={{ transitionDelay: '400ms' }}>
          Projetos inteligentes.
        </p>
        
        <div className="reveal" style={{ transitionDelay: '600ms' }}>
          <a href="#sobre" className="inline-flex items-center justify-center px-8 py-4 bg-[#6BE900] text-[#262626] font-bold text-lg hover:scale-105 transition-transform duration-300">
            Conheça nossa história
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-60">
        <div className="animate-bounce flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
