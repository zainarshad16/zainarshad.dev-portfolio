"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const LANG_COLORS = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#264de4",
  Python: "#3572A5",
  "C#": "#178600",
};

function timeAgo(dateStr) {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = Math.floor((now - then) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)}mo ago`;
  return `${Math.floor(diff / 31536000)}y ago`;
}

/* Skeleton loader card */
const SkeletonCard = () => (
  <div className="bg-[#0d0d18] border border-white/[0.06] rounded-2xl p-5 flex flex-col gap-4">
    <div className="flex items-center gap-2">
      <div className="skeleton w-5 h-5 rounded-full" />
      <div className="skeleton h-4 w-40 rounded" />
    </div>
    <div className="skeleton h-3 w-full rounded" />
    <div className="skeleton h-3 w-3/4 rounded" />
    <div className="flex gap-3 mt-auto">
      <div className="skeleton h-3 w-16 rounded" />
      <div className="skeleton h-3 w-12 rounded" />
    </div>
  </div>
);

const Projectcard = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => {
        if (!r.ok) throw new Error("fetch failed");
        return r.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        else throw new Error("bad data");
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error || repos.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        <FaGithub className="w-10 h-10 mx-auto mb-3 opacity-30" />
        <p>Could not load repositories. Check GitHub for the latest projects.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo, i) => {
        const langColor = LANG_COLORS[repo.language] ?? "#8b949e";
        return (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
              id={`project-card-${repo.id}`}
            >
              <div className="bg-[#0d0d18] border border-white/[0.06] group-hover:border-purple-700/40 rounded-2xl p-5 flex flex-col gap-3 h-full transition-all duration-300 group-hover:bg-white/[0.03] group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-purple-900/20 relative overflow-hidden">
                {/* Top-right link icon */}
                <FaExternalLinkAlt className="absolute top-4 right-4 w-3.5 h-3.5 text-gray-600 group-hover:text-purple-400 transition-colors duration-200" />

                {/* Repo name */}
                <div className="flex items-center gap-2 pr-5">
                  <FaGithub className="w-4 h-4 text-gray-500 flex-shrink-0 group-hover:text-purple-400 transition-colors" />
                  <h3 className="font-bold text-white text-sm leading-snug group-hover:text-purple-300 transition-colors line-clamp-1">
                    {repo.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 flex-1">
                  {repo.description ?? "No description available."}
                </p>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {repo.topics.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-900/20 border border-purple-800/30 text-purple-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer stats */}
                <div className="flex items-center gap-4 text-xs text-gray-500 pt-1 border-t border-white/[0.04]">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: langColor }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <FaStar className="w-3 h-3" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch className="w-3 h-3" />
                    {repo.forks}
                  </span>
                  <span className="ml-auto text-[10px]">
                    Updated {timeAgo(repo.pushedAt)}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projectcard;
