import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutTeam from "@/components/sections/about/AboutTeam";
import AboutProgram from "@/components/sections/about/AboutProgram";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "About Us — VisionGuard",
  description: "Learn about VisionGuard, our mission, our team, and our internship programs.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutProgram />
      <CTA />
    </>
  );
}
