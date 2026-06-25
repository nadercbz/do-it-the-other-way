'use client';

import React from 'react';
import { useMode } from './mode-context';
import { Category, categoryMeta } from '@/data/narratives';

const ALL: Category[] = ['finance', 'health', 'career', 'society'];

export function CategoryFilter({
  active,
  onChange,
}: {
  active: Category | 'all';
  onChange: (c: Category | 'all') => void;
}) {
  const { mode } = useMode();
  const options: (Category | 'all')[] = ['all', ...ALL];

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {options.map((opt) => {
        const isActive = opt === active;
        const label =
          opt === 'all'
            ? 'Alle'
            : mode === 'light'
              ? categoryMeta[opt].label
              : categoryMeta[opt].labelDark;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-4 py-2 text-xs tracking-widest uppercase font-mono border transition-all ${
              isActive
                ? mode === 'light'
                  ? 'bg-zinc-900 text-white border-zinc-900'
                  : 'bg-red-600 text-white border-red-600'
                : mode === 'light'
                  ? 'bg-transparent text-zinc-600 border-zinc-300 hover:border-zinc-500'
                  : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-red-700 hover:text-red-400'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
