'use client';

import { useEffect } from 'react';

export const TEXT_SCALE_KEY = 'halo-text-scale';

/** Available text-size steps (root font-size). 'default' = 100%. */
export const TEXT_SCALES = [
  { id: 'small', label: 'Small', fontSize: '87.5%' },
  { id: 'default', label: 'Default', fontSize: '' },
  { id: 'large', label: 'Large', fontSize: '112.5%' },
  { id: 'x-large', label: 'Extra large', fontSize: '125%' },
] as const;

export type TextScaleId = (typeof TEXT_SCALES)[number]['id'];

/** Apply a text scale immediately (also persisted by the caller). */
export function applyTextScale(id: TextScaleId): void {
  try {
    const scale = TEXT_SCALES.find((s) => s.id === id);
    if (!scale) return;
    document.documentElement.style.fontSize = scale.fontSize;
  } catch {
    // document unavailable (SSR) — ignore
  }
}

export function loadTextScale(): TextScaleId {
  try {
    const stored = window.localStorage.getItem(TEXT_SCALE_KEY);
    if (TEXT_SCALES.some((s) => s.id === stored)) return stored as TextScaleId;
  } catch {
    // ignore
  }
  return 'default';
}

/**
 * Applies the persisted text size on load. Because Tailwind sizes are rem-
 * based, scaling the root font size scales the whole app.
 */
export default function TextScale() {
  useEffect(() => {
    applyTextScale(loadTextScale());
  }, []);
  return null;
}
