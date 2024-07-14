'use client'

import { motion } from 'framer-motion'

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'

import {
	aboutData,
	experiencesData,
	educationData,
	skillsData,
} from '@/lib/data'

interface SectionContentProps {
	title: string
	description: string
	children: React.ReactNode
}

const SectionContent = ({
	title,
	description,
	children,
}: SectionContentProps) => (
	<div className="flex flex-col gap-8 text-center xl:text-left">
		<h3 className="text-4xl font-bold">{title}</h3>
		<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
		{children}
	</div>
)

interface ListItemProps {
	children: React.ReactNode
}

const ListItem = ({ children }: ListItemProps) => (
	<li className="bg-[#272c36] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
		{children}
	</li>
)

interface TooltipIconProps {
	icon: React.ReactNode
	name: string
}

const TooltipIcon = ({ icon, name }: TooltipIconProps) => (
	<TooltipProvider delayDuration={100}>
		<Tooltip>
			<TooltipTrigger className="bg-[#272c36] items-center group">
				<span className="text-lg group-hover:text-accent transition-all duration-300">
					{icon}
				</span>
			</TooltipTrigger>
			<TooltipContent>
				<p className="capitalize">{name}</p>
			</TooltipContent>
		</Tooltip>
	</TooltipProvider>
)

interface TooltipSkillProps {
	skill: { icon: React.ReactNode; name: string }
}

const TooltipSkill = ({ skill }: TooltipSkillProps) => (
	<li>
		<TooltipProvider delayDuration={100}>
			<Tooltip>
				<TooltipTrigger className="w-full h-[150px] bg-[#272c36] rounded-xl flex justify-center items-center group">
					<div className="text-6xl group-hover:text-accent transition-all duration-300">
						{skill.icon}
					</div>
				</TooltipTrigger>
				<TooltipContent>
					<p className="capitalize">{skill.name}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	</li>
)

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-16"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About Me</TabsTrigger>
					</TabsList>
					<div className="min-h-[70vh] w-full">
						<TabsContent value="experience" className="w-full">
							<SectionContent
								title={experiencesData.title}
								description={experiencesData.description}
							>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
										{experiencesData.items.map((item, index) => (
											<ListItem key={index}>
												<span className="text-accent">{item.duration}</span>
												<h3 className="text-xl max-w-[260px] text-center lg:text-left">
													{item.position}
												</h3>
												<div className="flex items-center gap-3">
													<p className="text-white/60">{item.company}</p>
												</div>
												<div className="flex items-center gap-1">
													{item.icon.map((icon, iconIndex) => (
														<TooltipIcon
															key={iconIndex}
															icon={icon}
															name={item.name[iconIndex]}
														/>
													))}
												</div>
											</ListItem>
										))}
									</ul>
								</ScrollArea>
							</SectionContent>
						</TabsContent>

						<TabsContent value="education" className="w-full">
							<SectionContent
								title={educationData.title}
								description={educationData.description}
							>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
										{educationData.items.map((item, index) => (
											<ListItem key={index}>
												<span className="text-accent">{item.duration}</span>
												<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
													{item.degree}
												</h3>
												<div className="flex items-center">
													<p className="text-white/60">{item.institution}</p>
												</div>
											</ListItem>
										))}
									</ul>
								</ScrollArea>
							</SectionContent>
						</TabsContent>

						<TabsContent value="skills" className="w-full h-full">
							<SectionContent
								title={skillsData.title}
								description={skillsData.description}
							>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-8">
										{skillsData.skillList.map((skill, index) => (
											<TooltipSkill key={index} skill={skill} />
										))}
									</ul>
								</ScrollArea>
							</SectionContent>
						</TabsContent>

						<TabsContent
							value="about"
							className="w-full text-center xl:text-left"
						>
							<SectionContent
								title={aboutData.title}
								description={aboutData.description}
							>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{aboutData.info.map((item, index) => (
										<li
											key={index}
											className="flex items-center justify-center xl:justify-start gap-4"
										>
											<span className="text-white/60">{item.fieldName}</span>
											<span className="text-xl">{item.fieldValue}</span>
										</li>
									))}
								</ul>
							</SectionContent>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	)
}

export default Resume
