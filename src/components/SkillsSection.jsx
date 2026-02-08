import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMysql } from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML5", icon: FaHtml5, category: "frontend" },
  { name: "CSS3", icon: FaCss3Alt, category: "frontend" },
  { name: "JavaScript", icon: FaJs, category: "frontend" },
  { name: "React JS", icon: FaReact, category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "frontend" },

  // Backend
  { name: "Node.js", icon: FaNodeJs, category: "backend" },
  { name: "Express", icon: SiExpress, category: "backend" },
  { name: "MySQL", icon: SiMysql, category: "backend" },

  // Tools
  { name: "Git", icon: FaGitAlt, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Tech <span className="text-primary"> Stack</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 place-items-center">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;
            return (
              <div
                key={key}
                className="flex flex-col items-center gap-4 group cursor-pointer transition-transform duration-300"
              >
                <Icon className="text-7xl md:text-8xl text-primary group-hover:scale-125 transition-transform duration-300" />
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
