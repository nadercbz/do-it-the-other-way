'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Mode = 'light' | 'dark';

interface ModeContextValue {
  mode: Mode;
  toggle: () => void;
}

const ModeContext = createContext<ModeContextValue | null>(null);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>('light');

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
      root.classList.add('contrarian');
    } else {
      root.classList.remove('dark');
      root.classList.remove('contrarian');
    }
  }, [mode]);

  const toggle = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));

  return (
    <ModeContext.Provider value={{ mode, toggle }}>{children}</ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error('useMode must be used within ModeProvider');
  return ctx;
}
