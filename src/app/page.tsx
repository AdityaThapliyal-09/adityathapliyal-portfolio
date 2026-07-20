import Hero from "@/components/Hero/Hero";
import WhatIBuild from "@/components/WhatIBuild/WhatIBuild";
import About from "@/components/About/About";
import Now from "@/components/Now/Now";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import SideProjects from "@/components/SideProjects/SideProjects";
import CurrentExperience from "@/components/CurrentExperience/CurrentExperience";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import FloatingDock from "@/components/FloatingDock/FloatingDock";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhatIBuild />
        <About />
        <Now />
        <Skills />
        <Projects />
        <SideProjects />
        <CurrentExperience />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <FloatingDock />
    </>
  );
}
