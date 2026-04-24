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
