import { cva, type VariantProps } from 'class-variance-authority'
import { useRef } from 'react'
import { Badge } from '~/components/ui/Badge'
import { Text } from '~/components/ui/Text'
import { Video } from '~/components/ui/Video'
import type { Project } from '~/utils/projectsMock'

export const projectCardVariants = cva(
	'relative overflow-hidden group rounded-lg border bg-gray-950 p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer hover:-translate-y-1',
	{
		variants: {
			isFeatured: {
				true: [
					'md:col-span-2 lg:col-span-3 border-[color-mix(in_srgb,var(--color-mint-400),var(--color-mint-600))]/40 shadow-[0_0_15px_rgba(45,212,191,0.05)]',
					'hover:border-[color-mix(in_srgb,var(--color-mint-400),var(--color-mint-600))]/60 hover:shadow-[0_0_25px_rgba(45,212,191,0.15)]',
				].join(' '),
				false: 'border-slate-800 hover:border-slate-700',
			},
		},
		defaultVariants: {
			isFeatured: false,
		},
	},
)

interface ProjectCardProp extends VariantProps<typeof projectCardVariants> {
	project: Project
}

export function ProjectCard({ project }: ProjectCardProp) {
	const { title, description, tags, isFeatured, videoUrl } = project

	const videoRef = useRef<HTMLVideoElement>(null)

	const handleMouseEnter = () => {
		if (videoRef.current) videoRef.current.play()
	}

	const handleMouseLeave = () => {
		if (videoRef.current) {
			videoRef.current.pause()
			videoRef.current.currentTime = 0
		}
	}

	return (
		<button
			type="button"
			className={`w-full text-left ${projectCardVariants({ isFeatured })}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onFocus={handleMouseEnter}
			onBlur={handleMouseLeave}
		>
			{videoUrl && (
				<>
					<Video ref={videoRef} intent="background" src={videoUrl} />
					<div className="absolute inset-0 z-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-transparent pointer-events-none" />
				</>
			)}
			<div
				className={
					isFeatured
						? 'relative z-10 lg:max-w-2xl flex flex-col gap-2'
						: 'relative z-10 flex flex-col gap-2'
				}
			>
				{isFeatured && (
					<Text
						as="span"
						size={'xs'}
						intent="accent"
						className="uppercase tracking-widest mb-1 select-none"
					>
						{'>'} PROJETO EM DESTAQUE
					</Text>
				)}
				<Text as="h3" intent={'accent'} size={'xl'} className="font-bold">
					{title}
				</Text>
				<Text
					as="p"
					intent={'secondary'}
					size={'sm'}
					className="leading-relaxed mt-1"
				>
					{description}
				</Text>
			</div>
			<div className="relative z-10 flex flex-wrap gap-2 mt-6">
				{tags.map((tag) => (
					<Badge key={tag} intent="default">
						{tag}
					</Badge>
				))}
			</div>
		</button>
	)
}
