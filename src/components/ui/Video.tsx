import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps, forwardRef } from 'react'

export const videoVariants = cva('object-cover pointer-events-none', {
	variants: {
		intent: {
			background:
				'absolute inset-0 w-full h-full z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-80',
			default: 'w-full h-auto rounded-lg border border-slate-800',
		},
	},
	defaultVariants: {
		intent: 'default',
	},
})

export interface VideoProps
	extends ComponentProps<'video'>,
		VariantProps<typeof videoVariants> {}

export const Video = forwardRef<HTMLVideoElement, VideoProps>(
	({ intent, className, src, ...props }, ref) => {
		return (
			<video
				ref={ref}
				muted
				loop
				playsInline
				preload="metadata"
				className={videoVariants({ intent, className })}
				{...props}
			>
				{src && <source src={src} type="video/mp4" />}
			</video>
		)
	},
)

Video.displayName = 'Video'
