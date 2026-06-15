import { cva, cx, type VariantProps } from 'class-variance-authority'
import { createElement, type HTMLAttributes } from 'react'

export const textVariants = cva(``, {
	variants: {
		size: {
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-lg',
		},
		intent: {
			primary: 'text-gray-1000',
			secondary: 'text-gray-400',
			accent: 'text-mint-400',
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
			className: cx(textVariants({ size, intent }), className),
			...props,
		},
		children,
	)
}
