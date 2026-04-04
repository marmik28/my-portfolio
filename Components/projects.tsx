import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import "../app/globals.css";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  stargazers_count: number;
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  Java: "#ED8B00",
  "C#": "#239120",
  C: "#A8B9CC",
  HTML: "#E34C26",
  CSS: "#1572B6",
  Go: "#00ADD8",
  Rust: "#DEA584",
};

const ProjectsSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/marmik28/repos")
      .then((response) => response.json())
      .then((data: GitHubRepo[]) => {
        const filteredRepos = data.filter((repo) =>
          repo.topics.includes("portfolio")
        );
        setRepos(filteredRepos);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="border-t border-cream-300 pt-8 mb-12">
          <span className="text-sm font-medium tracking-widest uppercase text-accent">
            Projects
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-primary leading-tight mb-16">
          Selected work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group block"
            >
              <div className="relative bg-cream-50 border border-cream-300 rounded-2xl p-8 md:p-10 h-full transition-all duration-300 hover:border-cream-300/0 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center">
                    <FaGithub className="text-slate-secondary" size={18} />
                  </div>
                  <FiArrowUpRight
                    className="text-slate-secondary group-hover:text-accent transition-colors duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform"
                    size={20}
                  />
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-semibold text-slate-primary mb-3 group-hover:text-accent transition-colors duration-200">
                  {repo.name
                    .split("-")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(" ")}
                </h3>

                <p className="text-sm md:text-base text-slate-secondary leading-relaxed mb-8">
                  {repo.description || "A software project."}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  {repo.language && (
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            languageColors[repo.language] || "#6B6B69",
                        }}
                      />
                      <span className="text-xs font-medium text-slate-secondary">
                        {repo.language}
                      </span>
                    </div>
                  )}
                  {repo.topics
                    .filter((t) => t !== "portfolio")
                    .slice(0, 3)
                    .map((topic) => (
                      <span
                        key={topic}
                        className="text-xs font-medium text-slate-secondary bg-cream-200 px-2.5 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
