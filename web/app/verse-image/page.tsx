'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { FALLBACK_PASSAGES } from '@/content/fallback-passages';
import { useT } from '@/lib/i18n';
import { Button, Card, SectionTitle } from '@/components/ui';

interface VersePick {
  ref: string;
  text: string;
}

function useTr() {
  const { t } = useT();
  // i18n keys are plain English sentences: t() returns the key itself when
  // untranslated, so the UI degrades gracefully to English.
  return (key: string, fallback?: string): string => t(key, fallback);
}

/** Tolerate whatever shape FALLBACK_PASSAGES entries have. */
function normalizePassage(p: unknown): VersePick | null {
  if (typeof p !== 'object' || p === null) return null;
  const o = p as Record<string, unknown>;
  const ref =
    typeof o.ref === 'string' ? o.ref : typeof o.reference === 'string' ? o.reference : '';
  const text =
    typeof o.text === 'string' ? o.text : typeof o.verse === 'string' ? o.verse : '';
  if (!ref.trim() || !text.trim()) return null;
  return { ref: ref.trim(), text: text.trim() };
}

type ThemeKey = 'midnight' | 'parchment' | 'gold';

const THEMES: Record<ThemeKey, { bg: string; text: string; accent: string; name: string }> = {
  midnight: { bg: '#101828', text: '#F7F3E8', accent: '#C9A227', name: 'Midnight' },
  parchment: { bg: '#F3EBD3', text: '#1D2939', accent: '#8a6d1f', name: 'Parchment' },
  gold: { bg: '#C9A227', text: '#101828', accent: '#101828', name: 'Gold' },
};

const SIZE = 1080;

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawVerse(canvas: HTMLCanvasElement, verse: VersePick, themeKey: ThemeKey): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const th = THEMES[themeKey];
  canvas.width = SIZE;
  canvas.height = SIZE;

  ctx.fillStyle = th.bg;
  ctx.fillRect(0, 0, SIZE, SIZE);

  // Double gold border
  ctx.strokeStyle = th.accent;
  ctx.lineWidth = 6;
  ctx.strokeRect(56, 56, SIZE - 112, SIZE - 112);
  ctx.lineWidth = 2;
  ctx.strokeRect(80, 80, SIZE - 160, SIZE - 160);

  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';

  // Reference at top
  ctx.fillStyle = th.accent;
  ctx.font = '600 46px Georgia, "Times New Roman", serif';
  ctx.fillText(verse.ref.toUpperCase(), SIZE / 2, 220);

  // Divider
  ctx.fillRect(SIZE / 2 - 60, 252, 120, 3);

  // Verse text, auto-shrinking to fit
  const maxWidth = SIZE - 260;
  let fontSize = 76;
  let lines: string[] = [];
  for (;;) {
    ctx.font = `italic 400 ${fontSize}px Georgia, "Times New Roman", serif`;
    lines = wrapText(ctx, `\u201C${verse.text}\u201D`, maxWidth);
    const blockHeight = lines.length * fontSize * 1.4;
    if ((blockHeight <= 560 && fontSize <= 76) || fontSize <= 30) break;
    fontSize -= 4;
  }
  ctx.fillStyle = th.text;
  const lineHeight = fontSize * 1.4;
  const startY = SIZE / 2 - ((lines.length - 1) * lineHeight) / 2 + 60;
  lines.forEach((line, i) => {
    ctx.fillText(line, SIZE / 2, startY + i * lineHeight);
  });

  // Footer wordmark
  ctx.fillStyle = th.accent;
  ctx.font = '600 30px Georgia, "Times New Roman", serif';
  ctx.fillText('L U M E N   B I B L E', SIZE / 2, SIZE - 130);
}

