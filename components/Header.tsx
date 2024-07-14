import Link from 'next/link'
import { Button } from './ui/button'

//components
import Nav from './Nav'
import MobileNav from './MobileNav'

export default function Header() {
	return (
		<header className="py-8 xl:py-12 text-white">
			<div className="container mx-auto flex justify-between items-center">
				{/* logo */}
				<Link href="/">
					<h1 className="text-4xl font-semibold">
						Catana<span className="text-[#f0ca59]">.</span>
					</h1>
				</Link>
				{/* desktop nav & hire me button */}
				<div className="hidden xl:flex items-center gap-8">
					<Nav />
					<Link href={'/contact'}>
						<Button>Hire me</Button>
					</Link>
				</div>
				{/* mobile nav */}
				<div className="xl:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	)
}
