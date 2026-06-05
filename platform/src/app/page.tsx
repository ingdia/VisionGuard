import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
