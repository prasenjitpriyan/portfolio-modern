"use client";
import React from "react";

import { Boxes } from "@/components/ui/background-boxes";

const EducationExperience: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className="text-4xl text-center font-semibold py-10 text-lime-900">
        Education & Experience
      </h1>
      <div className="min-h-[40rem] relative w-full overflow-hidden bg-lime-100">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20"></div>
      </div>
    </React.Fragment>
  );
};

export default EducationExperience;
