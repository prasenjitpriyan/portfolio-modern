"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Link from "next/link";

const content = [
  {
    title: "VeriTech IT Software Services",
    description:
      "During One Month (05/02/2024 to 05/03/2024) internship period, he has demonstrated exceptional dedication, enthusiasm and a strong willingness to learn. He actively engaged in various projects and tasks assigned to him, exhibiting remarkable skills and a high level of professionalism.",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br  from-lime-300 via-lime-500 to-lime-700 text-lime-50 hover:bg-gradient-to-tl hover:from-lime-300 hover:via-lime-500 hover:to-lime-700">
        <Link
          className="flex flex-col justify-center items-center"
          href={
            "https://drive.google.com/file/d/1fBzXp3xSLOLx7Il6YYOkBINnUQXxJAov/view?usp=drive_link"
          }
          target="_blank"
        >
          <p>React JS Development Intern</p>
          <p>VeriTech Software IT Services</p>
        </Link>
      </div>
    ),
  },
  {
    title: "Cognifyz Technologies",
    description:
      "During this period, he has served as a Web Development desire to learn. He has exhibited exceptional coordination skills and effective communication abilities. Moreover, his attention to detail has been truly impressive.",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-lime-700 via-lime-500 to-lime-300 text-lime-50 hover:bg-gradient-to-tl hover:from-lime-700 hover:via-lime-500 hover:to-lime-300">
        <Link
          className="flex flex-col justify-center items-center"
          href={
            "https://drive.google.com/file/d/10PSiFVTpa0cbqsZgvoPosXMxAQBydulZ/view?usp=drive_link"
          }
          target="_blank"
        >
          <p>Web Development intern</p>
          <p>Cognifyz Technologies</p>
        </Link>
      </div>
    ),
  },
  {
    title: "Codeway Solutions",
    description:
      "Has successfully completed 4 weeks of virtual internship program in Web Development with wonderful remarks at Codeway from 12.03.2024 to 12.04.2024. We were truly amazed by his/her showcased skill and invaluable contributions to the tasks and projects throughout the internship",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br  from-lime-300 via-lime-500 to-lime-700 text-lime-50 hover:bg-gradient-to-tl hover:from-lime-300 hover:via-lime-500 hover:to-lime-700">
        <Link
          className="flex flex-col justify-center items-center"
          href={
            "https://drive.google.com/file/d/1iVZBhiN6h7q2qK8_T2WH3gDps2uNVrhs/view?usp=drive_link"
          }
          target="_blank"
        >
          <p>Web Development Internship</p>
          <p>Codeway Solutions</p>
        </Link>
      </div>
    ),
  },
  {
    title: "Codesoft",
    description:
      "Has successfully completed 4 weeks of virtual internship program in Web Development with wonderful remarks at Codeway from 15.03.2024 to 15.04.2024. We were truly amazed by his/her showcased skill and invaluable contributions to the tasks and projects throughout the internship",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-lime-700 via-lime-500 to-lime-300 text-lime-50 hover:bg-gradient-to-tl hover:from-lime-700 hover:via-lime-500 hover:to-lime-300">
        <Link
          className="flex flex-col justify-center items-center"
          href={
            "https://drive.google.com/file/d/15gEq2creWYgGsXx7RkzT14l3u7OIDycD/view?usp=drive_link"
          }
          target="_blank"
        >
          <p>Web Development intern</p>
          <p>Codesoft</p>
        </Link>
      </div>
    ),
  },
];

const Comments = () => {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
};

export default Comments;
