"use client";

import SectionHeading from "./Section-heading";
import { projectsData } from "@/lib/data";
import { Fragment } from "react";
import ProjectCard from "./Project-card";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);

  return (
    <section className="scroll-mt-28 mb-28" id="projects" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <ProjectCard {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
