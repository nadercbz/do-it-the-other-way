'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EtherealShadow } from '@/components/ui/etheral-shadow';
import { LightSwitch } from '@/components/light-switch';
import { NarrativeCard } from '@/components/narrative-card';
import { CategoryFilter } from '@/components/category-filter';
import { useMode } from '@/components/mode-context';
import { narratives, Category } from '@/data/narratives';

function HeroContent() {
  const { mode } = useMode();
  const isLight = mode === 'light';

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center px-6"
      >
        <div
          className={`text-[10px] tracking-[0.4em] uppercase font-mono mb-6 ${
            isLight ? 'text-zinc-500' : 'text-red-500'
          }`}
        >
          {isLight ? '// das narrativ der masse' : '// das gegenteil'}
        </div>
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6 ${
            isLight
              ? 'font-serif italic text-zinc-900'
              : 'font-mono uppercase font-bold text-zinc-50'
          }`}
        >
          {isLight ? (
            <>
              Was alle <br /> denken.
            </>
          ) : (
            <>
              Do it the <br />
              <span className="text-red-500">other way.</span>
            </>
          )}
        </h1>
        <p
          className={`max-w-xl mx-auto text-base md:text-lg ${
            isLight ? 'text-zinc-600' : 'text-zinc-400 font-mono'
          }`}
        >
          {isLight
            ? 'Tagesschau, Spiegel, FAZ. Was Medien, Eltern und die Mehrheit dir sagen, wie du leben sollst.'
            : 'Die Stimmen, die niemand hören will. Drück den Schalter und sieh, was die Kontrarian Welt dazu sagt.'}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

function Hint() {
  const { mode } = useMode();
  return (
    <motion.div
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 2.5, repeat: Infinity }}
      className={`text-[10px] font-mono tracking-[0.3em] uppercase ${
        mode === 'light' ? 'text-zinc-500' : 'text-zinc-500'
      }`}
    >
      ↓ schalter umlegen
    </motion.div>
  );
}

export default function Home() {
  const { mode } = useMode();
  const [category, setCategory] = useState<Category | 'all'>('all');

  const filtered = useMemo(
    () => (category === 'all' ? narratives : narratives.filter((n) => n.category === category)),
    [category]
  );

  const isLight = mode === 'light';
  const shadowColor = isLight ? 'rgba(180, 180, 180, 1)' : 'rgba(220, 38, 38, 0.9)';

  return (
    <div className="relative flex-1 w-full">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <EtherealShadow
          color={shadowColor}
          animation={{ scale: 75, speed: 80 }}
          noise={{ opacity: isLight ? 0.4 : 0.8, scale: 1.2 }}
          sizing="fill"
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start p-6 md:p-8">
        <div
          className={`text-xs font-mono tracking-[0.3em] uppercase transition-colors ${
            isLight ? 'text-zinc-700' : 'text-zinc-300'
          }`}
        >
          do_it_the_other_way
        </div>
        <LightSwitch />
      </header>

      <main className="relative flex flex-col">
        <section className="min-h-screen flex flex-col items-center justify-center pt-20">
          <HeroContent />
          <div className="mt-20">
            <Hint />
          </div>
        </section>

        <section className="px-6 md:px-10 py-20 max-w-6xl mx-auto w-full">
          <div className="mb-12 flex flex-col items-center gap-6">
            <div
              className={`text-[10px] tracking-[0.4em] uppercase font-mono ${
                isLight ? 'text-zinc-500' : 'text-red-500'
              }`}
            >
              {filtered.length} narrative · {isLight ? 'mainstream view' : 'contrarian view'}
            </div>
            <CategoryFilter active={category} onChange={setCategory} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((n) => (
              <NarrativeCard key={n.id} narrative={n} />
            ))}
          </div>
        </section>

        <footer
          className={`px-6 py-12 text-center text-[10px] font-mono tracking-[0.3em] uppercase ${
            isLight ? 'text-zinc-500' : 'text-zinc-600'
          }`}
        >
          built by nader · do the opposite · stand out
        </footer>
      </main>
    </div>
  );
}
