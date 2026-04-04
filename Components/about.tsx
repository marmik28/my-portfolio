import React from "react";
import { motion } from "framer-motion";
import "../app/globals.css";

const AboutMe: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="border-t border-cream-300 pt-8 mb-12">
          <span className="text-sm font-medium tracking-widest uppercase text-accent">
            About
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-primary leading-tight">
              Building software that matters.
            </h2>
          </div>

          <div className="md:col-span-7 space-y-6">
            <p className="text-base md:text-lg text-slate-secondary leading-relaxed">
              I&apos;m Marmik Patel, a software developer with a passion for
              creating modern, scalable software. My journey in coding began
              with a deep fascination for problem-solving and a love for
              technology.
            </p>
            <p className="text-base md:text-lg text-slate-secondary leading-relaxed">
              Over the years, I&apos;ve honed my skills in full-stack
              development, working with technologies like React, Node.js, Java,
              C#, and more. I believe in writing clean, efficient code that not
              only works but also adds value to the user experience.
            </p>
            <p className="text-base md:text-lg text-slate-secondary leading-relaxed">
              When I&apos;m not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and engaging with the
              developer community.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
