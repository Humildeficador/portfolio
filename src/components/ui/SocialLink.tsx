import type { ComponentProps, FC } from 'react'
import { Icon } from '~/components/ui/Icon'

interface SocialLinkProps {
	href: string
	label: string
	icon: FC<ComponentProps<'svg'>>
	text: string
}

export function SocialLink({ href, label, icon, text }: SocialLinkProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={label}
			className="flex items-center text-sm gap-3 text-slate-400 hover:text-cyan-500 transition-colors select-none"
		>
			<Icon svg={icon} size="md" color="currentColor" />
			<span>{text}</span>
		</a>
	)
}
