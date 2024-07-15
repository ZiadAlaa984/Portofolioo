"use client";
import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Link from "next/link";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section id="Home" className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex gap-8 items-center">
            <div className="tracking-widest font-bold text-white max-w-80">
              <TextGenerateEffect
                className="md:tracking-wider font-mono mb-4 text-md md:text-lg max-w-[600px]"
                words="Ziad Alaa"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link href={"https://flowcv.com/resume/rp9g5omhik"} target="_blank">
                <HoverBorderGradient>Resume</HoverBorderGradient>
              </Link>
            </motion.div>
          </div>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="bg-clip-text text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold capitaliz"
          >
            Front-End Dev.
          </motion.h1>

          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <TextGenerateEffect
              words="Elevating digital experiences through code. Explore my portfolio to see innovation in action."
              className="text-center font-light md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
            />
          </motion.h4>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <Link href={"#About"}>
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
