import { cva, type VariantProps } from 'class-variance-authority'
import { createElement, type HTMLAttributes } from 'react'
import { cn } from '~/utils/cn'

export const textVariants = cva(``, {
	variants: {
		size: {
			xs: 'text-[10px]',
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
			'2xl': 'text-2xl',
		},
		intent: {
			primary: 'text-gray-1000',
			secondary: 'text-gray-400',
			accent: 'text-cyan-500',
		},
	},
	defaultVariants: {
		size: 'md',
		intent: 'primary',
	},
})

interface TextProps
	extends HTMLAttributes<HTMLElement>,
		VariantProps<typeof textVariants> {
	as?: 'p' | 'h1' | 'h2' | 'h3' | 'span'
}

export function Text({
	size,
	intent,
	className,
	as = 'span',
	children,
	...props
}: TextProps) {
	return createElement(
		as,
		{
			className: cn(textVariants({ size, intent }), className),
			...props,
		},
		children,
	)
}
