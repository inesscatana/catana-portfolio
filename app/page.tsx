import React, { memo } from 'react'
import { FiDownload } from 'react-icons/fi'

// components
import Social from '@/components/Social'
import Photo from '@/components/Photo'

const TextSection = () => (
	<div className="text-center xl:text-left order-2 xl:order-none">
		<span className="text-xl">Software Developer</span>
		<h1 className="h1 mb-6">
			Hello! I'm
			<br />
			<span className="text-[#f0ca59] font-bold">Inês Catana</span>.
		</h1>
		<p className="max-w-[500px] mb-9 text-white/80">
			I'm a <span className="font-bold">Frontend developer</span> with{' '}
			<span className="font-bold">8 years</span> of experience and I'm also a{' '}
			<span className="font-bold">teacher.</span> I enjoy building{' '}
			<span className="italic">sites & apps</span>.
		</p>
		<div className="flex flex-col xl:flex-row items-center gap-8">
			<DownloadButton />
			<SocialLinks />
		</div>
	</div>
)

const DownloadButton = () => (
	<a
		className="group focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer justify-center rounded-full font-semibold border border-[#f0ca59] bg-transparent text-[#f0ca59] h-[56px] px-8 tracking-[2px] uppercase flex items-center gap-2"
		href="/assets/cv_ines_catana.pdf"
		download
	>
		Download CV
		<FiDownload className="text-xl group-hover:translate-y-1 transition" />
	</a>
)

const SocialLinks = () => (
	<div className="mb-8 xl:mb-0">
		<Social
			containerStyles="flex gap-6"
			iconStyles="w-9 h-9 border border-[#f0ca59] rounded-full flex justify-center items-center text-[#f0ca59] text-base hover:bg-[#f0ca59] hover:text-primary hover:transition-all duration-500"
		/>
	</div>
)

const PhotoSection = () => (
	<div className="order-1 xl:order-none mb-8 xl:mb-0">
		<Photo />
	</div>
)

const Home = () => {
	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					<TextSection />
					<PhotoSection />
				</div>
			</div>
		</section>
	)
}

export default memo(Home)
