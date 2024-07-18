'use client'

import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

// components
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import SubmitBtn from '@/components/SubmitBtn'

import { info } from '@/lib/data'
import { sendEmail } from '@/actions/sendEmail'

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
						<form
							className="flex flex-col gap-6 p-10  bg-[#F1F2F4] dark:bg-[#272c36] rounded-xl"
							action={async (formData) => {
								const { data, error } = await sendEmail(formData)

								if (error) {
									toast.error(error)
									return
								}

								toast.success('Email sent successfully!')
							}}
						>
							<h3 className="text-4xl text-accent font-medium">
								Let's work together
							</h3>
							<p className="text-primary/60 dark:text-white/60">
								Please contact me directly at{' '}
								<a className="underline" href="mailto:example@gmail.com">
									ines.arts@hotmail.com
								</a>{' '}
								or through this form.
							</p>
							{/* Grid for Inputs */}
							<div className="grid gap-6">
								<Input
									name="senderEmail"
									type="email"
									placeholder="Your email"
									required
									maxLength={500}
								/>
							</div>
							{/* Textarea for message */}
							<Textarea
								className="h-[200px]"
								name="message"
								placeholder="Your message"
								required
								maxLength={5000}
							/>
							{/* Button to submit */}
							<SubmitBtn />
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
