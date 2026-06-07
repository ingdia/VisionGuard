import ProjectsHero from "@/components/sections/projects/ProjectsHero";
import ProjectsFeatured from "@/components/sections/projects/ProjectsFeatured";
import ProjectsGrid from "@/components/sections/projects/ProjectsGrid";
import ProjectsIndustries from "@/components/sections/projects/ProjectsIndustries";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Projects — VisionGuard",
  description: "Browse VisionGuard's portfolio of websites, digital systems, and branding projects across Rwanda.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsFeatured />
      <ProjectsGrid />
      <ProjectsIndustries />
      <CTA />
    </>
  );
}
