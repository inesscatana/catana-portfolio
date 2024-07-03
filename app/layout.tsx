import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

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
			<body className={`${jetBrainsMono.variable} bg-[#23272F]`}>
				{children}
			</body>
		</html>
	)
}
