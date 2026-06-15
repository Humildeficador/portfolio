import { cva, cx, type VariantProps } from 'class-variance-authority'
import {
	NavLink as NavLinkRouter,
	type NavLinkProps as NavLinkRouterProps,
} from 'react-router-dom'

export const navLinkVariants = cva(
	`text-sm md:text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-400 px-3 py-2 rounded-md`,
	{
		variants: {
			active: {
				true: 'font-medium text-mint-400',
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

export function NavLink({
	to,
	className,
	children,
	...props
}: NavLinkProps) {
	return (
		<NavLinkRouter
			to={to}
			className={({ isActive }) =>
				cx(navLinkVariants({ active: isActive }), className)
			}
			{...props}
		>
			{children}
		</NavLinkRouter>
	)
}
