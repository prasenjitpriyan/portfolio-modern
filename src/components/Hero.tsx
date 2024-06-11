"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const Hero: React.FC = () => {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto text-lime-900"
      >
        <Highlight className="text-xl md:text-3xl lg:text-4xl font-bold">
          Innovative Solutions with JavaScript
        </Highlight>
        <div className="text-xl md:text-3xl lg:text-4xl pt-5">
          <p>Welcome! I&apos;m Prasenjit Das</p>
          <p>A JavaScript engineer</p>
          <p className="text-xl">
            Passionate about crafting cutting-edge web applications using the
            latest technologies.
          </p>
          <p className="text-xl">
            Let&apos;s build something amazing together.
          </p>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
};

export default Hero;
