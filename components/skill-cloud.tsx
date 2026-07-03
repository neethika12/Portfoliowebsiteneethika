"use client";

import { motion } from "framer-motion";

type SkillCloudProps = {
  title: string;
  skills: string[];
};

export function SkillCloud({ title, skills }: SkillCloudProps) {
  return (
    <article
      className="rounded-2xl p-5"
      style={{ border: "1px solid var(--border)", background: "var(--white)" }}
    >
      <h4
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: "var(--ink-3)" }}
      >
        {title}
      </h4>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="neutral-tag"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.28 }}
            whileHover={{ scale: 1.04 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </article>
  );
}
