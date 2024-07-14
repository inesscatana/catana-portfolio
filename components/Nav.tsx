'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { links } from '@/lib/data'

export default function Nav() {
	const pathName = usePathname()
	return (
		<nav className="flex gap-8">
			{links.map((link, index) => {
				return (
					<Link
						href={link.path}
						key={index}
						className={`${
							link.path === pathName &&
							'text-[#f0ca59] border-b-2 border-[#f0ca59]'
						} capitalize font-medium hover:text-[#f0ca59] transition-all`}
					>
						{link.name}
					</Link>
				)
			})}
		</nav>
	)
}
