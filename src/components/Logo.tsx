interface LogoProps {
  size?: number;
  className?: string;
  variant?: 'pine' | 'white' | 'outline';
  showAccent?: boolean;
  'aria-hidden'?: boolean;
}

/**
 * Om brand mark — mirrors the favicon design (rounded pine square,
 * white Om glyph, optional honey accent bar). Reusable across Navbar,
 * Footer, and anywhere the brand mark helps anchor the page.
 */
const Logo = ({
  size = 40,
  className = '',
  variant = 'pine',
  showAccent = true,
  ...rest
}: LogoProps) => {
  const palette = {
    pine: { bg: '#2D3F2F', fg: '#FFFFFF', accent: '#C89553' },
    white: { bg: '#FFFFFF', fg: '#2D3F2F', accent: '#C89553' },
    outline: { bg: 'transparent', fg: '#2D3F2F', accent: '#C89553' },
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
        rx="14"
        fill={palette.bg}
        stroke={variant === 'outline' ? palette.fg : 'none'}
        strokeWidth={variant === 'outline' ? 1.5 : 0}
      />
      <text
        x="32"
        y="46"
        textAnchor="middle"
        fontSize="42"
        fontFamily="'Noto Sans Devanagari', 'Tiro Devanagari Hindi', 'Segoe UI', 'Apple Color Emoji', system-ui, serif"
        fill={palette.fg}
      >
        ॐ
      </text>
      {showAccent && (
        <rect x="26" y="55" width="12" height="2" rx="1" fill={palette.accent} />
      )}
    </svg>
  );
};

export default Logo;
