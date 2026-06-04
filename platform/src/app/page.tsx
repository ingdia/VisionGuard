import Hero from "@/components/sections/Hero";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import AboutUs from "@/components/sections/AboutUs";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeHelp />
      <AboutUs />
      <WhatWeBuild />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}