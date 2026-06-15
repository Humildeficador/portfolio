import { ProjectCard } from '~/components/ui/ProjectCard'
import { Text } from '~/components/ui/Text'
import { projectsMock } from '~/utils/projectsMock'

export function Projects() {
	return (
		<div className="h-full w-full flex flex-col gap-6">
			<div>
				<Text as="h1" intent={'accent'} size={'2xl'}>
					{'./projects'}
				</Text>
				<Text as="p" intent={'secondary'} className="mt-2">
					Projetos em destaque, experimentos e repositórios.
				</Text>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
				{projectsMock.map((project) => (
					<ProjectCard key={`${project.id}`} project={project} />
				))}
			</div>
		</div>
	)
}
