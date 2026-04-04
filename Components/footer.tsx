import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "../app/globals.css";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cream-300">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-serif text-xl font-semibold text-slate-primary">
              MP
            </span>
            <span className="text-sm text-slate-secondary">
              &copy; {new Date().getFullYear()} Marmik Patel
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/marmik28"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cream-300 flex items-center justify-center text-slate-secondary hover:text-slate-primary hover:border-slate-primary transition-all duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/marmikpatel28"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cream-300 flex items-center justify-center text-slate-secondary hover:text-slate-primary hover:border-slate-primary transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="mailto:marmik28112002@gmail.com"
              className="w-10 h-10 rounded-full border border-cream-300 flex items-center justify-center text-slate-secondary hover:text-slate-primary hover:border-slate-primary transition-all duration-200"
              aria-label="Email"
            >
              <FiMail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
