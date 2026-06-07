"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaEnvelope, FaHeart } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#07070f] border-t border-white/[0.06] mt-10">
      {/* Subtle glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden ring-2 ring-purple-700/40 flex-shrink-0">
                <img
                  src="/nav.jpg"
                  alt="Zain Arshad"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center 38%",
                    transform: "scale(2.2)",
                    transformOrigin: "center 52%"
                  }}
                />
              </div>
              <span className="font-bold text-lg text-white">Zain Arshad</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer &amp; Sitecore XM Cloud Specialist at 7 Kings Code. Building premium digital experiences.
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance projects
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Me" },
                { href: "/skills", label: "Skills" },
                { href: "/contact", label: "Contact" },
                { href: "/Zain's CV.pdf", label: "Download Resume", external: true },
              ].map(({ href, label, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-purple-500 transition-all duration-200 rounded" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Connect</h3>
            <div className="flex flex-col gap-3 mb-6">
              <Link
                href="mailto:zainarshad110@gmail.com"
                className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-sm group"
              >
                <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-purple-900/30 transition-colors">
                  <FaEnvelope className="w-3.5 h-3.5" />
                </div>
                zainarshad110@gmail.com
              </Link>
              <Link
                href="https://github.com/zainarshad16"
                target="_blank"
                className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-sm group"
              >
                <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-gray-700/50 transition-colors">
                  <FaGithub className="w-3.5 h-3.5" />
                </div>
                @zainarshad16
              </Link>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { href: "https://www.linkedin.com/in/zain-arshad-76155a322/", icon: <FaLinkedin className="w-4 h-4" />, label: "LinkedIn" },
                { href: "https://github.com/zainarshad16", icon: <FaGithub className="w-4 h-4" />, label: "GitHub" },
                { href: "https://www.instagram.com/zainarshad.16/", icon: <FaInstagram className="w-4 h-4" />, label: "Instagram" },
                { href: "https://www.facebook.com/profile.php?id=100014594230031", icon: <FaFacebook className="w-4 h-4" />, label: "Facebook" },
              ].map(({ href, icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-xl glass hover:bg-purple-900/30 border border-white/[0.06] hover:border-purple-700/30 text-gray-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Currently working with */}
        <div className="border-t border-white/[0.05] pt-8 mb-8">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <HiSparkles className="w-3.5 h-3.5 text-purple-500" />
            Currently Working With
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="https://www.linkedin.com/company/7-kings-code"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 glass px-4 py-2 rounded-full border border-white/[0.06] hover:border-purple-700/30 transition-all duration-200 group"
            >
              <img src="/7_kings_code_logo.jpg" alt="7 Kings Code" width={22} height={22} className="rounded-md" />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">7 Kings Code</span>
              <FaLinkedin className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/sitecore/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 glass px-4 py-2 rounded-full border border-white/[0.06] hover:border-indigo-700/30 transition-all duration-200 group"
            >
              <img src="/sitecore_logo.jpg" alt="Sitecore" width={22} height={22} className="rounded-md" />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Sitecore XM Cloud</span>
              <FaLinkedin className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-white/[0.05]">
          <p className="text-xs text-gray-500">
            © {year} Zain Arshad · All rights reserved
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Built with <FaHeart className="w-3 h-3 text-purple-500" /> using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
