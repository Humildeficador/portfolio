import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

export const badgeVariants = cva(
	'inline-flex items-center rounded px-2 py-0.5 text-xs font-mono border transition-colors select-none',
	{
		variants: {
			intent: {
				default: 'bg-slate-800/40 text-slate-400 border-slate-700/30',
			},
		},
	},
)

export interface BadgeProps
	extends ComponentProps<'span'>,
		VariantProps<typeof badgeVariants> {}

export function Badge({ intent, children, className }: BadgeProps) {
	return <span className={badgeVariants({ intent, className })}>{children}</span>
}
