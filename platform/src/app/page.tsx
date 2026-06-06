import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <TrustedBy />
        <Services />
        <About />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
