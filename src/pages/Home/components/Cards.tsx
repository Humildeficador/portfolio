import { CodeXml, GraduationCap, Network } from 'lucide-react'
import { Badge } from '~/components/ui/Badge'
import { Icon } from '~/components/ui/Icon'
import { Text } from '~/components/ui/Text'
import { FLAT_TECH_STACK } from '~/utils/stacks'

export function EducationCard() {
	return (
		<div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
			<div className="flex items-center gap-2">
				<Icon svg={GraduationCap} color={'accent'} size={'lg'} />
				<Text
					intent={'accent'}
					className="flex font-bold tracking-wider select-none"
					size={'lg'}
				>
					EDUCAÇÃO
				</Text>
			</div>
			<div className="flex flex-col gap-2 mt-3">
				<div className="flex flex-col">
					<Text size={'lg'}>
						Análise e Desenvolvimento de Sistemas / São Judas
					</Text>
					<Text intent={'secondary'} size={'sm'}>
						Previsão: Dez 2028
					</Text>
				</div>
				<div className="flex flex-col">
					<Text size={'lg'}>Técnico Informática / Etec</Text>
					<Text intent={'secondary'} size={'sm'}>
						Concluído: Dez 2023
					</Text>
				</div>
			</div>
		</div>
	)
}

export function InfraCard() {
	return (
		<div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
			<div className="flex items-center gap-2">
				<Icon svg={Network} color={'accent'} size={'lg'} />
				<Text
					intent={'accent'}
					className="flex font-bold tracking-wider select-none"
					size={'lg'}
				>
					INFRA & REDES
				</Text>
			</div>
			<div className="flex flex-col gap-2 my-3">
				<div className="flex flex-col">
					<Text size={'lg'}>Cisco CCNA: Introduction to Networks</Text>
				</div>
				<div className="flex flex-col">
					<Text size={'lg'}>Cybersecurity Essentials</Text>
				</div>
			</div>
			<div className="flex gap-2 flex-wrap">
				<Badge>TCP/IP</Badge>
				<Badge>Security</Badge>
				<Badge>Linux</Badge>
			</div>
		</div>
	)
}

export function StackCard() {
	const coreStackIndices = [1, 4, 0, 8, 5]
	return (
		<div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
			<div className="flex items-center gap-2">
				<Icon svg={CodeXml} color={'accent'} size={'lg'} />
				<Text
					intent={'accent'}
					className="flex font-bold tracking-wider select-none"
					size={'lg'}
				>
					STACK PRINCIPAL
				</Text>
			</div>
			<div className="flex flex-wrap gap-3 mt-3">
				{coreStackIndices.map((index) => (
					<Badge key={FLAT_TECH_STACK[index]}>{FLAT_TECH_STACK[index]}</Badge>
				))}
			</div>
		</div>
	)
}
