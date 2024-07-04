import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

// components
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'
import StairTransition from '@/components/StairTransition'

const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	variable: '--font-jetBrainsMono',
})

export const metadata: Metadata = {
	title: 'Inês Catana | Personal Portfolio',
	description: 'Developer with 8 years of experience.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={jetBrainsMono.variable}>
				<StairTransition />
				<Header />
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	)
}
