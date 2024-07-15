'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { CiMenuFries } from 'react-icons/ci'

// components
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { links } from '@/lib/data'

const MobileNav = () => {
	const pathname = usePathname()
	return (
		<Sheet>
			<SheetTrigger className="flex justify-center items-center">
				<CiMenuFries className="text-[32px] text-accent" />
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				{/* Logo */}
				<div className="mt-32 mb-40 text-center text-2xl">
					<Link href="/">
						<span className="text-4xl font-semibold text-primary dark:text-white">
							Catana<span className="text-accent">.</span>
						</span>
					</Link>
				</div>
				{/* Nav */}
				<nav className="flex flex-col justify-center items-center gap-8">
					{links.map((link, index) => {
						return (
							<Link
								href={link.path}
								key={index}
								className={`${
									link.path === pathname &&
									'text-accent border-b-2 border-accent'
								} text-xl capitalize hover:text-accent transition-all`}
							>
								{link.name}
							</Link>
						)
					})}
				</nav>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNav
