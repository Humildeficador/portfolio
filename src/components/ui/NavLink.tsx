import { cva, type VariantProps } from 'class-variance-authority'
import {
	NavLink as NavLinkRouter,
	type NavLinkProps as NavLinkRouterProps,
} from 'react-router-dom'
import { cn } from '~/utils/cn'

export const navLinkVariants = cva(
	`text-sm md:text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-400 px-3 py-2 rounded-md select-none`,
	{
		variants: {
			active: {
				true: 'font-medium text-cyan-500',
				false: 'text-gray-400 hover:text-gray-1000',
			},
		},
		defaultVariants: {
			active: false,
		},
	},
)

interface NavLinkProps
	extends Omit<NavLinkRouterProps, 'classname'>,
		VariantProps<typeof navLinkVariants> {}

export function NavLink({ to, className, children, ...props }: NavLinkProps) {
	return (
		<NavLinkRouter
			to={to}
			className={({ isActive }) =>
				cn(navLinkVariants({ active: isActive }), className)
			}
			{...props}
		>
			{children}
		</NavLinkRouter>
	)
}
