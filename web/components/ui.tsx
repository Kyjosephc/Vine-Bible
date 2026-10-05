'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { useT } from '@/lib/i18n';

type ButtonVariant = 'primary' | 'gold' | 'ghost';

const BUTTON_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-ink hover:brightness-110 font-semibold shadow-sm disabled:opacity-50 disabled:cursor-not-allowed',
  gold: 'border border-gold/60 text-ink dark:text-gold hover:bg-gold/10 disabled:opacity-50',
  ghost:
    'border border-ink/15 text-ink hover:bg-ink/5 dark:border-white/15 dark:text-parchment dark:hover:bg-white/5 disabled:opacity-50',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary', className = '', type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm transition ${BUTTON_STYLES[variant]} ${className}`}
      {...props}
    />
  );
}

export function Card({ className = '', children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`rounded-2xl border border-ink/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  children,
  action,
  className = '',
}: {
  eyebrow?: string;
  title?: string;
  children?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  const heading = title ?? children;
  return (
    <div className={`flex items-end justify-between gap-4 ${className}`}>
      <div>
        {eyebrow ? (
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">{eyebrow}</p>
        ) : null}
        <h2 className="font-display text-2xl font-semibold text-ink dark:text-parchment">{heading}</h2>
      </div>
      {action}
    </div>
  );
}

export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-xs font-medium text-ink dark:text-gold ${className}`}
    >
      {children}
    </span>
  );
}

export function ProgressBar({ value, max, className = '' }: { value: number; max: number; className?: string }) {
  const pct = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;
  return (
    <div className={`h-2 overflow-hidden rounded-full bg-ink/10 dark:bg-white/10 ${className}`}>
      <div className="h-full rounded-full bg-gold transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-ink/20 px-6 py-10 text-center dark:border-white/15">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      </div>
      <p className="font-display text-lg font-semibold text-ink dark:text-parchment">{title}</p>
      {description ? <p className="mt-1 max-w-sm text-sm text-slate-600 dark:text-slate-400">{description}</p> : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}

export function Spinner({ label }: { label?: string }) {
  const { t } = useT();
  return (
    <div className="flex items-center justify-center gap-3 py-10" role="status">
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
      <span className="text-sm text-slate-600 dark:text-slate-400">{label ?? t('loading')}</span>
    </div>
  );
}
