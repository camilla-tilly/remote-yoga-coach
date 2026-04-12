
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
				// Yoga with Camilla palette — Almond Cream, Earth Brown, Olive Grove,
				// Meadow Mist, Coastal Sage. Legacy `dalashala-*` tokens remain as
				// semantic aliases so existing markup keeps working.
				dalashala: {
					// Legacy names (remapped to new palette)
					beige: '#F0EFEE',       // Morning Frost
					lightBeige: '#F7F6F5',  // Morning Frost Light
					darkBrown: '#726352',   // Aged Acorn
					mediumBrown: '#4F5141', // Olive Leaf
					tan: '#9B907F',         // Rustic Olive
					// New semantic names
					cream: '#F0EFEE',
					creamLight: '#F7F6F5',
					creamDeep: '#E5E3E1',
					earth: '#726352',
					earthSoft: '#8A7B6A',
					olive: '#4F5141',
					oliveLight: '#6B6D5C',
					meadow: '#9B907F',
					meadowLight: '#B3A999',
					sage: '#B7B7B6',
					sageLight: '#CDCDCC',
				}
			},
			fontFamily: {
				'cinzel-decorative': ['"Cinzel Decorative"', 'serif'],
				'cinzel': ['Cinzel', 'serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
				'eb-garamond': ['"EB Garamond"', 'serif'],
			},
			boxShadow: {
				'soft': '0 4px 20px -4px rgba(114, 99, 82, 0.08), 0 2px 6px -2px rgba(114, 99, 82, 0.06)',
				'card': '0 10px 30px -10px rgba(114, 99, 82, 0.18), 0 4px 10px -4px rgba(114, 99, 82, 0.08)',
				'card-hover': '0 20px 40px -12px rgba(114, 99, 82, 0.25), 0 8px 16px -8px rgba(79, 81, 65, 0.15)',
				'inset-soft': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 0 rgba(114, 99, 82, 0.05)',
				'earth-glow': '0 0 0 1px rgba(155, 144, 127, 0.3), 0 6px 24px -8px rgba(114, 99, 82, 0.25)',
			},
			backgroundImage: {
				'cream-gradient': 'linear-gradient(180deg, #F7F6F5 0%, #F0EFEE 50%, #E5E3E1 100%)',
				'cream-radial': 'radial-gradient(ellipse at top, #F7F6F5 0%, #F0EFEE 45%, #E5E3E1 100%)',
				'sage-gradient': 'linear-gradient(135deg, #CDCDCC 0%, #B7B7B6 100%)',
				'olive-gradient': 'linear-gradient(135deg, #6B6D5C 0%, #4F5141 100%)',
				'earth-gradient': 'linear-gradient(135deg, #8A7B6A 0%, #726352 100%)',
				'meadow-fade': 'linear-gradient(180deg, rgba(155, 144, 127, 0) 0%, rgba(155, 144, 127, 0.15) 100%)',
				'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.45 0 0 0 0 0.39 0 0 0 0 0.32 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
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
