import { cva, cx, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import GitHubIcon from '~/assets/icons/github.svg?react'
import LinkedInIcon from '~/assets/icons/linkedin.svg?react'
import { Icon } from '~/components/ui/Icon'
import { NavLink } from '~/components/ui/NavLink'
import { Text } from '~/components/ui/Text'
import { navItems } from '~/utils/navItems'

export const navBarVariants = cva(
	'sticky bg-gray-950 top-0 left-0 h-screen w-64 flex flex-col border-r border-slate-800 p-6',
)

interface NavBarProps
	extends ComponentProps<'aside'>,
		VariantProps<typeof navBarVariants> {}

export function NavBar({ className, ...props }: NavBarProps) {
	return (
		<aside className={cx(navBarVariants(), className)} {...props}>
			<div>
				<Text intent={'accent'}>joao@portifolio:~$</Text>
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
				<a
					href="https://github.com/humildeficador"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					className="flex items-center text-[12px] md:text-sm gap-3 text-slate-400 hover:text-mint-400 transition-colors"
				>
					<Icon
						svg={GitHubIcon}
						size={'md'}
						color={'currentColor'}
					/>
					<span>/humildeficador</span>
				</a>
				<a
					href="https://www.linkedin.com/in/jvictorlndr/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					className="group flex items-center text-[12px] md:text-sm gap-3 text-slate-400 hover:text-mint-400 transition-colors duration-200"
				>
					<Icon
						svg={LinkedInIcon}
						size={'md'}
						color={'currentColor'}
					/>
					<span>/jvictorlndr</span>
				</a>
			</footer>
		</aside>
	)
}
