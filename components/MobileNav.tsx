'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

import { links } from '@/lib/data'

const MobileNav = () => {
	const pathname = usePathname()
	return (
		<Sheet>
			<SheetTrigger className="flex justify-center items-center">
				<CiMenuFries className="text-[32px] text-[#f0ca59]" />
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				{/* logo */}
				<div className="mt-32 mb-40 text-center text-2xl">
					<Link href="/">
						<h1 className="text-4xl font-semibold">
							Catana<span className="text-[#f0ca59]">.</span>
						</h1>
					</Link>
				</div>
				{/* nav */}
				<nav className="flex flex-col justify-center items-center gap-8">
					{links.map((link, index) => {
						return (
							<Link
								href={link.path}
								key={index}
								className={`${
									link.path === pathname &&
									'text-[#f0ca59] border-b-2 border-[#f0ca59]'
								} text-xl capitalize hover:text-[#f0ca59] transition-all`}
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
