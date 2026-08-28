
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
				// Remote Yoga Coach palette — redesign (Aug 2026).
				// Warm-paper background, terracotta accent, deep warm-brown text,
				// sand tinted bands. Hex values converted from the design's oklch
				// tokens (design_handoff_remote_yoga_coach). The `dalashala`
				// namespace is a legacy alias kept so all existing markup re-themes
				// automatically; its values now point at the redesign palette.
				clay: '#8f5033',       // terracotta accent (links, buttons)
				clayDark: '#723c23',   // terracotta hover
				clayLight: '#ad6e52',  // lighter terracotta
				charcoal: '#50453d',   // body text (warm brown)
				heading: '#261d16',    // headings / primary text (deep warm brown)
				offwhite: '#f9f2e9',   // warm paper (primary bg)
				cream: '#efe4d6',      // sand (tinted bands, card fills)
				sage: {
					DEFAULT: '#7e7269',  // muted warm taupe (secondary text, labels)
					dark: '#6c6158',
					light: '#dfd6c9',    // hairline / border
				},
				dalashala: {
					// Legacy names → redesign palette
					beige: '#f9f2e9',       // warm paper (primary bg)
					lightBeige: '#efe4d6',  // sand for card fills
					darkBrown: '#50453d',   // body text
					mediumBrown: '#8f5033', // terracotta (links, buttons)
					tan: '#dfd6c9',         // border
					// Semantic names
					cream: '#f9f2e9',
					creamLight: '#efe4d6',
					creamDeep: '#ebe0d4',   // sand contrast bands
					earth: '#261d16',       // headings, primary text
					earthSoft: '#50453d',   // body / gradient start
					olive: '#8f5033',       // terracotta (buttons, links, accent)
					oliveLight: '#ad6e52',  // lighter terracotta (hover)
					meadow: '#dfd6c9',      // border
					meadowLight: '#e7ddd0', // palest sand
					sage: '#7e7269',
					sageLight: '#dfd6c9',
					// Warm accents → terracotta tones
					honey: '#8f5033',
					honeyDeep: '#723c23',
					honeyLight: '#efe4d6',
					saffron: '#8f5033',
					saffronDeep: '#723c23',
					saffronLight: '#efe4d6',
					gold: '#8f5033',
				}
			},
			fontFamily: {
				// Redesign pairing: Newsreader (editorial serif, headings/display) +
				// Karla (body/UI) + IBM Plex Mono (eyebrows, labels). Legacy keys alias
				// to Newsreader/Karla so existing markup picks up the new faces.
				'cormorant': ['Newsreader', 'Georgia', 'serif'],
				'fraunces': ['Newsreader', 'Georgia', 'serif'],
				'inter': ['Karla', 'system-ui', 'sans-serif'],
				'cinzel-decorative': ['Newsreader', 'Georgia', 'serif'],
				'cinzel': ['Newsreader', 'Georgia', 'serif'],
				'montserrat': ['Karla', 'system-ui', 'sans-serif'],
				'eb-garamond': ['Newsreader', 'Georgia', 'serif'],
				'mono': ['IBM Plex Mono', 'ui-monospace', 'monospace'],
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
				// Warm paper washes.
				'cream-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #f9f2e9 50%, #efe4d6 100%)',
				'cream-radial': 'radial-gradient(ellipse at top, #FFFFFF 0%, #f9f2e9 60%, #efe4d6 100%)',
				'sage-gradient': 'linear-gradient(135deg, #ebe0d4 0%, #ad6e52 100%)',
				'olive-gradient': 'linear-gradient(135deg, #ad6e52 0%, #8f5033 100%)',
				// earth-gradient / forest-gradient: deep warm brown for dark sections
				'earth-gradient': 'linear-gradient(135deg, #46382f 0%, #2a201a 100%)',
				'forest-gradient': 'linear-gradient(135deg, #46382f 0%, #2a201a 100%)',
				'forest-deep-gradient': 'linear-gradient(160deg, #2a201a 0%, #1c150f 100%)',
				'sage-fade': 'linear-gradient(180deg, rgba(126, 114, 105, 0) 0%, rgba(126, 114, 105, 0.16) 100%)',
				// Legacy saffron names → terracotta tones
				'saffron-glow': 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(143, 80, 51, 0.14) 0%, rgba(143, 80, 51, 0) 70%)',
				'saffron-gradient': 'linear-gradient(135deg, #ad6e52 0%, #8f5033 100%)',
				'meadow-fade': 'linear-gradient(180deg, rgba(223, 214, 201, 0) 0%, rgba(223, 214, 201, 0.25) 100%)',
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
