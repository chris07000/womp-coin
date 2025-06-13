import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Tokenomics from '@/components/sections/Tokenomics';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Features />
      <Tokenomics />
      <Footer />
    </main>
  );
}
