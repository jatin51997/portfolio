import AboutSection from "@/components/AboutSection";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import ProjectSection from "@/components/ProjectsSection";
import SectionDivider from "@/components/SectionDivider";
//import Contact from "@/components/contact";
import Skills from "@/components/skills";
import Test from "@/components/test";

export default function Home() {
  return (
    <main className=" w-5/6 sm:w-3/4 ">
      <Intro />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <Experience />
      <Skills />
      <SectionDivider />
      <ProjectSection /> 
      <Footer />
    </main>
  );
}
