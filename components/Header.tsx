import Link from 'next/link'

//components
import { Button } from './ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav'

export default function Header() {
	return (
		<header className="py-8 xl:py-12 text-white">
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo */}
				<Link href="/">
					<span className="text-4xl font-semibold text-primary dark:text-white">
						Catana<span className="text-accent">.</span>
					</span>
				</Link>
				{/* Desktop nav & Hire me button */}
				<div className="hidden xl:flex items-center gap-8">
					<Nav />
					<Link href={'/contact'}>
						<Button>Hire me</Button>
					</Link>
				</div>
				{/* Mobile nav */}
				<div className="xl:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	)
}
