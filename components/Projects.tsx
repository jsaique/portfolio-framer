import SectionHeading from "./Section-heading";
import { projectsData } from "@/lib/data";
import { link } from "fs";
import Image from "next/image";
import { Fragment } from "react";
import ProjectCard from "./Project-card";

export default function Projects() {
  return (
    <section>
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
