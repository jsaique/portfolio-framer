import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import thougthy from "@/public/project1.png";
import qr from "@/public/project2.png";
import portfolio from "@/public/project3.png";
import cs50 from "@/public/project4.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Harvard University: cs50's Introduction to Computer Science",
    location: "Remote (edX)",
    description:
      "I completed the course An introduction to the intellectual enterprises of computer science and the art of programming.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "JavaScript Mastery Course",
    location: "Remote (Udemy)",
    description: "I completed the JavaScript Mastery course from Udemy",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "HTML and CSS Mastery Course",
    location: "Remote",
    description: "Completed the Udemy course for HTML and CSS",
    icon: React.createElement(FaReact),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Mutual AI (MAI)",
    description: "Comming Soon...",
    tags: ["React", "Next.js", "SQL", "Python", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "CS50 Final Project",
    description:
      "This is my CS50's final project that i submitted to get my certification, it a basic email web app that can send, recieve and delete emails.",
    tags: ["Python", "Flask", "HTML", "CSS"],
    imageUrl: cs50,
  },
  {
    title: "Thoughty",
    description:
      "I created a web application called Thoughty were users can share their ideas with others.",
    tags: ["React", "Next.js", "Next Auth", "Tailwind", "Firebase"],
    imageUrl: thougthy,
  },
  {
    title: "QR Code Generator",
    description: "I created a web application that generates a QR Code.",
    tags: ["React", "React qr code", "Next.js", "Tailwind"],
    imageUrl: qr,
  },
  {
    title: "Portfolio V.1",
    description:
      "I created my first portfolio to apply all the knowledge i learned from the courses i took.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: portfolio,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
