"use client";

import React from "react";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";
import project from "@/assets/images/bg291.jpg";

const Project: React.FC = () => {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-lime-50 bg-gradient-to-br from-lime-400 via-lime-600 to-lime-800">
          <div className="flex justify-start gap-5">
            <p>Product Tab</p>
            <Link className="" href={"/"}>
              Visit
            </Link>
          </div>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-lime-50 bg-gradient-to-br from-lime-400 via-lime-600 to-lime-800">
          <div className="flex justify-start gap-5">
            <p>Services tab</p>
            <Link className="" href={"/"}>
              Visit
            </Link>
          </div>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-lime-50 bg-gradient-to-br from-lime-400 via-lime-600 to-lime-800">
          <div className="flex justify-start gap-5">
            <p>Playground tab</p>
            <Link className="" href={"/"}>
              Visit
            </Link>
          </div>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-lime-50 bg-gradient-to-br from-lime-400 via-lime-600 to-lime-800">
          <div className="flex justify-start gap-5">
            <p>Content tab</p>
            <Link className="" href={"/"}>
              Visit
            </Link>
          </div>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-lime-50 bg-gradient-to-br from-lime-400 via-lime-600 to-lime-800">
          <div className="flex justify-start gap-5">
            <p>Random tab</p>
            <Link className="" href={"/"}>
              Visit
            </Link>
          </div>
          <DummyContent />
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

const DummyContent = () => {
  return (
    <Image
      src={project}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
