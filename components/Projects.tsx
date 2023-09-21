"use client";

import SectionHeading from "./Section-heading";
import { projectsData } from "@/lib/data";
import { Fragment, useEffect } from "react";
import ProjectCard from "./Project-card";
import { useActiveSectionContext } from "@/context/active-session-context";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);

  return (
    <section className="scroll-mt-28" id="projects" ref={ref}>
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
