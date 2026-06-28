import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps, FC } from 'react'
import { cn } from '~/utils/cn'

export const iconVariants = cva('shrink-0 pointer-events-none', {
	variants: {
		size: {
			sm: 'size-2 md:size-4',
			md: 'size-4 md:size-6',
			lg: 'size-6 md:size-8',
		},
		color: {
			primary: 'text-gray-1000',
			secondary: 'text-gray-400',
			accent: 'text-cyan-400',
			currentColor: 'text-[currentColor]'
		},
		clickable: {
			true: 'cursor-pointer hover:opacity-80 transition-opacity',
			false: 'cursor-default',
		},
	},
	defaultVariants: {
		size: 'md',
		color: 'primary',
		clickable: false,
	},
})

interface IconProps
	extends Omit<ComponentProps<'svg'>, 'size' | 'color'>,
		VariantProps<typeof iconVariants> {
	svg: FC<ComponentProps<'svg'>>
}

export function Icon({
	size,
	color,
	clickable,
	svg: SVGComponent,
	className,
	...props
}: IconProps) {
	return (
		<SVGComponent
			className={cn(iconVariants({ size, color, clickable }), className)}
			{...props}
		/>
	)
}
