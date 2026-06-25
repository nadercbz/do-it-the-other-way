'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMode } from './mode-context';
import { Narrative, categoryMeta } from '@/data/narratives';

export function NarrativeCard({ narrative }: { narrative: Narrative }) {
  const { mode } = useMode();
  const data = mode === 'light' ? narrative.mainstream : narrative.contrarian;
  const meta = categoryMeta[narrative.category];

  return (
    <article
      className={`relative border p-7 transition-colors duration-700 ${
        mode === 'light'
          ? 'bg-white/70 border-zinc-200 hover:border-zinc-400'
          : 'bg-black/40 border-zinc-800 hover:border-red-900'
      }`}
    >
      <div className="flex items-center justify-between mb-5">
        <span
          className={`text-[10px] tracking-[0.25em] uppercase font-mono ${
            mode === 'light' ? 'text-zinc-500' : 'text-red-500'
          }`}
        >
          {meta.emoji} {mode === 'light' ? meta.label : meta.labelDark}
        </span>
        <span
          className={`text-[10px] font-mono ${
            mode === 'light' ? 'text-zinc-400' : 'text-zinc-600'
          }`}
        >
          {narrative.updated}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={mode + narrative.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <h3
            className={`text-2xl leading-tight font-semibold mb-4 ${
              mode === 'light'
                ? 'text-zinc-900 font-serif'
                : 'text-zinc-50 font-mono uppercase tracking-tight'
            }`}
          >
            {data.headline}
          </h3>
          <p
            className={`text-[15px] leading-relaxed mb-5 ${
              mode === 'light' ? 'text-zinc-700' : 'text-zinc-400'
            }`}
          >
            {data.body}
          </p>
          <div className="flex flex-wrap gap-2">
            {data.voices.map((voice) => (
              <span
                key={voice}
                className={`text-[10px] px-2 py-1 font-mono uppercase tracking-wider ${
                  mode === 'light'
                    ? 'bg-zinc-100 text-zinc-600'
                    : 'bg-red-950/40 text-red-400 border border-red-900/40'
                }`}
              >
                {voice}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </article>
  );
}
