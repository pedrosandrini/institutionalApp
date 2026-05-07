export default function WhatsAppButton() {
  const phoneNumber = '5551993370292';
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da ARCA.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      id="whatsapp-contact-button"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-lg hover:shadow-[0_0_24px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300 group"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8 fill-white group-hover:scale-105 transition-transform duration-200"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.342 22.616c-.39 1.1-1.932 2.014-3.166 2.282-.846.18-1.95.324-5.668-1.218-4.76-1.974-7.822-6.798-8.06-7.114-.228-.316-1.918-2.556-1.918-4.876s1.214-3.458 1.646-3.932c.39-.426 1.036-.638 1.654-.638.2 0 .38.01.54.018.432.018.648.044 .934.724.356.848 1.224 2.986 1.33 3.204.108.218.216.514.066.816-.14.308-.264.446-.482.696-.218.25-.424.442-.642.71-.2.234-.424.484-.174.916.25.432 1.114 1.836 2.39 2.974 1.642 1.466 3.024 1.92 3.456 2.132.432.212.684.178.934-.108.258-.292 1.1-1.284 1.394-1.726.286-.442.578-.366.97-.218.396.148 2.508 1.184 2.94 1.4.432.216.718.324.824.504.104.18.104 1.046-.286 2.154z" />
      </svg>

      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
    </a>
  );
}
