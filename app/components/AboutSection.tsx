"use client";

import { motion } from "framer-motion";
import TechStackCarousel from "./TechStackCarousel";
import { techByCategory } from "../data/techStack";

const skillCategories = [
  {
    category: "Frontend",
    key: "frontend" as const,
    description: "Interfaces, design systems, and client-side performance.",
  },
  {
    category: "Backend & Full-Stack",
    key: "backend" as const,
    description: "APIs, services, databases, and application architecture.",
  },
  {
    category: "Data Engineering & Cloud",
    key: "data" as const,
    description: "Pipelines, warehousing, orchestration, and analytics.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Full-stack and data engineering developer from The Bahamas, building
            scalable web applications and production data platforms that solve
            real business problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Based in The Bahamas, I build digital products end to end—from
                  user-facing apps to the data infrastructure behind them. What
                  started as curiosity about how software works grew into a
                  focus on reliable, maintainable systems.
                </p>
                <p>
                  I work across the full stack and data layer: React and Next.js
                  frontends, Laravel and Python backends, and cloud-native data
                  pipelines with Snowflake, Airflow, and dbt. I care about clear
                  architecture, strong typing, and shipping work that teams can
                  own long term.
                </p>
                <p>
                  Whether I am designing an API, tuning a warehouse model, or
                  polishing a UI, I prioritize performance, observability, and
                  a smooth experience for both users and operators.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">What I Value</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Clean Code</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Scalability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Data Quality</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Innovation</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3">Currently Focused On</h4>
              <ul className="space-y-2 text-gray-400">
                {[
                  "End-to-end data platform architecture",
                  "Advanced Next.js & React patterns",
                  "Real-time analytics & visualization",
                  "Cloud-native orchestration workflows",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-blue-400 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <TechStackCarousel
            title="Tools & Technologies"
            subtitle="A rotating showcase of languages, frameworks, and platforms I use day to day."
            className="text-center [&_h3]:text-2xl [&_p]:mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-4">
            Technical Skills
          </h3>
          <p className="text-center text-gray-400 text-sm max-w-2xl mx-auto mb-12">
            Grouped by discipline—no arbitrary scores, just the stacks I reach
            for on real projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((group, groupIndex) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
              >
                <h4 className="text-lg font-semibold mb-2 text-center">
                  {group.category}
                </h4>
                <p className="text-gray-500 text-sm text-center mb-6">
                  {group.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {(group.key === "data"
                    ? [...techByCategory.data, ...techByCategory.devops]
                    : techByCategory[group.key]
                  ).map((tech) => (
                    <span
                      key={tech.slug}
                      className="px-3 py-1.5 text-sm bg-gray-800/80 text-gray-300 rounded-lg border border-gray-700"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
