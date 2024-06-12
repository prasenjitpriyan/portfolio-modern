"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BackgroundBeams } from "./ui/background-beams";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const testimonials = [
  {
    skill: "HTML",
    icon: <>{<FaHtml5 className="text-[#f06529]" />}</>,
  },
  {
    skill: "CSS",
    icon: <>{<FaCss3Alt className="text-[#2965f1]" />}</>,
  },
  {
    skill: "JavaScript",
    icon: <>{<IoLogoJavascript className="text-[#f0db4f]" />}</>,
  },
  {
    skill: "TypeScript",
    icon: <>{<SiTypescript className="text-[#007acc] text-[2rem]" />}</>,
  },
  {
    skill: "Bootstrap",
    icon: <>{<FaBootstrap className="text-[#563d7c]" />}</>,
  },
  {
    skill: "Tailwind",
    icon: <>{<RiTailwindCssFill className="text-[#4dc0b5]" />}</>,
  },
  {
    skill: "MongoDB",
    icon: <>{<SiMongodb className="text-[#4DB33D]" />}</>,
  },
  {
    skill: "Express JS",
    icon: <>{<SiExpress className="text-[#828283]" />}</>,
  },
  {
    skill: "React JS",
    icon: <>{<FaReact className="text-[#60DAFA]" />}</>,
  },
  {
    skill: "Node JS",
    icon: <>{<FaNodeJs className="text-[#3c873a]" />}</>,
  },
  {
    skill: "Next JS",
    icon: <>{<RiNextjsFill />}</>,
  },
];

const Advantage: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className="text-4xl text-center font-semibold py-10 text-lime-900">
        My Advantage
      </h1>
      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <BackgroundBeams />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </React.Fragment>
  );
};

export default Advantage;
