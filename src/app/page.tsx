import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Impact from '@/components/Impact';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#262626]">
      <ScrollReveal />
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Impact />
      <Partners />
      <Footer />
    </main>
  );
}
