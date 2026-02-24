"use client";

import { motion } from "framer-motion";

type SkillCloudProps = {
  title: string;
  skills: string[];
};

export function SkillCloud({ title, skills }: SkillCloudProps) {
  return (
    <article className="glass-card rounded-2xl p-5">
      <h4 className="text-sm font-semibold tracking-wide text-slate-100">{title}</h4>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-cyan-100"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </article>
  );
}
