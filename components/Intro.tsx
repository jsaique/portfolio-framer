"use client";

import Image from "next/image";
import avatar from "@/public/avatar1.png";
import { motion, spring } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={avatar}
              alt="John avatar"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover bg-gradient-to-b from-slate-500 border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-3xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm John Aries.</span> I'm a{" "}
        <span className="font-bold">software engineer</span> with{" "}
        <span className="font-bold">1 year</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          className="group flex items-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 duration-300 cursor-pointer"
          href="#contact"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 duration-300" />
        </Link>
        <a
          className="group flex items-center gap-2 bg-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 duration-300 cursor-pointer border border-black/10"
          href="/Resume.pdf"
          download
        >
          Dowload CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 duration-300" />
        </a>
        <a
          className="flex items-center gap-2 bg-white p-4 text-gray-700 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 duration-300 cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/john-saique-a20797144/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          className="flex items-center gap-2 bg-white p-4 text-gray-700 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 duration-300 cursor-pointer border border-black/10"
          href="https://github.com/jsaique"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
