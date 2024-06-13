"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

const Achievement: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className="text-4xl text-center font-semibold py-10 text-lime-900">
        Achievement
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 py-10 mx-auto w-full bg-grid-small-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <WobbleCard containerClassName="col-span-1 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div></div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div></div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div></div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div></div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div></div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div></div>
        </WobbleCard>
      </div>
    </React.Fragment>
  );
};

export default Achievement;
