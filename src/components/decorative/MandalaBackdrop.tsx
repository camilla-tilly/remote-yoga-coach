import { cn } from '@/lib/utils';
import Mandala from './Mandala';

interface MandalaBackdropProps {
  className?: string;
  /** Position preset */
  position?: 'right' | 'left' | 'center';
  /** Extra size tweak (default 'xl') */
  size?: 'lg' | 'xl' | '2xl';
}

/**
 * Large faded mandala positioned absolutely behind a hero. Drifts slowly with
 * the existing `animate-drift` keyframe. Uses low opacity so content reads
 * over it.
 */
const MandalaBackdrop = ({
  className,
  position = 'right',
  size = 'xl',
}: MandalaBackdropProps) => {
  const sizeClasses = {
    lg: 'w-[460px] h-[460px]',
    xl: 'w-[640px] h-[640px]',
    '2xl': 'w-[820px] h-[820px]',
  }[size];

  const positionClasses = {
    right: '-top-32 -right-40 md:-right-48',
    left: '-top-32 -left-40 md:-left-48',
    center: '-top-40 left-1/2 -translate-x-1/2',
  }[position];

  return (
    <div
      className={cn(
        'pointer-events-none absolute animate-drift',
        sizeClasses,
        positionClasses,
        className
      )}
      aria-hidden="true"
    >
      <Mandala className="text-dalashala-saffron/25" strokeWidth={0.8} />
    </div>
  );
};

export default MandalaBackdrop;
