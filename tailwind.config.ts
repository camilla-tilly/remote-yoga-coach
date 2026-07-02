
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
				// Remote Yoga Coach palette — warm, minimal, corporate-friendly.
				// Warm clay (primary CTA), sage green (secondary), off-white bg,
				// charcoal text, warm cream bands. The `dalashala` namespace is a
				// legacy alias kept so all existing markup re-themes automatically;
				// its values now point at the RYC palette.
				clay: '#B67A5E',
				clayDark: '#9F674D',
				clayLight: '#CE9A82',
				charcoal: '#4A423A',
				heading: '#64513E',
				offwhite: '#FAFAF8',
				cream: '#F5EFE7',
				sage: {
					DEFAULT: '#8B9D7D',
					dark: '#7A8C6D',
					light: '#DCE4D6',
				},
				dalashala: {
					// Legacy names → RYC palette
					beige: '#FAFAF8',       // off-white (primary bg)
					lightBeige: '#F5EFE7',  // warm cream for card fills
					darkBrown: '#4A423A',   // soft warm brown (primary text)
					mediumBrown: '#B67A5E', // muted terracotta (links, buttons)
					tan: '#DCE4D6',         // light sage (borders)
					// Semantic names
					cream: '#FAFAF8',
					creamLight: '#F5EFE7',
					creamDeep: '#F5EFE7',   // warm cream contrast bands
					earth: '#4A423A',       // soft warm brown (headings, primary text)
					earthSoft: '#63564A',   // warm brown (gradient start)
					olive: '#B67A5E',       // muted terracotta (buttons, links, accent)
					oliveLight: '#CE9A82',  // lighter terracotta (hover)
					meadow: '#DCE4D6',      // light sage (borders)
					meadowLight: '#E8EDE3', // palest sage
					sage: '#8B9D7D',
					sageLight: '#DCE4D6',
					// Warm accents → terracotta tones
					honey: '#B67A5E',
					honeyDeep: '#9F674D',
					honeyLight: '#F5EFE7',
					saffron: '#B67A5E',
					saffronDeep: '#9F674D',
					saffronLight: '#F5EFE7',
					gold: '#B67A5E',
				}
			},
			fontFamily: {
				// Scandi pairing: Fraunces (characterful variable display serif) + Inter (body/UI).
				// Legacy keys alias to Fraunces so existing markup picks up the new face.
				'cormorant': ['Fraunces', 'Georgia', 'serif'],
				'fraunces': ['Fraunces', 'Georgia', 'serif'],
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'cinzel-decorative': ['Fraunces', 'Georgia', 'serif'],
				'cinzel': ['Fraunces', 'Georgia', 'serif'],
				'montserrat': ['Inter', 'system-ui', 'sans-serif'],
				'eb-garamond': ['Fraunces', 'Georgia', 'serif'],
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
				// Warm off-white washes.
				'cream-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FAFAF8 50%, #F5EFE7 100%)',
				'cream-radial': 'radial-gradient(ellipse at top, #FFFFFF 0%, #FAFAF8 60%, #F5EFE7 100%)',
				'sage-gradient': 'linear-gradient(135deg, #DCE4D6 0%, #8B9D7D 100%)',
				'olive-gradient': 'linear-gradient(135deg, #CE9A82 0%, #B67A5E 100%)',
				// earth-gradient / forest-gradient: soft warm brown for dark sections
				'earth-gradient': 'linear-gradient(135deg, #574C42 0%, #3E362E 100%)',
				'forest-gradient': 'linear-gradient(135deg, #574C42 0%, #3E362E 100%)',
				'forest-deep-gradient': 'linear-gradient(160deg, #3E362E 0%, #2A231D 100%)',
				'sage-fade': 'linear-gradient(180deg, rgba(139, 157, 125, 0) 0%, rgba(139, 157, 125, 0.18) 100%)',
				// Legacy saffron names → terracotta tones
				'saffron-glow': 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(182, 122, 94, 0.16) 0%, rgba(182, 122, 94, 0) 70%)',
				'saffron-gradient': 'linear-gradient(135deg, #CE9A82 0%, #B67A5E 100%)',
				'meadow-fade': 'linear-gradient(180deg, rgba(220, 228, 214, 0) 0%, rgba(220, 228, 214, 0.2) 100%)',
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
