import React from "react";
import { motion } from "framer-motion";
import "../app/globals.css";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: "Fullstack Developer",
    company: "Workleap",
    period: "Jan 2025 — May 2025",
    description:
      "Worked on feature and product development using React and C#.",
  },
  {
    role: "Software Developer Intern",
    company: "Matrox Video",
    period: "May 2024 — Dec 2024",
    description:
      "Developed and maintained IPKVM device management software using Java and C#.",
  },
  {
    role: "Full-Stack Developer",
    company: "Root On",
    period: "Sept 2023 — April 2024",
    description:
      "Built a user-friendly global website, developed RESTful APIs to support seamless communication between the front end and back-end.",
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="border-t border-cream-300 pt-8 mb-12">
          <span className="text-sm font-medium tracking-widest uppercase text-accent">
            Experience
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-primary leading-tight mb-16">
          Where I&apos;ve worked
        </h2>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="group border-b border-cream-300 py-8 md:py-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <div className="md:col-span-3">
                  <p className="text-sm text-slate-secondary font-medium">
                    {exp.period}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-slate-primary mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-base font-medium text-accent mb-3">
                    {exp.company}
                  </p>
                  <p className="text-sm md:text-base text-slate-secondary leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceSection;
