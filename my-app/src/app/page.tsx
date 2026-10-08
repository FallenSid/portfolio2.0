import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Philosophy } from "@/components/philosophy";
import { WorkSection } from "@/components/work-section";
import { Direction } from "@/components/direction";
import { Skills } from "@/components/skills";
import { OutsideStack } from "@/components/outside-stack";
import { Persistence } from "@/components/persistence";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Philosophy />
      <WorkSection />
      <Direction />
      <Skills />
      <OutsideStack />
      <Persistence />
      <Contact />
    </>
  );
}
