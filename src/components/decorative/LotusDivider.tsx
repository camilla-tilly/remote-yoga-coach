import { cn } from '@/lib/utils';

interface LotusDividerProps {
  className?: string;
  /** Tone: 'gold' (default) for cream sections, 'cream' for dark sections */
  tone?: 'gold' | 'cream' | 'saffron' | 'sage';
}

/**
 * Horizontal divider: tapering line, stylised lotus at the centre, tapering
 * line. Replaces the existing sage-dot dividers. Uses inline SVG so bundle
 * stays tiny; colour comes from `currentColor` (tone prop maps to a text class).
 */
const LotusDivider = ({ className, tone = 'gold' }: LotusDividerProps) => {
  const toneClass = {
    gold: 'text-dalashala-gold',
    cream: 'text-dalashala-cream',
    saffron: 'text-dalashala-saffron',
    sage: 'text-dalashala-sage',
  }[tone];

  return (
    <div className={cn('flex items-center gap-3 w-full', toneClass, className)} aria-hidden="true">
      <span
        className="flex-1 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, currentColor, transparent)',
          opacity: 0.5,
        }}
      />
      <svg
        width="36"
        height="20"
        viewBox="0 0 60 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0"
      >
        {/* Centre petal */}
        <path d="M30 4 C26 12 26 22 30 28 C34 22 34 12 30 4 Z" />
        {/* Left petals */}
        <path d="M30 16 C22 12 14 16 8 22 C16 24 24 22 30 16 Z" />
        <path d="M30 16 C24 10 16 8 8 10 C12 18 22 20 30 16 Z" opacity="0.7" />
        {/* Right petals (mirror) */}
        <path d="M30 16 C38 12 46 16 52 22 C44 24 36 22 30 16 Z" />
        <path d="M30 16 C36 10 44 8 52 10 C48 18 38 20 30 16 Z" opacity="0.7" />
        {/* Base stem */}
        <line x1="30" y1="28" x2="30" y2="32" opacity="0.6" />
      </svg>
      <span
        className="flex-1 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, currentColor, transparent)',
          opacity: 0.5,
        }}
      />
    </div>
  );
};

export default LotusDivider;
