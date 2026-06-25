'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useMode } from './mode-context';

export function LightSwitch() {
  const { mode, toggle } = useMode();
  const isOn = mode === 'light';

  return (
    <button
      onClick={toggle}
      aria-label="Toggle perspective"
      className="group relative flex flex-col items-center gap-2 select-none"
    >
      <div
        className={`relative w-14 h-24 rounded-[10px] border-2 transition-colors duration-500 ${
          isOn ? 'bg-zinc-200 border-zinc-400' : 'bg-zinc-800 border-zinc-700'
        }`}
        style={{
          boxShadow: isOn
            ? 'inset 0 2px 6px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)'
            : 'inset 0 2px 6px rgba(0,0,0,0.6), 0 0 18px rgba(0,0,0,0.4)',
        }}
      >
        <motion.div
          className={`absolute left-1/2 -translate-x-1/2 w-9 h-10 rounded-md ${
            isOn ? 'bg-white' : 'bg-zinc-600'
          }`}
          animate={{
            top: isOn ? 6 : 38,
          }}
          transition={{ type: 'spring', stiffness: 600, damping: 30 }}
          style={{
            boxShadow: isOn
              ? '0 6px 8px rgba(0,0,0,0.2), inset 0 -2px 4px rgba(0,0,0,0.1)'
              : '0 -4px 8px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.05)',
          }}
        >
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-3 rounded-full ${
              isOn ? 'bg-zinc-300' : 'bg-zinc-700'
            }`}
          />
        </motion.div>
      </div>
      <span
        className={`text-[10px] tracking-[0.3em] uppercase font-mono transition-colors ${
          isOn ? 'text-zinc-500' : 'text-zinc-500'
        }`}
      >
        {isOn ? 'mainstream' : 'gegenteil'}
      </span>
    </button>
  );
}
