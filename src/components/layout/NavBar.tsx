import { cva, cx, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { NavLink } from '~/components/ui/NavLink'
import { SocialLink } from '~/components/ui/SocialLink'
import { Text } from '~/components/ui/Text'
import { navItems } from '~/utils/navItems'
import { socialLinks } from '~/utils/socialLinks'

export const navBarVariants = cva(
	'sticky bg-transparent top-0 left-0 h-screen w-64 flex flex-col border-r border-slate-800 p-6',
)

interface NavBarProps
	extends ComponentProps<'aside'>,
		VariantProps<typeof navBarVariants> {}

export function NavBar({ className, ...props }: NavBarProps) {
	return (
		<aside className={cx(navBarVariants(), className)} {...props}>
			<div>
				<Text intent={'accent'} size={'lg'} className="select-none">
					joao@portfolio:~$
				</Text>
			</div>
			<nav className="flex-1 mt-10">
				<ul className="flex flex-col gap-2">
					{navItems.map(({ label, to }) => (
						<li key={to}>
							<NavLink to={to}>{label}</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<footer className="mt-auto flex flex-col gap-4 p-6 border-t border-slate-800">
				{socialLinks.map((link) => (
					<SocialLink key={link.label} {...link} />
				))}
			</footer>
		</aside>
	)
}
