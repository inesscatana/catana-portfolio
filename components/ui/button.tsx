import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors',
	{
		variants: {
			variant: {
				default: 'bg-[#f0ca59] text-primary hover:bg-[#f0ca59]-hover',
				primary: 'bg-primary text-white',
				outline:
					'border border-[#f0ca59] bg-transparent text-[#f0ca59] hover:bg-[#f0ca59] hover:text-primary',
			},
			size: {
				default: 'h-[44px] px-6',
				md: 'h-[48px] px-6',
				lg: 'h-[56px] px-8 text-sm uppercase tracking-[2px]',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
