'use client'

import { motion } from 'framer-motion'

// components
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { info } from '@/lib/data'

const Contact = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}
			className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					{/* Form Section */}
					<div className="xl:w-[54%] order-2 xl:order-none">
						<form className="flex flex-col gap-6 p-10  bg-[#F1F2F4] dark:bg-[#272c36] rounded-xl">
							<h3 className="text-4xl text-accent font-medium">
								Let's work together
							</h3>
							<p className="text-primary/60 dark:text-white/60">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
								nihil sapiente pariatur id totam.
							</p>
							{/* Grid for Inputs */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input type="firstname" placeholder="First Name" />
								<Input type="lastname" placeholder="Last Name" />
								<Input type="email" placeholder="Email address" />
								<Input type="phone" placeholder="Phone number" />
							</div>
							{/* Textarea for message */}
							<Textarea
								className="h-[200px]"
								placeholder="Type your message here."
							/>
							{/* Button to submit */}
							<Button size="md" className="max-w-40">
								Send message
							</Button>
						</form>
					</div>
					{/* Information Section */}
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => (
								<li key={index} className="flex items-center gap-6">
									<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#F1F2F4] dark:bg-[#272c36] text-accent rounded-md flex items-center justify-center">
										<div className="text-[28px]">{item.icon}</div>
									</div>
									<div className="flex-1">
										<p className="text-primary/60 dark:text-white/60">
											{item.title}
										</p>
										<h3 className="text-xl">{item.description}</h3>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Contact