export default function VerseImagePage() {
  const tr = useTr();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const passages = useMemo<VersePick[]>(() => {
    // FALLBACK_PASSAGES is a Record<string, { ref, text }>; tolerate arrays too.
    const raw: unknown = FALLBACK_PASSAGES;
    const list: unknown[] = Array.isArray(raw)
      ? raw
      : typeof raw === 'object' && raw !== null
        ? Object.values(raw)
        : [];
    return list.map(normalizePassage).filter((p): p is VersePick => p !== null);
  }, []);

  const [mode, setMode] = useState<'passage' | 'custom'>(passages.length > 0 ? 'passage' : 'custom');
  const [passageIdx, setPassageIdx] = useState(0);
  const [customRef, setCustomRef] = useState('');
  const [customText, setCustomText] = useState('');
  const [theme, setTheme] = useState<ThemeKey>('midnight');
  const [status, setStatus] = useState<string | null>(null);

  const verse: VersePick =
    mode === 'custom' || passages.length === 0
      ? { ref: customRef.trim() || tr('Your Verse'), text: customText.trim() || tr('Type or paste the verse text…') }
      : passages[Math.min(passageIdx, passages.length - 1)];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) drawVerse(canvas, verse, theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verse.ref, verse.text, theme]);

  function download() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `verse-${verse.ref.replace(/[^a-z0-9]+/gi, '-').toLowerCase() || 'image'}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  async function share() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setStatus(null);
    try {
      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
      if (!blob) {
        setStatus(tr('Could not create the image. Try downloading instead.'));
        return;
      }
      const file = new File([blob], 'verse.png', { type: 'image/png' });
      if (typeof navigator.share === 'function' && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: verse.ref, text: verse.text });
      } else {
        download();
        setStatus(tr('Sharing is not available here — the image was downloaded instead.'));
      }
    } catch (err) {
      if (!(err instanceof Error && err.name === 'AbortError')) {
        setStatus(tr('Could not share the image. Try downloading instead.'));
      }
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <SectionTitle>{tr('Verse Images')}</SectionTitle>
      <p className="mt-2 text-sm text-slate-400">
        {tr('Turn a verse into a beautiful square image for sharing.')}
      </p>

      <Card className="mt-4 p-4">
        <div className="flex gap-2">
          {passages.length > 0 && (
            <button
              type="button"
              onClick={() => setMode('passage')}
              className={`rounded-xl px-3 py-2 text-sm font-medium ${
                mode === 'passage' ? 'bg-[#C9A227]/20 text-[#C9A227]' : 'bg-white/5 text-slate-300'
              }`}
            >
              {tr('Pick a verse')}
            </button>
          )}
          <button
            type="button"
            onClick={() => setMode('custom')}
            className={`rounded-xl px-3 py-2 text-sm font-medium ${
              mode === 'custom' ? 'bg-[#C9A227]/20 text-[#C9A227]' : 'bg-white/5 text-slate-300'
            }`}
          >
            {tr('Custom')}
          </button>
        </div>

        {mode === 'passage' && passages.length > 0 ? (
          <label className="mt-3 block text-sm text-slate-200">
            {tr('Verse')}
            <select
              className="mt-1 w-full rounded-xl border border-white/10 bg-[#101828] px-3 py-2 text-slate-100"
              value={passageIdx}
              onChange={(e) => setPassageIdx(Number(e.target.value))}
            >
              {passages.map((p, i) => (
                <option key={i} value={i}>
                  {p.ref}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <div className="mt-3 space-y-3">
            <label className="block text-sm text-slate-200">
              {tr('Reference')}
              <input
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-500"
                value={customRef}
                onChange={(e) => setCustomRef(e.target.value)}
                placeholder={tr('e.g. Philippians 4:13')}
              />
            </label>
            <label className="block text-sm text-slate-200">
              {tr('Verse text')}
              <textarea
                className="mt-1 min-h-24 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-500"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder={tr('Paste the verse text…')}
              />
            </label>
          </div>
        )}

        <div className="mt-4">
          <p className="text-sm font-medium text-slate-200">{tr('Style')}</p>
          <div className="mt-2 flex gap-2">
            {(Object.keys(THEMES) as ThemeKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setTheme(key)}
                className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm ${
                  theme === key ? 'border-[#C9A227] text-[#C9A227]' : 'border-white/10 text-slate-300'
                }`}
                aria-pressed={theme === key}
              >
                <span
                  className="inline-block h-5 w-5 rounded-full border border-white/20"
                  style={{ backgroundColor: THEMES[key].bg }}
                />
                {THEMES[key].name}
              </button>
            ))}
          </div>
        </div>
      </Card>

      <Card className="mt-4 p-4">
        <canvas ref={canvasRef} className="mx-auto w-full max-w-[420px] rounded-2xl" aria-label={tr('Verse image preview')} />
        <div className="mt-4 flex flex-wrap gap-2">
          <Button onClick={download}>{tr('Download PNG')}</Button>
          <Button onClick={share}>{tr('Share')}</Button>
        </div>
        {status && <p className="mt-2 text-sm text-slate-400">{status}</p>}
      </Card>
    </main>
  );
}
