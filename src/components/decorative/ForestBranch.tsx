import { cn } from '@/lib/utils';

interface ForestBranchProps {
  className?: string;
  /** Pine-style needled branch, or fern-style feather branch. */
  variant?: 'pine' | 'fern';
}

/**
 * Minimal pine / fern branch silhouette. Uses `currentColor`. Designed to sit
 * behind content at 8-15% opacity as ambient forest texture — replaces the
 * scattered Lucide Leaf icons in WhyYogaWithCamilla.
 */
const ForestBranch = ({ className, variant = 'pine' }: ForestBranchProps) => {
  if (variant === 'fern') {
    return (
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={cn('block', className)}
        aria-hidden="true"
      >
        {/* Central stem */}
        <path d="M60 115 C 60 90 55 70 52 45 C 50 30 50 18 54 6" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Leaflets, paired */}
        {Array.from({ length: 11 }).map((_, i) => {
          const y = 105 - i * 9;
          const size = 6 + i * 0.8;
          return (
            <g key={i} opacity={0.9 - i * 0.05}>
              <ellipse cx={60 - size * 1.1} cy={y} rx={size} ry={size * 0.4} transform={`rotate(-25 ${60 - size * 1.1} ${y})`} />
              <ellipse cx={60 + size * 1.1} cy={y} rx={size} ry={size * 0.4} transform={`rotate(25 ${60 + size * 1.1} ${y})`} />
            </g>
          );
        })}
      </svg>
    );
  }

  // pine
  return (
    <svg
      viewBox="0 0 140 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      className={cn('block', className)}
      aria-hidden="true"
    >
      {/* Main branch */}
      <path d="M10 100 C 40 85 70 70 130 20" strokeWidth="1.4" />
      {/* Needle clusters along branch */}
      {Array.from({ length: 18 }).map((_, i) => {
        const t = i / 17;
        const x = 10 + (130 - 10) * t;
        const y = 100 - (100 - 20) * Math.pow(t, 1.2);
        const len = 8 + 4 * Math.sin(i * 1.1);
        // two needles: up-left and up-right
        return (
          <g key={i} opacity={0.85}>
            <line x1={x} y1={y} x2={x - len * 0.55} y2={y - len} />
            <line x1={x} y1={y} x2={x + len * 0.45} y2={y - len * 0.9} />
            <line x1={x} y1={y} x2={x - len * 0.3} y2={y + len * 0.5} opacity="0.55" />
          </g>
        );
      })}
    </svg>
  );
};

export default ForestBranch;
