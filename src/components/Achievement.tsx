"use client";

import React from "react";
import Image from "next/image";
import upgrade from "@/assets/images/Certificate.png";
import javaScript from "@/assets/images/Certificate1.png";
import react from "@/assets/images/Certificate2.png";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

const Achievement: React.FC = () => {
  return (
    <section className="bg-grid-small-black/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h1 className="text-4xl text-center font-semibold py-10 text-lime-900">
        Achievement
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 py-20 mx-auto w-full">
        <WobbleCard containerClassName="col-span-1 bg-gradient-to-br  from-lime-300 via-lime-500 to-lime-700 min-h-[300px] hover:bg-gradient-to-tl hover:from-lime-300 hover:via-lime-500 hover:to-lime-700">
          <Image
            height={"2000"}
            width={"2000"}
            src={javaScript}
            alt="Achievement"
            className="rounded-xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-gradient-to-br  from-lime-300 via-lime-500 to-lime-700 min-h-[300px] hover:bg-gradient-to-tl hover:from-lime-300 hover:via-lime-500 hover:to-lime-700">
          <Image
            height={"2000"}
            width={"2000"}
            src={upgrade}
            alt="Achievement"
            className="rounded-xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-gradient-to-br  from-lime-300 via-lime-500 to-lime-700 min-h-[300px] hover:bg-gradient-to-tl hover:from-lime-300 hover:via-lime-500 hover:to-lime-700">
          <Image
            height={"2000"}
            width={"2000"}
            src={react}
            alt="Achievement"
            className="rounded-xl"
          />
        </WobbleCard>
      </div>
      <div className="flex justify-center items-center pb-10">
        <Button
          borderRadius="1.75rem"
          className="bg-gradient-to-br  from-lime-300 via-lime-500 to-lime-700 text-lime-50 border-lime-200 hover:bg-gradient-to-tl hover:from-lime-300 hover:via-lime-500 hover:to-lime-700"
        >
          <Link href={"/achievement"}>Explore More...</Link>
        </Button>
      </div>
    </section>
  );
};

export default Achievement;
