import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'

// components
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'
import StairTransition from '@/components/StairTransition'
import ThemeSwitch from '@/components/ThemeSwitch'

import ThemeContextProvider from '@/context/theme-context'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	variable: '--font-poppins',
})

export const metadata: Metadata = {
	title: 'Inês Catana | Personal Portfolio',
	description: 'Software Developer with 8+ years of experience.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.className} bg-gray-50 text-primary dark:bg-primary dark:text-white dark:text-opacity-90}`}
			>
				<StairTransition />
				<ThemeContextProvider>
					<Header />
					<ThemeSwitch />
					<PageTransition>{children}</PageTransition>
				</ThemeContextProvider>
			</body>
		</html>
	)
}
