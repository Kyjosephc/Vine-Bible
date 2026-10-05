/**
 * Text-to-speech helpers built on window.speechSynthesis.
 *
 * This module is 'use client'-safe: it never touches browser globals at
 * module scope, so it can be imported from server components too. Every
 * function no-ops (or returns a falsy value) when speechSynthesis is
 * unavailable.
 */

export interface SpeakOptions {
  /** Speech rate, 0.5 – 2. Defaults to the browser default (1). */
  rate?: number;
  /** Called when the final queued utterance finishes. */
  onend?: () => void;
}

let sleepTimerId: ReturnType<typeof setTimeout> | null = null;

function synthesisAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

/** Split text into ~200-char chunks on word boundaries for queueing. */
function chunkText(text: string, size = 200): string[] {
  const chunks: string[] = [];
  let rest = text.replace(/\s+/g, ' ').trim();
  while (rest.length > size) {
    let cut = rest.lastIndexOf(' ', size);
    if (cut <= size * 0.4) cut = size; // avoid tiny first chunks
    chunks.push(rest.slice(0, cut).trim());
    rest = rest.slice(cut).trim();
  }
  if (rest.length > 0) chunks.push(rest);
  return chunks;
}

/** Speak text aloud, chunked into queued utterances. Cancels any current speech first. */
export function speak(text: string, opts: SpeakOptions = {}): void {
  if (!synthesisAvailable()) return;
  const chunks = chunkText(text);
  if (chunks.length === 0) return;
  stopSpeaking();
  chunks.forEach((chunk, i) => {
    const utterance = new SpeechSynthesisUtterance(chunk);
    if (typeof opts.rate === 'number' && opts.rate > 0) utterance.rate = opts.rate;
    if (i === chunks.length - 1 && opts.onend) {
      utterance.onend = () => opts.onend?.();
    }
    window.speechSynthesis.speak(utterance);
  });
}

/** Stop any current or queued speech. */
export function stopSpeaking(): void {
  if (!synthesisAvailable()) return;
  window.speechSynthesis.cancel();
}

/** Whether speech is currently playing or queued. */
export function isSpeaking(): boolean {
  if (!synthesisAvailable()) return false;
  return window.speechSynthesis.speaking || window.speechSynthesis.pending;
}

function clearSleepTimer(): void {
  if (sleepTimerId !== null) {
    clearTimeout(sleepTimerId);
    sleepTimerId = null;
  }
}

/**
 * Stop speech after `minutes` and call onTimeout. Returns a cancel function.
 * Setting a new timer replaces any existing one.
 */
export function setSleepTimer(minutes: number, onTimeout: () => void): () => void {
  clearSleepTimer();
  if (typeof window === 'undefined') return () => {};
  const id = setTimeout(() => {
    sleepTimerId = null;
    stopSpeaking();
    onTimeout();
  }, Math.max(0, minutes) * 60_000);
  sleepTimerId = id;
  return () => {
    clearTimeout(id);
    if (sleepTimerId === id) sleepTimerId = null;
  };
}
