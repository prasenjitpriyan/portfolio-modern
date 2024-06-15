"use client";

import Achievement from "@/components/Achievement";
import Advantage from "@/components/Advantage";
import EducationExperience from "@/components/EducationExperience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import React, { useState } from "react";
import Loading from "./loading";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-lime-100">
      {!loading ? (
        <>
          <div className="h-screen w-full bg-lime-100 bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-lime-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <Hero />
          </div>
          <div>
            <Advantage />
            <EducationExperience />
            <Project />
            <Achievement />
          </div>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </main>
  );
};

export default Home;
