"use client";

import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Technology</span> and working as
        an IT professional&#44; I decided to pursue my passion for programming.
        I enrolled in CS50&apos;s Introduction to Computer Science and learned{" "}
        <span className="font-medium">
          C&#44; Python&#44; JavaScript&#44; SQL
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React&#44; Next.js&#44; Python and SQL
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        engineer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>&#44; I enjoy
        playing video games&#44; watching movies&#44; and playing with my cats
        and dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Artificial Intelligence with Python</span>
        . I&apos;m also learning how to play the piano.
      </p>
    </motion.section>
  );
}
