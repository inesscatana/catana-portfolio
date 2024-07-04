'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({
	children,
}: {
	children: React.ReactNode
}) {
	const pathName = usePathname()

	return (
		<AnimatePresence>
			<div key={pathName}>
				<motion.div
					initial={{ opacity: 1 }}
					animate={{
						opacity: 0,
						transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
					}}
					className="h-screen w-screen fixed bg-[#23272F] top-0 pointer-events-none"
				/>
				{children}
			</div>
		</AnimatePresence>
	)
}
