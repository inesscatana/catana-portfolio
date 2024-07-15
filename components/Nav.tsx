'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { links } from '@/lib/data'

export default function Nav() {
	const pathName = usePathname()

	return (
		<nav className="flex gap-8">
			{links.map((link, index) => {
				const isActive = link.path === pathName

				return (
					<Link
						href={link.path}
						key={index}
						className={`capitalize font-medium transition-all border-b-2 ${
							isActive
								? 'text-accent border-accent'
								: 'text-primary dark:text-white border-transparent'
						} hover:text-accent dark:hover:text-accent`}
					>
						{link.name}
					</Link>
				)
			})}
		</nav>
	)
}
