"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiChip } from "react-icons/hi";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaBoxesStacked } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.65, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const SkillCard = ({ name, level, pct, animClass, color = "#7c3aed" }) => (
  <div className="glass card-hover rounded-2xl p-5 border border-white/[0.06] hover:border-purple-700/30">
    <div className="flex justify-between items-center mb-3">
      <span className="font-bold text-white text-sm">{name}</span>
      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/[0.06]">
        {level}
      </span>
    </div>
    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div
        className={`${animClass} h-1.5 rounded-full`}
        style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
      />
    </div>
    <div className="flex justify-between mt-1.5">
      <span className="text-[10px] text-gray-600">Proficiency</span>
      <span className="text-[10px] text-gray-500">{pct}%</span>
    </div>
  </div>
);

const skills = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <FadeUp className="text-center mb-14">
        <div className="section-label mx-auto mb-4 w-fit">
          <HiChip className="w-3.5 h-3.5" />
          Technical Arsenal
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
          Skills &amp; <span className="gradient-text">Technologies</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          A comprehensive overview of my technical expertise across various development domains and tools.
        </p>
      </FadeUp>

      {/* ── Full Stack Development ── */}
      <FadeUp delay={0.1} className="mb-5">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-purple-900/30 border border-purple-800/30">
            <IoCodeSlashSharp className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-white">Full Stack Development</h2>
            <p className="text-gray-500 text-sm">Modern web interfaces &amp; backend systems</p>
          </div>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {[
          { name: "MERN Stack", level: "Intermediate", pct: 75, animClass: "blue-line", color: "#7c3aed" },
          { name: "React.js", level: "Advanced", pct: 85, animClass: "blue-line1", color: "#61dafb" },
          { name: "Next.js", level: "Expert", pct: 95, animClass: "blue-line2", color: "#ffffff" },
          { name: ".NET Core", level: "Expert", pct: 90, animClass: "blue-line3", color: "#512bd4" },
          { name: "Sitecore XM Cloud", level: "Proficient", pct: 70, animClass: "blue-line5", color: "#ff1f4b" },
          { name: "Blockchain / Web3", level: "Beginner", pct: 40, animClass: "blue-line4", color: "#f59e0b" },
        ].map((skill, i) => (
          <FadeUp key={skill.name} delay={0.05 * i}>
            <SkillCard {...skill} />
          </FadeUp>
        ))}
      </div>

      {/* Sitecore highlight */}
      <FadeUp delay={0.2} className="mb-14">
        <div className="glass rounded-2xl p-6 border border-red-900/30 hover:border-red-700/40 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <img src="/sitecore_logo.jpg" alt="Sitecore" width={40} className="rounded-xl" />
            <div>
              <h3 className="text-white font-bold">Sitecore XM Cloud</h3>
              <p className="text-gray-500 text-xs">6+ months hands-on at 7 Kings Code</p>
            </div>
            <span className="ml-auto tech-badge" style={{ background: "rgba(239,68,68,0.1)", borderColor: "rgba(239,68,68,0.25)", color: "#fca5a5" }}>
              <HiSparkles className="w-3 h-3" /> Active
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["JSS SDK", "GraphQL", "Headless CMS", "Content Editor", "Next.js SSG/SSR", "Component Library", "XM Cloud Deploy", "Experience Editor"].map((tag) => (
              <span key={tag} className="text-xs text-center px-3 py-1.5 rounded-lg bg-red-900/10 border border-red-900/20 text-red-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* ── Tools & Programs ── */}
      <FadeUp delay={0.1} className="mb-5">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-yellow-900/20 border border-yellow-800/20">
            <FaBoxesStacked className="w-6 h-6 text-yellow-500" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-white">Programs &amp; Tools</h2>
            <p className="text-gray-500 text-sm">Development &amp; productivity tools</p>
          </div>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: "Git & GitHub", level: "Advanced", pct: 90, animClass: "blue-line3", color: "#f97316" },
          { name: "Visual Studio Code", level: "Advanced", pct: 90, animClass: "blue-line3", color: "#007acc" },
          { name: "Postman", level: "Advanced", pct: 90, animClass: "blue-line3", color: "#ff6c37" },
          { name: "Adobe Photoshop", level: "Intermediate", pct: 75, animClass: "blue-line", color: "#31a8ff" },
          { name: "Adobe Lightroom", level: "Intermediate", pct: 75, animClass: "blue-line", color: "#23a8ff" },
        ].map((tool, i) => (
          <FadeUp key={tool.name} delay={0.05 * i}>
            <SkillCard {...tool} />
          </FadeUp>
        ))}
      </div>
    </div>
  );
};

export default skills;
