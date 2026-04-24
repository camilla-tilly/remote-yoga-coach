import { cn } from '@/lib/utils';

interface MandalaProps {
  className?: string;
  variant?: 'eight' | 'twelve';
  strokeWidth?: number;
}

/**
 * Thin-stroke geometric mandala. Uses `currentColor` so it inherits whatever
 * text colour is applied (e.g. `text-dalashala-gold/25`). Two variants: an
 * 8-petal and a denser 12-petal rosette.
 */
const Mandala = ({ className, variant = 'twelve', strokeWidth = 1 }: MandalaProps) => {
  const petals = variant === 'eight' ? 8 : 12;
  const ringPetal = (radius: number, size: number, rotationOffset = 0) => {
    const arr = [];
    for (let i = 0; i < petals; i++) {
      const angle = (360 / petals) * i + rotationOffset;
      arr.push(
        <ellipse
          key={`${radius}-${i}`}
          cx="100"
          cy={100 - radius}
          rx={size * 0.4}
          ry={size}
          transform={`rotate(${angle} 100 100)`}
        />
      );
    }
    return arr;
  };

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('block', className)}
      aria-hidden="true"
    >
      {/* Outer concentric rings */}
      <circle cx="100" cy="100" r="94" />
      <circle cx="100" cy="100" r="82" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="68" />
      <circle cx="100" cy="100" r="46" />
      <circle cx="100" cy="100" r="26" />
      <circle cx="100" cy="100" r="6" />

      {/* Outer petal ring */}
      {ringPetal(76, 14)}
      {/* Inner petal ring (offset) */}
      {ringPetal(54, 10, 180 / petals)}

      {/* Radial spokes */}
      {Array.from({ length: petals }).map((_, i) => (
        <line
          key={`spoke-${i}`}
          x1="100"
          y1="100"
          x2="100"
          y2="6"
          transform={`rotate(${(360 / petals) * i} 100 100)`}
          opacity="0.55"
        />
      ))}

      {/* Centre star (square rotated 45) */}
      <rect x="88" y="88" width="24" height="24" transform="rotate(45 100 100)" />
    </svg>
  );
};

export default Mandala;
