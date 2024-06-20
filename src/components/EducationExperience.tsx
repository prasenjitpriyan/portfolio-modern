"use client";
import React from "react";
import Image from "next/image";

import { Boxes } from "@/components/ui/background-boxes";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";

const EducationExperience: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className="text-4xl text-center font-semibold py-10 text-lime-900">
        Education & Experience
      </h1>
      <div className="min-h-[30rem] relative w-full overflow-hidden bg-lime-100">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 py-20 px-10 gap-10">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-lime-100">
            <div className="min-h-[35rem] flex flex-col justify-center items-center">
              <div className="flex flex-col py-2 justify-center items-center">
                <p className="underline text-lime-950">2008 - 2013</p>
              </div>
              <div className="flex flex-col py-2 justify-center items-center">
                <h3 className="text-xl text-lime-900">
                  Bachelor Degree (B. Sc)
                </h3>
                <p className="text-lime-500">University of Calcutta</p>
              </div>
              <div className="flex flex-col py-2 justify-center items-center">
                <h3 className="text-xl text-lime-900">
                  Masters Degree (M. Sc)
                </h3>
                <p className="text-lime-500">University of Kanpur</p>
              </div>
              <div className="flex flex-col py-2 justify-center items-center">
                <h3 className="text-xl text-lime-900">DOEACC O Level Course</h3>
                <p className="text-center text-lime-500">
                  Department of Information Technology,
                  <br />
                  Ministry of Communications &
                  <br />
                  Information Technology,
                  <br />
                  Government of India.
                </p>
              </div>
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-lime-100">
            <div className="min-h-[35rem] flex flex-col justify-center items-center">
              <div className="flex flex-col py-2 justify-center items-center">
                <p className="underline text-lime-950">2014 - 2024</p>
              </div>
              <div className="flex flex-col py-2 justify-center items-center">
                <h3 className="text-xl text-lime-900">Postal Assistant</h3>
                <p className="text-center text-lime-500">
                  Department of Posts
                  <br />
                  Ministry of Communications
                  <br />
                  Government of India
                </p>
              </div>
              <div className="flex flex-col py-2 justify-center items-center">
                <h3 className="text-xl text-lime-900">
                  Full Stack Development Bootcamp
                </h3>
                <p className="text-lime-500">upGrad KnowledgeHut</p>
              </div>
              <div className="flex flex-col py-2 justify-center items-center">
                <h3 className="text-xl text-lime-900">
                  Hackathon Participation
                </h3>
                <p className="text-lime-500">upGrad KnowledgeHut</p>
              </div>
              <div className="flex flex-col py-2 justify-center items-center">
                <h3 className="text-xl text-lime-900">Meta</h3>
                <p className="text-lime-500">
                  Introduction to Front-End Development
                </p>
                <p className="text-lime-500">Programming with JavaScript</p>
                <p className="text-lime-500">Version Control</p>
                <p className="text-lime-500">HTML and CSS in depth</p>
                <p className="text-lime-500">Principles of UX/UI Design</p>
                <p className="text-lime-500">React Basic & Advance</p>
                <p className="text-lime-500">Front-End Developer Capstone</p>
              </div>
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-lime-100">
            <div className="min-h-[35rem] flex flex-col justify-center items-center">
              <div className="flex flex-col py-2 justify-center items-center">
                <p className="underline text-lime-950">2024</p>
              </div>
              <div className="flex flex-col py-2 justify-center items-center">
                <h3 className="text-xl text-lime-900">
                  Web Development Internship
                </h3>
                <p className="text-lime-500">Bharat Intern</p>
                <p className="text-lime-500">Codeway Solutions</p>
                <p className="text-lime-500">Prodigy InfoTech</p>
                <p className="text-lime-500">CodeAlpha</p>
                <p className="text-lime-500">CodeClause</p>
                <p className="text-lime-500">Codesoft</p>
                <p className="text-lime-500">Cognifyz Technologies</p>
              </div>
              <div className="flex flex-col py-2 justify-center items-center">
                <h3 className="text-xl text-lime-900">
                  React.js Development Internship
                </h3>
                <p className="text-lime-500">VeriTech Software IT Services</p>
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EducationExperience;
