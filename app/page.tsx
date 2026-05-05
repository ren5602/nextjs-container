import CTASection from "../components/sections/CTASection";
import CollegeProjectSection from "../components/sections/CollegeProjectSection";
import HeroSection from "../components/sections/HeroSection";
import OtherProjectSection from "../components/sections/OtherProjectSection";
import SkillToolSection from "../components/sections/SkillToolSection";
import UIGallerySection from "../components/sections/UIGallerySection";
import ValueSection from "../components/sections/ValueSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <SkillToolSection />
      <CollegeProjectSection />
      <OtherProjectSection />
      <UIGallerySection />
      <ValueSection />
      <CTASection />
    </main>
  );
}
