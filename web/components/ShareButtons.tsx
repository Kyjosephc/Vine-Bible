'use client';

import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  text: string;
}

/**
 * Share buttons: copy to clipboard, X/Twitter, Facebook, WhatsApp,
 * and the native share sheet when available.
 */
export function ShareButtons({ title, text }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState<string | null>(null);

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${title}\n${text}`;
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(pageUrl);
  const canNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  async function copyToClipboard() {
    setShareError(null);
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(`${shareText}\n${pageUrl}`);
      } else {
        const ta = document.createElement('textarea');
        ta.value = `${shareText}\n${pageUrl}`;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setShareError('Could not copy. Please copy the link manually.');
    }
  }

  async function nativeShare() {
    setShareError(null);
    try {
      await navigator.share({ title, text: shareText, url: pageUrl });
    } catch (err) {
      // AbortError = user dismissed the sheet; anything else is worth noting.
      if (err instanceof Error && err.name !== 'AbortError') {
        setShareError('Sharing was not available on this device.');
      }
    }
  }

  const btn =
    'inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#C9A227]/30 bg-white/5 px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]';

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {canNativeShare && (
          <button type="button" className={btn} onClick={nativeShare} aria-label="Share">
            <ShareIcon /> Share
          </button>
        )}
        <button type="button" className={btn} onClick={copyToClipboard} aria-label="Copy link">
          <CopyIcon /> {copied ? 'Copied!' : 'Copy'}
        </button>
        <a
          className={btn}
          href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
        >
          <XIcon /> X
        </a>
        <a
          className={btn}
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >
          <FacebookIcon /> Facebook
        </a>
        <a
          className={btn}
          href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
        >
          <WhatsAppIcon /> WhatsApp
        </a>
      </div>
      {shareError && <p className="mt-2 text-sm text-red-300">{shareError}</p>}
    </div>
  );
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.25 6.93 6.06-6.93Zm-1.29 19.5h2.04L6.48 3.24H4.3l13.31 17.41Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.85 9.85 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.89 9.88m8.42-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.41" />
    </svg>
  );
}
