"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Projectcard from "@/components/Projectcard";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { MdWork, MdDesignServices } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { RiSettings4Fill } from "react-icons/ri";

/* ─── Fade-in-view helper ─── */
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  /* Scroll-based fade for the hero section */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.85], [1, 1.04]);
  const heroY = useTransform(scrollYProgress, [0, 0.85], ["0%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 0.85], ["0%", "30%"]);

  return (
    <>
      {/* ══════════════════════════════════════
          HERO — Fullscreen cinematic image
          ══════════════════════════════════════ */}
      <div ref={heroRef} className="hero-section">
        {/* Background image with scroll parallax */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="absolute inset-0"
        >
          <img
            src="/zain.jpg"
            alt="Zain Arshad"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 65%" }}
          />
        </motion.div>

        {/* Black gradient overlay */}
        <div className="hero-overlay" />

        {/* Decorative orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        {/* Hero text */}
        <motion.div
          style={{ opacity: heroOpacity, y: textY }}
          className="hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-label mb-6"
          >
<<<<<<< HEAD
            <HiSparkles className="w-3.5 h-3.5" />
            Available for new opportunities
=======
            {<div className="info flex flex-col justify-center items-center mt-3 text-center">
              <span className="md:text-6xl text-4xl font-bold">Hi, I'm Zain Arshad</span>
              <span className="md:text-4xl text-2xl font-bold text-gray-300 flex flex-col md:gap-13 gap-8">I am a Full Stack Developer contributing to impactful and modern web applications.
                <span className="text-lg font-normal">With expertise in MERN Stack, Reactjs and NEXTjs, I focus on delivering scalable and efficient products.</span>
              </span>
            </div>}
>>>>>>> 967aa2d08c67d661d7fb6fbecd74044ea67f681a
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-none tracking-tight glow-text"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Zain Arshad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-3 font-light"
          >
            Full Stack Developer &amp; Sitecore XM Cloud Specialist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-sm md:text-base text-gray-400 max-w-xl mb-10"
          >
            Currently at{" "}
            <Link
              href="https://www.linkedin.com/company/7-kings-code"
              target="_blank"
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              7 Kings Code
            </Link>{" "}
            · React · Next.js · .NET · Sitecore XM Cloud
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="/Zain's CV.pdf"
              target="_blank"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-700 to-indigo-600 text-white font-semibold text-sm hover:from-purple-600 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50 hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full glass text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          >
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════
          MAIN CONTENT (below hero)
          ══════════════════════════════════════ */}
      <div className="relative bg-[#05050a]">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

        {/* ── SERVICES ── */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <FadeUp className="text-center mb-14">
            <div className="section-label mx-auto mb-4 w-fit">
              <MdWork className="w-3.5 h-3.5" />
              What I Do
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Building Digital Experiences
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              From idea to launch — designing, developing, and maintaining
              everything you need for digital success.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <MdDesignServices className="w-6 h-6 text-purple-400" />,
                label: "DESIGN",
                desc: "Crafting modern, responsive, and accessible UI/UX with a focus on clarity and premium aesthetics.",
                points: ["UI/UX design with usability focus", "Modern responsive layouts", "Consistent design systems"],
                delay: 0.1,
              },
              {
                icon: <IoCodeSlash className="w-6 h-6 text-indigo-400" />,
                label: "DEVELOPMENT",
                desc: "Turning ideas into high-performance web apps with React, Next.js, Node.js, and Sitecore XM Cloud.",
                points: ["Full-stack MERN & .NET apps", "Sitecore XM Cloud CMS", "API integrations & scalability"],
                delay: 0.2,
              },
              {
                icon: <RiSettings4Fill className="w-6 h-6 text-blue-400" />,
                label: "MAINTENANCE",
                desc: "Keeping your digital products running smoothly with regular updates, bug fixes, and improvements.",
                points: ["Continuous monitoring & updates", "Security patches & backups", "Feature enhancements"],
                delay: 0.3,
              },
            ].map(({ icon, label, desc, points, delay }) => (
              <FadeUp key={label} delay={delay}>
                <div className="glass rounded-2xl p-6 card-hover h-full border border-white/[0.06] hover:border-purple-700/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-white/5">{icon}</div>
                    <span className="text-xs font-bold tracking-widest text-gray-400">
                      {label}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{desc}</p>
                  <ul className="space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ── WORK EXPERIENCE ── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <FadeUp className="text-center mb-14">
            <div className="section-label mx-auto mb-4 w-fit">
              <MdWork className="w-3.5 h-3.5" />
              Career
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work Experience
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              A journey of building enterprise-grade products and mastering
              cutting-edge technologies.
            </p>
          </FadeUp>

          <div className="space-y-6">
            {/* ── 7 Kings Code ── */}
            <FadeUp delay={0.1}>
              <div className="glass rounded-2xl p-7 card-hover border border-white/[0.06] hover:border-purple-700/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-600 to-indigo-800 rounded-l-2xl" />
                <div className="pl-2">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <Link
                        href="https://www.linkedin.com/company/7-kings-code"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0"
                        title="7 Kings Code on LinkedIn"
                      >
                        <img
                          src="/7_kings_code_logo.jpg"
                          alt="7 Kings Code"
                          width={52}
                          height={52}
                          className="rounded-xl ring-2 ring-white/10 hover:ring-purple-500/50 transition-all duration-300 object-contain"
                        />
                      </Link>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Full Stack Developer
                        </h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Link
                            href="https://www.linkedin.com/company/7-kings-code"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 font-semibold text-sm flex items-center gap-1 transition-colors"
                          >
                            7 Kings Code
                            <FaLinkedin className="w-3.5 h-3.5" />
                          </Link>
                          <span className="text-gray-600">·</span>
                          <span className="text-gray-400 text-sm">US-Based Company</span>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">Lahore, Pakistan · Hybrid</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="tech-badge">Current Role</span>
                      <span className="text-xs text-gray-500">2024 – Present</span>
                    </div>
                  </div>

                  {/* Phase 1 */}
                  <div className="mb-5 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <h4 className="text-sm font-bold text-gray-200 mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-purple-800/50 flex items-center justify-center text-[10px] text-purple-300 font-bold">1</span>
                      Internal Web Project — Frontend Lead
                    </h4>
                    <ul className="space-y-1.5 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-purple-500 flex-shrink-0" />
                        Delivered full frontend experience for an internal company product using React & Next.js
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-purple-500 flex-shrink-0" />
                        Built reusable component libraries and implemented responsive UI designs end-to-end
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-purple-500 flex-shrink-0" />
                        Collaborated with cross-functional teams in an agile environment
                      </li>
                    </ul>
                  </div>

                  {/* Phase 2 — Sitecore */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-sm font-bold text-gray-200 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-indigo-800/50 flex items-center justify-center text-[10px] text-indigo-300 font-bold">2</span>
                        Sitecore XM Cloud — Frontend Developer &amp; Content Editor
                      </h4>
                      <Link
                        href="https://www.linkedin.com/company/sitecore/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Sitecore on LinkedIn"
                      >
                        <img
                          src="/sitecore_logo.jpg"
                          alt="Sitecore"
                          width={28}
                          height={28}
                          className="rounded-lg ring-1 ring-white/10 hover:ring-indigo-500/50 transition-all duration-300 object-contain"
                        />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/sitecore/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        title="Sitecore LinkedIn"
                      >
                        <FaLinkedin className="w-4 h-4" />
                      </Link>
                    </div>
                    <p className="text-xs text-indigo-400 mb-3 font-medium">
                      6+ months hands-on experience
                    </p>
                    <ul className="space-y-1.5 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                        Frontend development on Sitecore XM Cloud — building and integrating components with the JSS (JavaScript Services) SDK
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                        Served as a Content Editor — managing and publishing content through the Sitecore content management interface
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                        Worked with headless architecture, GraphQL APIs, and Next.js rendering strategies (SSG/SSR/ISR)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                        Collaborated with stakeholders to deliver CMS-driven marketing pages for enterprise clients
                      </li>
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {["React", "Next.js", "Sitecore XM Cloud", "JSS SDK", "GraphQL", "TypeScript", ".NET"].map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* ── DIT GCU ── */}
            <FadeUp delay={0.2}>
              <div className="glass rounded-2xl p-7 card-hover border border-white/[0.06] hover:border-gray-700/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gray-500 to-gray-800 rounded-l-2xl" />
                <div className="pl-2">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <img
                        src="/gcu.jpg"
                        alt="GCU"
                        width={52}
                        height={52}
                        className="rounded-xl ring-2 ring-white/10 object-cover flex-shrink-0"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Frontend Developer
                        </h3>
                        <p className="text-gray-400 font-medium text-sm mt-0.5">
                          DIT — Government College University
                        </p>
                        <p className="text-gray-500 text-xs mt-1">Lahore, Pakistan · On-site</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="tech-badge" style={{ background: "rgba(107,114,128,0.15)", borderColor: "rgba(107,114,128,0.3)", color: "#9ca3af" }}>Previous Role</span>
                      <span className="text-xs text-gray-500">2023 – 2024</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-sm text-gray-400 mb-5">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500 flex-shrink-0" />
                      Developed and maintained university software (LMS & Campus Management System) using Node.js, Express.js, and React.js
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500 flex-shrink-0" />
                      Collaborated with a multidisciplinary team to design and implement features for various campus departments
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500 flex-shrink-0" />
                      Actively participated in agile sprints and contributed to milestones
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Node.js", "Express.js", "MongoDB"].map((t) => (
                      <span key={t} className="tech-badge" style={{ background: "rgba(107,114,128,0.1)", borderColor: "rgba(107,114,128,0.25)", color: "#9ca3af" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <FadeUp className="text-center mb-14">
            <div className="section-label mx-auto mb-4 w-fit">
              <FaGithub className="w-3.5 h-3.5" />
              Open Source
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Check out my most recently updated open-source repositories on GitHub.
            </p>
          </FadeUp>

          <Projectcard />

          <FadeUp delay={0.1} className="flex justify-center mt-10">
            <Link
              href="https://github.com/zainarshad16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                id="view-github-btn"
                className="text-white cursor-pointer flex items-center gap-2.5 glass px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 border border-white/[0.08] hover:border-white/20"
              >
                <FaGithub className="w-4.5 h-4.5" />
                View All on GitHub
                <FaExternalLinkAlt className="w-3 h-3 text-gray-400" />
              </button>
            </Link>
          </FadeUp>
        </section>
      </div>
    </>
  );
}
