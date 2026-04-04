import React from "react";
import "../app/globals.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail, FiArrowDownRight } from "react-icons/fi";

const Hero: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-[22vh] pb-[16vh] md:pt-[28vh] md:pb-[20vh]">
      <p className="text-sm md:text-base font-medium tracking-widest uppercase text-accent mb-6 animate-slide-up delay-1">
        Software Developer
      </p>

      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-slate-primary leading-[1.05] mb-8 animate-slide-up delay-2">
        Marmik Patel
      </h1>

      <p className="max-w-xl text-lg md:text-xl text-slate-secondary leading-relaxed mb-12 animate-slide-up delay-3">
        Driven by a passion for coding, my goal is to turn ideas into reality
        with elegant and efficient software.
      </p>

      <div className="flex items-center gap-4 animate-slide-up delay-4">
        <a
          href="https://github.com/marmik28"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full border border-cream-300 flex items-center justify-center text-slate-secondary hover:text-slate-primary hover:border-slate-primary transition-all duration-200"
          aria-label="GitHub"
        >
          <FaGithub size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/marmikpatel28"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full border border-cream-300 flex items-center justify-center text-slate-secondary hover:text-slate-primary hover:border-slate-primary transition-all duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          href="mailto:marmik28112002@gmail.com"
          className="w-11 h-11 rounded-full border border-cream-300 flex items-center justify-center text-slate-secondary hover:text-slate-primary hover:border-slate-primary transition-all duration-200"
          aria-label="Email"
        >
          <FiMail size={18} />
        </a>
        <a
          href="#projects"
          className="ml-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200"
        >
          See my work <FiArrowDownRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
