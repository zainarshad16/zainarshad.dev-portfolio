"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { MdSchool } from "react-icons/md";

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

export const metadata = {
  title: "About Me - Zainarshad Portfolio",
  description: "Learn more about Zain Arshad, his journey in BSCS at GCU, skills, cloud computing, SQA, and IT support.",
  icons: { icon: "/favicon.ico" }
};

const about = () => {
  return (
    <>
      <section className="min-h-screen text-gray-200 pt-28 pb-20 px-6 md:px-12 max-w-5xl mx-auto">

        {/* Header */}
        <FadeUp className="mb-12">
          <div className="section-label mb-4 w-fit">
            <HiSparkles className="w-3.5 h-3.5" />
            Who I Am
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Full Stack Developer from Lahore, Pakistan — building enterprise-grade digital experiences.
          </p>
        </FadeUp>

        {/* Quick facts */}
        <FadeUp delay={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {[
            { icon: <FaMapMarkerAlt className="w-4 h-4 text-purple-400" />, label: "Location", value: "Lahore, Pakistan" },
            { icon: <FaBriefcase className="w-4 h-4 text-indigo-400" />, label: "Current Role", value: "Full Stack Dev @ 7 Kings Code" },
            { icon: <MdSchool className="w-4 h-4 text-blue-400" />, label: "Education", value: "BSCS — GCU Lahore" },
          ].map(({ icon, label, value }) => (
            <div key={label} className="glass rounded-2xl p-4 border border-white/[0.06] flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/5">{icon}</div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
                <p className="text-sm text-white font-medium">{value}</p>
              </div>
            </div>
          ))}
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Main text */}
          <div className="md:col-span-3 space-y-8">
            <FadeUp delay={0.15}>
              <div className="glass rounded-2xl p-6 border border-white/[0.06]">
                <h2 className="text-xl font-bold text-white mb-3">Hey there 👋</h2>
                <p className="text-gray-400 leading-relaxed">
                  I&apos;m <span className="text-white font-semibold">Zain Arshad</span>, a passionate Full Stack Developer
                  currently working at{" "}
                  <Link
                    href="https://www.linkedin.com/company/7-kings-code"
                    target="_blank"
                    className="text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    7 Kings Code <FaLinkedin className="w-3.5 h-3.5" />
                  </Link>{" "}
                  — a US-based software company. I specialize in React, Next.js, .NET, and have 6+ months of
                  hands-on experience with <span className="text-indigo-400 font-semibold">Sitecore XM Cloud</span> — working as both a frontend developer and content editor.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2 className="text-2xl font-bold text-white mb-3">My Journey in Tech</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                My passion for tech started young — the moment I realized a few lines of code could create
                something useful and impactful. Since then, I&apos;ve never stopped exploring. I started with
                HTML, CSS, and JavaScript, progressed through React and Next.js, and now I work on enterprise
                headless CMS solutions with <strong className="text-white">Sitecore XM Cloud</strong>.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Before joining 7 Kings Code, I worked at the <strong className="text-white">IT Department of Government College University (DIT GCU)</strong>,
                where I helped develop and maintain campus-wide systems including LMS and Campus Management
                Software using Node.js, Express, and React.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <h2 className="text-2xl font-bold text-white mb-3">Sitecore XM Cloud Experience</h2>
              <div className="glass rounded-2xl p-5 border border-indigo-800/30">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/sitecore_logo.jpg" alt="Sitecore" width={36} className="rounded-lg" />
                  <div>
                    <p className="text-white font-semibold text-sm">Sitecore XM Cloud</p>
                    <Link
                      href="https://www.linkedin.com/company/sitecore/"
                      target="_blank"
                      className="text-indigo-400 text-xs hover:text-indigo-300 flex items-center gap-1 transition-colors"
                    >
                      Follow on LinkedIn <FaLinkedin className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  For the past 6 months, I&apos;ve been deeply immersed in Sitecore XM Cloud — building and
                  integrating frontend components using the JSS SDK, working with GraphQL APIs, and managing
                  content through the Sitecore CMS editor interface.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {[
                    "Frontend component development with JSS SDK & Next.js",
                    "Content management and publishing in Sitecore CMS",
                    "GraphQL API integration for headless content delivery",
                    "SSG/SSR/ISR rendering strategies for performance",
                    "Collaboration with enterprise marketing & development teams",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <h2 className="text-2xl font-bold text-white mb-3">What I Love Doing</h2>
              <ul className="space-y-2 text-gray-400">
                {[
                  "💻 Full Stack Web Development — React, Next.js, Node.js, MongoDB, .NET",
                  "🧩 Enterprise CMS — Sitecore XM Cloud frontend & content management",
                  "🧠 Software Quality Assurance — testing, validation, performance",
                  "🎨 UI/UX Design — crafting premium, user-friendly interfaces",
                  "☁️ Cloud Computing — Azure, AWS fundamentals, scalable architecture",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.35}>
              <h2 className="text-2xl font-bold text-white mb-3">My Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                My goal is to grow into a <strong className="text-white">versatile Full Stack Developer</strong> with
                deep expertise in modern headless CMS platforms, cloud infrastructure, and software quality. I want
                to build software that&apos;s not just functional, but reliable, accessible, and impactful.
              </p>
              <blockquote className="mt-6 border-l-2 border-purple-700 pl-4 italic text-gray-400">
                &quot;Technology is not just about logic — it&apos;s about creativity, precision, and impact. Every project
                I build is a reflection of my passion for learning and contributing through code.&quot;
                <footer className="mt-2 text-sm text-purple-400 not-italic font-semibold">— Zain Arshad</footer>
              </blockquote>
            </FadeUp>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-6">
            {/* Photo */}
            <FadeUp delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] ring-2 ring-white/10">
                <img
                  src="/zain.jpg"
                  alt="Zain Arshad"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center 55%",
                    transform: "scale(1.1)",
                    transformOrigin: "center 52%"
                  }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#05050a] via-transparent to-transparent" />
              </div>
            </FadeUp>

            {/* GCU card */}
            <FadeUp delay={0.3}>
              <div className="glass rounded-2xl p-5 border border-white/[0.06]">
                <div className="flex items-center gap-3 mb-3">
                  <img src="/gcu.jpg" alt="GCU" width={40} className="rounded-xl object-cover" />
                  <div>
                    <p className="text-white font-bold text-sm">Government College University</p>
                    <p className="text-gray-500 text-xs">BSCS — Lahore, Pakistan</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  GCU has been a life-changing experience — a culture of excellence, creativity, and discipline that shaped me into a determined developer and problem-solver.
                </p>
              </div>
            </FadeUp>

            {/* Beyond the Code */}
            <FadeUp delay={0.4}>
              <div className="glass rounded-2xl p-5 border border-white/[0.06]">
                <h3 className="text-white font-bold mb-3 text-sm">Beyond the Code</h3>
                <ul className="space-y-2 text-xs text-gray-400">
                  {[
                    "📚 Exploring TypeScript & advanced architecture patterns",
                    "🤖 Diving into AI/ML integrations",
                    "🧪 Automation testing with Selenium & Postman",
                    "☁️ Learning cloud infrastructure (Azure)",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
