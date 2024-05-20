"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { useSectionInView } from "@/lib/hooks";

export default function ProjectSection() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-12 flex flex-col justify-center "
    >
      <SectionHeading>My projects</SectionHeading>
      <div className="w-full flex justify-center">
        <div className="w-full sm:w-3/4">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectCard {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
