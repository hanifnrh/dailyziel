import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./node_modules/@nextui-org/theme/dist/components/navbar.js"
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
				'color-1': 'hsl(var(--color-1))',
				'color-2': 'hsl(var(--color-2))',
				'color-3': 'hsl(var(--color-3))',
				'color-4': 'hsl(var(--color-4))',
				'color-5': 'hsl(var(--color-5))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				moveVertical: {
					'0%': {
						transform: 'translateY(-50%)'
					},
					'50%': {
						transform: 'translateY(50%)'
					},
					'100%': {
						transform: 'translateY(-50%)'
					}
				},
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
				'shimmer-slide': {
					to: {
						transform: 'translate(calc(100cqw - 100%), 0)'
					}
				},
				'spin-around': {
					'0%': {
						transform: 'translateZ(0) rotate(0)'
					},
					'15%, 35%': {
						transform: 'translateZ(0) rotate(90deg)'
					},
					'65%, 85%': {
						transform: 'translateZ(0) rotate(270deg)'
					},
					'100%': {
						transform: 'translateZ(0) rotate(360deg)'
					}
				},
				shine: {
					'0%': {
						'background-position': '0% 0%'
					},
					'50%': {
						'background-position': '100% 100%'
					},
					to: {
						'background-position': '0% 0%'
					}
				},
				'shiny-text': {
					'0%, 90%, 100%': {
						'background-position': 'calc(-100% - var(--shiny-width)) 0'
					},
					'30%, 60%': {
						'background-position': 'calc(100% + var(--shiny-width)) 0'
					}
				},
				gradient: {
					to: {
						backgroundPosition: 'var(--bg-size) 0'
					}
				},
				rainbow: {
					'0%': {
						'background-position': '0%'
					},
					'100%': {
						'background-position': '200%'
					}
				},
				rippling: {
					'0%': {
						opacity: '1'
					},
					'100%': {
						transform: 'scale(2)',
						opacity: '0'
					}
				},
				marquee: {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(calc(-100% - var(--gap)))'
					}
				},
				'marquee-vertical': {
					from: {
						transform: 'translateY(0)'
					},
					to: {
						transform: 'translateY(calc(-100% - var(--gap)))'
					}
				},
				ripple: {
					'0%, 100%': {
						transform: 'translate(-50%, -50%) scale(1)'
					},
					'50%': {
						transform: 'translate(-50%, -50%) scale(0.9)'
					}
				}
			},
			animation: {
				first: 'moveVertical 30s ease infinite',
				second: 'moveInCircle 20s reverse infinite',
				third: 'moveInCircle 40s linear infinite',
				fourth: 'moveHorizontal 40s ease infinite',
				fifth: 'moveInCircle 20s ease infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
				'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
				shine: 'shine var(--duration) infinite linear',
				'shiny-text': 'shiny-text 8s infinite',
				gradient: 'gradient 8s linear infinite',
				rainbow: 'rainbow var(--speed, 2s) infinite linear',
				rippling: 'rippling var(--duration) ease-out',
				marquee: 'marquee var(--duration) infinite linear',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		nextui(),
		addVariablesForColors
	],

} satisfies Config

export default config

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}