import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import ServicesProcess from "@/components/sections/services/ServicesProcess";
import ServicesPricing from "@/components/sections/services/ServicesPricing";
import ServicesFAQ from "@/components/sections/services/ServicesFAQ";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Services — VisionGuard",
  description: "Web design, digital systems, SEO, branding, and training programs for businesses in Rwanda.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesPricing />
      <ServicesFAQ />
      <CTA />
    </>
  );
}
