import { Fragment, ReactNode } from 'react';

/**
 * Splits a string on ampersands and wraps each `&` in a span with
 * the `.amp` class, which renders the glyph at reduced size/weight
 * so it stops dominating display-size Fraunces headings.
 */
export const softenAmp = (text: string): ReactNode => {
  if (!text.includes('&')) return text;
  const parts = text.split('&');
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <span className="amp">&amp;</span>}
    </Fragment>
  ));
};

/**
 * Glues the last word of `text` to the previous word with a non-breaking
 * space (U+00A0). Prevents orphan / widow lines where a single trailing
 * word drops to its own line.
 */
export const noWidow = (text: string): string => {
  const trimmed = text.trimEnd();
  const trailing = text.slice(trimmed.length);
  const lastSpace = trimmed.lastIndexOf(' ');
  if (lastSpace === -1) return text;
  return trimmed.slice(0, lastSpace) + ' ' + trimmed.slice(lastSpace + 1) + trailing;
};
