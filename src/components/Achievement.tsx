"use client";

import React from "react";
import Image from "next/image";
import upgrade from "@/assets/images/Certificate.png";
import { WobbleCard } from "@/components/ui/wobble-card";

const Achievement: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className="text-4xl text-center font-semibold py-10 text-lime-900">
        Achievement
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 py-20 mx-auto w-full bg-grid-small-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <WobbleCard containerClassName="col-span-1 bg-gradient-to-br  from-lime-300 via-lime-500 to-lime-700 min-h-[300px]">
          <Image
            height={"2000"}
            width={"2000"}
            src={upgrade}
            alt="Achievement"
            className="rounded-xl"
          />
        </WobbleCard>
      </div>
    </React.Fragment>
  );
};

export default Achievement;
