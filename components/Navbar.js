"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

<<<<<<< HEAD
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 transition-all duration-500 ${scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex-shrink-0">
            <div className="w-[38px] h-[38px] rounded-full overflow-hidden ring-2 ring-purple-700/40 group-hover:ring-purple-500/70 transition-all duration-300">
              <img
                className="w-full h-full object-cover"
                src="/nav.jpg"
                alt="Zain Arshad"
                style={{
                  objectPosition: "center 38%",
                  transform: "scale(2)",
                  transformOrigin: "center 52%"
                }}
              />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#05050a] animate-pulse" />
          </div>
          <span className="font-bold text-lg text-white group-hover:text-purple-300 transition-colors duration-200">
            Zain Arshad
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-purple-800/50 border border-purple-700/40"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              className="ml-3 px-5 py-2 rounded-full bg-gradient-to-r from-purple-700 to-indigo-600 text-white text-sm font-semibold hover:from-purple-600 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-700/40"
            >
              Hire Me
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="block w-6 h-0.5 bg-white rounded-full origin-center transition-all"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }}
            className="block w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="block w-6 h-0.5 bg-white rounded-full origin-center transition-all"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 sm:hidden bg-black/90 backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block px-8 py-3 text-base font-medium transition-colors duration-200 ${isActive
                          ? "text-purple-400 bg-purple-900/20"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="px-8 pt-3 pb-2">
                <Link
                  href="/contact"
                  className="block text-center px-5 py-3 rounded-full bg-gradient-to-r from-purple-700 to-indigo-600 text-white font-semibold text-sm"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
