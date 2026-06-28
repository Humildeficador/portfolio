import { Link } from 'react-router-dom'
import { Text } from '~/components/ui/Text'

export function Footer() {
	const links = [
		{
			to: '/projects',
			label: '> [cd ./projects]',
			description: 'Veja meus projetos',
		},
		{
			to: '/skills',
			label: '> [ls ./skills]',
			description: 'Matriz técnica completa',
		},
	]
	return (
		<footer className="flex gap-15 border-t border-slate-800 pt-10 mb-12 mt-auto">
			{links.map(({ to, label, description }) => (
				<div key={label} className="flex flex-col">
					<Link to={to}>
						<Text
							intent={'accent'}
							className="hover:text-cyan-500/90 transition-colors select-none"
						>
							{label}
						</Text>
					</Link>
					<Text intent={'secondary'} size={'sm'} className="mt-1">
						{description}
					</Text>
				</div>
			))}
		</footer>
	)
}