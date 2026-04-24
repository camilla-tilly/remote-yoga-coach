import { cn } from '@/lib/utils';

interface OmAccentProps {
  className?: string;
  size?: number;
  /** Show the surrounding circle ring (default true). Set false for inline glyph only. */
  ring?: boolean;
}

/**
 * Small ॐ glyph rendered via the Devanagari font, optionally wrapped in a thin
 * circle. Used as a signature mark next to the navbar logo, in the footer
 * sign-off, and as a decorative flourish on service pages.
 */
const OmAccent = ({ className, size = 28, ring = true }: OmAccentProps) => {
  const fontSize = Math.round(size * 0.62);
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center align-middle shrink-0 leading-none',
        ring && 'rounded-full border border-current',
        className
      )}
      style={{
        width: size,
        height: size,
      }}
      aria-hidden="true"
    >
      <span
        className="font-devanagari"
        style={{
          fontSize,
          lineHeight: 1,
          transform: 'translateY(1px)',
        }}
      >
        ॐ
      </span>
    </span>
  );
};

export default OmAccent;
