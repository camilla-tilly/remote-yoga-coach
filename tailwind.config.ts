
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Yoga with Camilla palette — Forest Yogi theme (warm olive + sage greens
				// lifted by saffron). Legacy token names are kept as semantic aliases so
				// existing markup (bg-dalashala-beige, text-dalashala-darkBrown, etc.)
				// remains valid; the hex values just shift to the new palette.
				dalashala: {
					// Legacy names (remapped to forest palette)
					beige: '#F5EFDE',       // Warm cream (primary bg)
					lightBeige: '#FBF6E8',  // Lighter cream for card fills
					darkBrown: '#2F4A34',   // Forest deep (primary text)
					mediumBrown: '#6F7F4A', // Warm olive (was Olive Grove)
					tan: '#B8B58C',         // Soft meadow
					// New semantic names
					cream: '#F5EFDE',
					creamLight: '#FBF6E8',
					creamDeep: '#EBE1C4',
					earth: '#2F4A34',       // Forest deep
					earthSoft: '#47633F',   // Fern (secondary headings)
					olive: '#6F7F4A',       // Warm olive
					oliveLight: '#93A066',
					meadow: '#B8B58C',
					meadowLight: '#D2CEA8',
					sage: '#9AB19E',
					sageLight: '#C7D3C0',
					// Saffron / marigold accent + gold accent
					saffron: '#E39B35',
					saffronDeep: '#B8741F',
					saffronLight: '#F4D19A',
					gold: '#B8903A',
				}
			},
			fontFamily: {
				'cinzel-decorative': ['"Cinzel Decorative"', 'serif'],
				'cinzel': ['Cinzel', 'serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
				'eb-garamond': ['"EB Garamond"', 'serif'],
				'devanagari': ['"Tiro Devanagari Hindi"', '"Noto Serif Devanagari"', 'serif'],
			},
			boxShadow: {
				'soft': '0 4px 20px -4px rgba(47, 74, 52, 0.08), 0 2px 6px -2px rgba(47, 74, 52, 0.06)',
				'card': '0 10px 30px -10px rgba(47, 74, 52, 0.18), 0 4px 10px -4px rgba(47, 74, 52, 0.08)',
				'card-hover': '0 20px 40px -12px rgba(47, 74, 52, 0.25), 0 8px 16px -8px rgba(111, 127, 74, 0.15)',
				'inset-soft': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 0 rgba(47, 74, 52, 0.05)',
				'earth-glow': '0 0 0 1px rgba(184, 181, 140, 0.3), 0 6px 24px -8px rgba(47, 74, 52, 0.25)',
				'saffron-glow': '0 0 0 1px rgba(227, 155, 53, 0.35), 0 10px 28px -10px rgba(184, 116, 31, 0.35)',
			},
			backgroundImage: {
				'cream-gradient': 'linear-gradient(180deg, #FBF6E8 0%, #F5EFDE 50%, #EBE1C4 100%)',
				'cream-radial': 'radial-gradient(ellipse at top, #FBF6E8 0%, #F5EFDE 45%, #EBE1C4 100%)',
				'sage-gradient': 'linear-gradient(135deg, #C7D3C0 0%, #9AB19E 100%)',
				'olive-gradient': 'linear-gradient(135deg, #93A066 0%, #6F7F4A 100%)',
				// earth-gradient now renders as forest-gradient (legacy name kept so
				// existing markup using bg-earth-gradient picks up the new colours)
				'earth-gradient': 'linear-gradient(135deg, #47633F 0%, #2F4A34 100%)',
				'forest-gradient': 'linear-gradient(135deg, #47633F 0%, #2F4A34 100%)',
				'forest-deep-gradient': 'linear-gradient(160deg, #2F4A34 0%, #1F3524 100%)',
				'sage-fade': 'linear-gradient(180deg, rgba(154, 177, 158, 0) 0%, rgba(154, 177, 158, 0.22) 100%)',
				'saffron-glow': 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(227, 155, 53, 0.22) 0%, rgba(227, 155, 53, 0) 70%)',
				'saffron-gradient': 'linear-gradient(135deg, #E39B35 0%, #B8741F 100%)',
				'meadow-fade': 'linear-gradient(180deg, rgba(184, 181, 140, 0) 0%, rgba(184, 181, 140, 0.18) 100%)',
				'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.18 0 0 0 0 0.29 0 0 0 0 0.20 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				},
				'drift': {
					'0%, 100%': {
						transform: 'translate(0, 0) scale(1)'
					},
					'33%': {
						transform: 'translate(10px, -12px) scale(1.04)'
					},
					'66%': {
						transform: 'translate(-8px, 8px) scale(0.98)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.7s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'drift': 'drift 14s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
