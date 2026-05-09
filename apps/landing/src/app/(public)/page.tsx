import { AwardsSection } from "~/features/home/sections/awards-section";
import { Experts } from "~/features/home/sections/experts";
import { FeaturedProjects } from "~/features/home/sections/featured-projects";
import { Hero } from "~/features/home/sections/hero";
import { NewsSection } from "~/features/home/sections/news-section";
import { PartnersSection } from "~/features/home/sections/partners-section";
import { ResearchAreas } from "~/features/home/sections/research-areas";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ResearchAreas />
      <FeaturedProjects />
      <NewsSection />
      <PartnersSection />
      <AwardsSection />
      <Experts />
    </div>
  );
}
