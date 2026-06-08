"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { HiSparkles } from "react-icons/hi2";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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

const contact = () => {
  const [sending, setSending] = useState(false);

  const handlechange = (e) => {
    e.preventDefault();
    if (sending) return;

    const form = e.target;
    setSending(true);
    const id = toast.loading("Sending your message...");

    emailjs
      .sendForm(
        "service_bxry766",
        "template_gr3r0d4",
        form,
        "jA_-WJkAoss6pzSIx"
      )
      .then(
        () => {
          toast.update(id, {
            render: "Message sent successfully! I'll be in touch soon 🚀",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          form.reset();
        },
        () => {
          toast.update(id, {
            render: "Failed to send. Please email me directly.",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <FadeUp className="text-center mb-14">
        <div className="section-label mx-auto mb-4 w-fit">
          <MdConnectWithoutContact className="w-3.5 h-3.5" />
          Let&apos;s Talk
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Have a project in mind? Looking to collaborate or hire? Drop me a message and let&apos;s create something amazing together.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* ── Form ── */}
        <FadeUp delay={0.1} className="lg:col-span-3">
          <form
            onSubmit={handlechange}
            className="glass rounded-2xl p-7 border border-white/[0.06] space-y-5"
            id="contact-form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="firstName" className="text-sm text-gray-300 font-medium">
                  First Name <span className="text-purple-400">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Zain"
                  required
                  className="glass-input"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lastName" className="text-sm text-gray-300 font-medium">
                  Last Name <span className="text-purple-400">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Arshad"
                  required
                  className="glass-input"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm text-gray-300 font-medium">
                Email Address <span className="text-purple-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="glass-input"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm text-gray-300 font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project Inquiry / Collaboration / Hire"
                className="glass-input"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm text-gray-300 font-medium">
                Message <span className="text-purple-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, goals, and timeline..."
                required
                rows={5}
                className="glass-input resize-none"
              />
            </div>

            <motion.button
              id="send-message-btn"
              type="submit"
              disabled={sending}
              whileHover={{ scale: sending ? 1 : 1.02 }}
              whileTap={{ scale: sending ? 1 : 0.98 }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-600 text-white font-semibold text-sm hover:from-purple-600 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-purple-900/30 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <HiSparkles className="w-4 h-4" />
                  Send Message
                </span>
              )}
            </motion.button>
          </form>
        </FadeUp>

        {/* ── Contact Info ── */}
        <FadeUp delay={0.2} className="lg:col-span-2 space-y-5">
          <div className="glass rounded-2xl p-6 border border-white/[0.06] space-y-5">
            <h2 className="text-xl font-bold text-white">Contact Information</h2>

            {[
              {
                icon: <CgMail className="w-5 h-5 text-purple-400" />,
                label: "Email",
                value: "zainarshad110@gmail.com",
                href: "mailto:zainarshad110@gmail.com",
              },
              {
                icon: <FaGithub className="w-5 h-5 text-gray-300" />,
                label: "GitHub",
                value: "@zainarshad16",
                href: "https://github.com/zainarshad16",
              },
              {
                icon: <FaLinkedin className="w-5 h-5 text-blue-400" />,
                label: "LinkedIn",
                value: "Zain Arshad",
                href: "https://www.linkedin.com/in/zain-arshad-76155a322/",
              },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-white/[0.04] group-hover:bg-white/[0.08] transition-colors border border-white/[0.06]">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500">{label}</p>
                  <p className="text-sm text-white font-medium group-hover:text-purple-300 transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Status card */}
          <div className="glass rounded-2xl p-6 border border-white/[0.06]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-semibold">Available for Work</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Currently open to freelance projects, collaborations, and full-time opportunities. I typically respond within 24 hours.
            </p>
          </div>

          {/* Currently at */}
          <div className="glass rounded-2xl p-5 border border-white/[0.06]">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Currently At</p>
            <a
              href="https://www.linkedin.com/company/7-kings-code"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <img src="/7_kings_code_logo.jpg" alt="7 Kings Code" width={36} className="rounded-xl" />
              <div>
                <p className="text-white font-semibold text-sm group-hover:text-purple-300 transition-colors">7 Kings Code</p>
                <p className="text-gray-500 text-xs">Full Stack Developer · US-Based</p>
              </div>
              <FaLinkedin className="ml-auto w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </FadeUp>
      </div>
    </div>
  );
};

export default contact;
