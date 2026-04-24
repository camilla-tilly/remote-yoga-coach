import { cn } from '@/lib/utils';

interface IndianBorderProps {
  className?: string;
  /** How tall the band sits (in px). Default 18. */
  height?: number;
}

/**
 * Thin repeating geometric border inspired by temple-arch / block-print motifs.
 * Renders as a full-width SVG that tiles horizontally via pattern fill. Used as
 * banding at the top or bottom of heroes and CTA sections.
 */
const IndianBorder = ({ className, height = 18 }: IndianBorderProps) => {
  return (
    <div
      className={cn('w-full pointer-events-none select-none', className)}
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 400 ${height}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <defs>
          <pattern id="indianBorderPattern" x="0" y="0" width="40" height={height} patternUnits="userSpaceOnUse">
            {/* Top + bottom rails */}
            <line x1="0" y1="1" x2="40" y2="1" opacity="0.6" />
            <line x1="0" y1={height - 1} x2="40" y2={height - 1} opacity="0.6" />
            {/* Temple-arch lobe */}
            <path
              d={`M 4 ${height - 2} L 4 ${height * 0.55} Q 4 3 10 3 L 14 3 Q 20 3 20 ${height * 0.55} Q 20 3 26 3 L 30 3 Q 36 3 36 ${height * 0.55} L 36 ${height - 2}`}
              opacity="0.85"
            />
            {/* Centre lotus bud */}
            <circle cx="20" cy={height * 0.55} r="1.2" fill="currentColor" stroke="none" />
            <circle cx="4" cy={height * 0.55} r="0.8" fill="currentColor" stroke="none" opacity="0.6" />
            <circle cx="36" cy={height * 0.55} r="0.8" fill="currentColor" stroke="none" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#indianBorderPattern)" />
      </svg>
    </div>
  );
};

export default IndianBorder;
