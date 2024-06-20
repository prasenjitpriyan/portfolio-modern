"use client";

import React from "react";
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";
import { Blog, PrimeReality, UrbanScape } from "./Iframes";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project: React.FC = () => {
  const tabs = [
    {
      title: "UrbanScape",
      value: "UrbanScape",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-lime-50 bg-gradient-to-br from-lime-300 via-lime-500 to-lime-700">
          <div className="flex justify-start gap-5">
            <p className="text-lime-50">UrbanScape</p>
            <Link
              className="text-lime-50"
              href={"https://urbanscape-xi.vercel.app"}
              target="_blank"
            >
              <FaExternalLinkAlt />
            </Link>
          </div>
          <UrbanScape />
        </div>
      ),
    },
    {
      title: "Blog",
      value: "Blog",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-lime-50 bg-gradient-to-br from-lime-300 via-lime-500 to-lime-700">
          <div className="flex justify-start gap-5">
            <p className="text-lime-50">Blog</p>
            <Link
              className="text-lime-50"
              href={"https://blog-g77g.onrender.com/"}
              target="_blank"
            >
              <FaExternalLinkAlt />
            </Link>
          </div>
          <Blog />
        </div>
      ),
    },
    {
      title: "Prime Reality",
      value: "Prime Reality",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-lime-50 bg-gradient-to-br from-lime-300 via-lime-500 to-lime-700">
          <div className="flex justify-start gap-5">
            <p className="text-lime-50">Prime Reality</p>
            <Link
              className="text-lime-50"
              href={"https://prime-reality.onrender.com"}
              target="_blank"
            >
              <FaExternalLinkAlt />
            </Link>
          </div>
          <PrimeReality />
        </div>
      ),
    },
  ];

  return (
    <React.Fragment>
      <h1 className="text-4xl text-center font-semibold pt-10 text-lime-900">
        My Latest Projects
      </h1>
      <div className="h-[80svh] md:h-[100svh] [perspective:1000px] relative b flex flex-col mx-auto w-full items-start justify-start my-40 px-10">
        <Tabs tabs={tabs} />
      </div>
    </React.Fragment>
  );
};

export default Project;
