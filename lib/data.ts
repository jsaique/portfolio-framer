import React, { createElement } from "react";
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
    title: "JavaScript Mastery Course",
    location: "Remote(Udemy)",
    description: "I completed the JavaScript Mastery course from Udemy",
    icon: createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "HTML and CSS Mastery Course",
    location: "Remote(Udemy)",
    description: "Completed the Udemy course for HTML and CSS",
    icon: createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Harvard University: CS50x Introduction to Computer Science",
    location: "Remote(edX)",
    description:
      "I completed the course An introduction to the intellectual enterprises of computer science and the art of programming.",
    icon: createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title:
      "Harvard University: CS50AI Introduction to Artificial Intelligence with Python",
    location: "Remote(edX) In Progress",
    description:
      "I am currently studying this course to learn more about Artificial Intelligence",
    icon: createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Mutual AI (MAI)",
    description: "Comming Soon...",
    tags: ["React", "Next.js", "SQL", "Python", "Framer"],
    imageUrl: wordanalyticsImg,
    url: "Comming Soon",
  },
  {
    title: "CS50 Final Project",
    description:
      "This is my CS50's final project that i submitted to get my certification, it a basic email web app that can send, recieve and delete emails.",
    tags: ["Python", "Flask", "HTML", "CSS"],
    imageUrl: cs50,
    url: "https://youtu.be/xQPW6RzI7Q8",
  },
  {
    title: "Thoughty",
    description:
      "I created a web application called Thoughty were users can share their ideas with others.",
    tags: ["React", "Next.js", "Next Auth", "Tailwind", "Firebase"],
    imageUrl: thougthy,
    url: "https://thoughty-app.vercel.app",
  },
  {
    title: "QR Code Generator",
    description: "I created a web application that generates a QR Code.",
    tags: ["React", "React qr code", "Next.js", "Tailwind"],
    imageUrl: qr,
    url: "https://jassqrcodegenerator.netlify.app",
  },
  {
    title: "Portfolio V.1",
    description:
      "I created my first portfolio to apply all the knowledge i learned from the courses i took.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: portfolio,
    url: "https://johnariessaique.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "C",
  "Flask",
  "React",
  "Next.js",
  "React Email",
  "Resend",
  "Git",
  "Github",
  "Tailwind",
  "Framer Motion",
] as const;
