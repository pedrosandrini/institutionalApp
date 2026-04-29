import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARCA — Projetos Inteligentes | Consultoria e Tecnologia com IA",
  description: "Consultoria e tecnologia especializada em captação de recursos e gestão de projetos de alto impacto com Inteligência Artificial.",
  openGraph: {
    title: "ARCA — Projetos Inteligentes",
    description: "IA aplicada à transparência e ao impacto.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
