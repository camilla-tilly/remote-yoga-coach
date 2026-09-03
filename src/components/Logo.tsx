interface LogoProps {
  size?: number;
  className?: string;
  variant?: 'clay' | 'white' | 'outline';
  showAccent?: boolean;
  'aria-hidden'?: boolean;
}

/**
 * Remote Yoga Coach brand mark — a hand-balanced cairn: three flat, gently
 * offset stones stacked into a warm clay tile. Calm, grounded, "in balance",
 * with no lifestyle or spiritual iconography. Reusable across Navbar, Footer,
 * and anywhere the brand mark helps anchor the page.
 */
const Logo = ({
  size = 40,
  className = '',
  variant = 'clay',
  ...rest
}: LogoProps) => {
  const palette = {
    // Warm clay tile, cream stones.
    clay: { bg: '#8f5033', stroke: 'none', stones: ['#FFFFFF', '#F5EFE7', '#FFFFFF'] as const },
    // Light tile, earth-tone stones.
    white: { bg: '#FFFFFF', stroke: 'none', stones: ['#8f5033', '#A98D78', '#3B322B'] as const },
    // Transparent tile with a soft sage edge, earth-tone stones.
    outline: { bg: 'transparent', stroke: '#E9E0D4', stones: ['#8f5033', '#A98D78', '#3B322B'] as const },
  }[variant];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...rest}
    >
      <rect
        x={variant === 'outline' ? 0.75 : 0}
        y={variant === 'outline' ? 0.75 : 0}
        width={variant === 'outline' ? 62.5 : 64}
        height={variant === 'outline' ? 62.5 : 64}
        rx="16"
        fill={palette.bg}
        stroke={palette.stroke}
        strokeWidth={variant === 'outline' ? 1.5 : 0}
      />
      {/* Bottom stone (widest, the base) */}
      <ellipse cx="32" cy="44" rx="15" ry="5.2" fill={palette.stones[0]} />
      {/* Middle stone, nudged left */}
      <ellipse cx="29.5" cy="33" rx="11" ry="4.5" fill={palette.stones[1]} />
      {/* Top stone, nudged right */}
      <ellipse cx="34.5" cy="23" rx="7.5" ry="3.8" fill={palette.stones[2]} opacity={variant === 'clay' ? 0.9 : 1} />
    </svg>
  );
};

export default Logo;
