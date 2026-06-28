import { Text } from '~/components/ui/Text'
import {
	EducationCard,
	InfraCard,
	StackCard,
} from '~/pages/Home/components/Cards'
import { Footer } from '~/pages/Home/components/Footer'

export function Home() {
	return (
		<div className="h-full">
			<Text className="text-2xl select-none" intent={'accent'}>
				{'~/home'}
			</Text>
			<div className="grid grid-cols-5 mt-4 gap-4 h-full">
				<section className="col-span-3 flex flex-col gap-8 h-full">
					<div className="flex flex-col gap-3 select-none">
						<Text
							as="h1"
							className="text-4xl md:text-5xl lg:text-6xl font-bold"
						>
							Engenheiro de Software &
						</Text>
						<Text
							as="h1"
							intent={'accent'}
							className="text-4xl md:text-5xl lg:text-6xl font-bold"
						>
							Desenvolvedor Full-Stack
						</Text>
					</div>
					<div>
						<Text as="p" size={'2xl'}>
							Atualmente cursando Análise e Desenvolvimento de Sistemas na São
							Judas e técnico concluído pela Etec Lauro Gomes.
						</Text>
					</div>
					<Text as="p" size={'2xl'}>
						Atuo em todo o ciclo da aplicação, unindo o ecossistema do{' '}
						<Text intent={'accent'} size={'2xl'}>
							TypeScript e React
						</Text>{' '}
						no front-end à construção de{' '}
						<Text intent={'accent'} size={'2xl'}>
							APIs robustas
						</Text>{' '}
						no back-end (Node.js/Fastify). Meu foco é traduzir regras de negócio
						complexas em{' '}
						<Text intent={'accent'} size={'2xl'}>
							arquiteturas seguras e escaláveis
						</Text>
						.
					</Text>
					<Footer />
				</section>
				<section className="col-span-2 flex flex-col gap-6">
					<EducationCard />
					<InfraCard />
					<StackCard />
				</section>
			</div>
		</div>
	)
}
