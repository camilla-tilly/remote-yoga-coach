
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
				// Yoga with Camilla palette — Clean Scandi / fresh pine needles theme.
				// White backgrounds, pine + eucalyptus greens, minimal accents.
				// Legacy token names remain as aliases so existing markup works;
				// their values shift to the new Scandi palette.
				dalashala: {
					// Legacy names (remapped to Scandi pine)
					beige: '#FFFFFF',       // Pure white (primary bg)
					lightBeige: '#FAFAF7',  // Barely-off-white for card fills
					darkBrown: '#2D3F2F',   // Pine deep (primary text)
					mediumBrown: '#5D7A60', // Eucalyptus mid (links, buttons)
					tan: '#C7D3C0',         // Pale fresh sage (borders)
					// New semantic names
					cream: '#FFFFFF',
					creamLight: '#FAFAF7',
					creamDeep: '#F0F2EC',   // Palest sage wash for contrast bands
					earth: '#2D3F2F',       // Pine deep
					earthSoft: '#4A6B4E',   // Fresh pine (secondary headings)
					olive: '#5D7A60',       // Eucalyptus
					oliveLight: '#8AA48E',  // Mossy mint (hover)
					meadow: '#C7D3C0',
					meadowLight: '#E1E7DC',
					sage: '#9EB39F',
					sageLight: '#DCE4D6',
					// Honey / golden hour accent — warm amber gold inspired by
					// Camilla's Golden Hour morning series. Used sparingly for
					// emphasis: tags, arrows, highlights. Restrained to avoid
					// the saturated saffron feel of the earlier direction.
					honey: '#C89553',       // Warm honey
					honeyDeep: '#A07430',   // Deeper amber (hover)
					honeyLight: '#F1E4C8',  // Pale honey wash (tag fills, subtle backgrounds)
					// Legacy saffron/gold aliases → now point at honey so any
					// stray reference renders warm-gold on-palette.
					saffron: '#C89553',     // was eucalyptus → now honey
					saffronDeep: '#A07430', // was pine deep → now honey deep
					saffronLight: '#F1E4C8',// was pale sage → now honey light
					gold: '#C89553',        // was mossy mint → now honey
				}
			},
			fontFamily: {
				// New Scandi pairing: Cormorant Garamond (display) + Inter (body/UI).
				// Legacy keys kept so existing markup picks up the new fonts without rewrites.
				'cormorant': ['"Cormorant Garamond"', 'Georgia', 'serif'],
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'cinzel-decorative': ['"Cormorant Garamond"', 'Georgia', 'serif'],
				'cinzel': ['"Cormorant Garamond"', 'Georgia', 'serif'],
				'montserrat': ['Inter', 'system-ui', 'sans-serif'],
				'eb-garamond': ['"Cormorant Garamond"', 'Georgia', 'serif'],
			},
			boxShadow: {
				'soft': '0 2px 12px -2px rgba(45, 63, 47, 0.05), 0 1px 3px -1px rgba(45, 63, 47, 0.04)',
				'card': '0 6px 20px -6px rgba(45, 63, 47, 0.08), 0 2px 6px -2px rgba(45, 63, 47, 0.05)',
				'card-hover': '0 12px 28px -10px rgba(45, 63, 47, 0.15), 0 4px 10px -4px rgba(93, 122, 96, 0.08)',
				'inset-soft': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 0 rgba(45, 63, 47, 0.04)',
				'hairline': '0 0 0 1px rgba(199, 211, 192, 0.6)',
				// Legacy aliases so existing class names keep rendering
				'earth-glow': '0 0 0 1px rgba(199, 211, 192, 0.5), 0 4px 16px -6px rgba(45, 63, 47, 0.12)',
				'saffron-glow': '0 0 0 1px rgba(138, 164, 142, 0.4), 0 6px 20px -8px rgba(45, 63, 47, 0.15)',
			},
			backgroundImage: {
				// Clean, near-white washes. No warm cream.
				'cream-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FAFAF7 50%, #F0F2EC 100%)',
				'cream-radial': 'radial-gradient(ellipse at top, #FFFFFF 0%, #FAFAF7 60%, #F0F2EC 100%)',
				'sage-gradient': 'linear-gradient(135deg, #DCE4D6 0%, #9EB39F 100%)',
				'olive-gradient': 'linear-gradient(135deg, #8AA48E 0%, #5D7A60 100%)',
				// earth-gradient / forest-gradient: solid deep pine for dark sections
				'earth-gradient': 'linear-gradient(135deg, #4A6B4E 0%, #2D3F2F 100%)',
				'forest-gradient': 'linear-gradient(135deg, #4A6B4E 0%, #2D3F2F 100%)',
				'forest-deep-gradient': 'linear-gradient(160deg, #2D3F2F 0%, #1A2B1D 100%)',
				'sage-fade': 'linear-gradient(180deg, rgba(158, 179, 159, 0) 0%, rgba(158, 179, 159, 0.18) 100%)',
				// Legacy saffron names point at neutral pine tones now
				'saffron-glow': 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(158, 179, 159, 0.18) 0%, rgba(158, 179, 159, 0) 70%)',
				'saffron-gradient': 'linear-gradient(135deg, #4A6B4E 0%, #2D3F2F 100%)',
				'meadow-fade': 'linear-gradient(180deg, rgba(199, 211, 192, 0) 0%, rgba(199, 211, 192, 0.2) 100%)',
				'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.18 0 0 0 0 0.25 0 0 0 0 0.19 0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
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
