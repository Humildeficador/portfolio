import { cva, cx, type VariantProps } from 'class-variance-authority'
import { forwardRef, useRef } from 'react'
import { Badge } from '~/components/ui/Badge'
import { Text } from '~/components/ui/Text'
import { Video } from '~/components/ui/Video'
import type { Project } from '~/utils/projectsMock'

export const projectCardVariants = cva(
	'w-full text-left relative overflow-hidden group rounded-lg border bg-gray-950 p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer hover:-translate-y-1',
	{
		variants: {
			isFeatured: {
				true: [
					'md:col-span-2 lg:col-span-3 border-[color-mix(in_srgb,var(--color-cyan-400),var(--color-cyan-600))]/40 shadow-[0_0_15px_rgba(45,212,191,0.05)]',
					'hover:border-[color-mix(in_srgb,var(--color-cyan-400),var(--color-cyan-600))]/60 hover:shadow-[0_0_25px_rgba(45,212,191,0.15)]',
				].join(' '),
				false: 'border-slate-800 hover:border-slate-700',
			},
		},
		defaultVariants: {
			isFeatured: false,
		},
	},
)

interface ProjectCardProp extends
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof projectCardVariants> {
	project: Project
}

export const ProjectCard = forwardRef<HTMLButtonElement, ProjectCardProp>(({ project, className, ...props }, ref) => {
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
			ref={ref}
			type="button"
			className={cx(projectCardVariants({ isFeatured: project.isFeatured }), className)} onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onFocus={handleMouseEnter}
			onBlur={handleMouseLeave}
			{...props}
		>
			{videoUrl && (
				<>
					<Video ref={videoRef} intent="background" src={videoUrl} />
					<div className="absolute inset-0 z-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-transparent pointer-events-none" />
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
					<Badge key={tag}>
						{tag}
					</Badge>
				))}
			</div>
		</button>
	)
})

ProjectCard.displayName = 'ProjectCard'