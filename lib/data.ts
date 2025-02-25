import React from 'react'

import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaNodeJs,
	FaFigma,
	FaGitSquare,
	FaAngular,
	FaSass,
	FaWordpress,
	FaPhp,
	FaInvision,
	FaSketch,
	FaBootstrap,
} from 'react-icons/fa'
import {
	SiTypescript,
	SiTailwindcss,
	SiStyledcomponents,
	SiNextdotjs,
	SiJest,
	SiLodash,
	SiCypress,
	SiJira,
	SiRedux,
	SiMongodb,
	SiGraphql,
	SiExpress,
	SiApollographql,
	SiReactquery,
} from 'react-icons/si'
import { TbBrandFramerMotion, TbBrandBackbone } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io5'

export const links = [
	{
		name: 'home',
		path: '/',
	},
	{
		name: 'resume',
		path: '/resume',
	},
	{
		name: 'projects',
		path: '/projects',
	},
	{
		name: 'contact',
		path: '/contact',
	},
] as const

export const info = [
	{
		icon: React.createElement(FaPhoneAlt),
		title: 'Phone',
		description: '(+351) 91 859 2011',
	},
	{
		icon: React.createElement(FaEnvelope),
		title: 'Email',
		description: 'ines.arts@hotmail.com',
	},
	{
		icon: React.createElement(FaMapMarkerAlt),
		title: 'Address',
		description: 'Lisbon, Portugal',
	},
] as const

// About
export const aboutData = {
	title: 'About Me',
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.',
	info: [
		{
			fieldName: 'Name',
			fieldValue: 'Inês Catana',
		},
		{
			fieldName: 'Phone',
			fieldValue: '+351 91 859 2011',
		},
		{
			fieldName: 'Experience',
			fieldValue: '9 Years',
		},
		{
			fieldName: 'Nationality',
			fieldValue: 'Portuguese',
		},
		{
			fieldName: 'Email',
			fieldValue: 'ines.arts@hotmail.com',
		},
		{
			fieldName: 'Freelance | Permanent',
			fieldValue: 'Available',
		},
		{
			fieldName: 'Languages',
			fieldValue: 'Portuguese, English, Spanish',
		},
	],
} as const

// Experience
export const experiencesData = {
	title: 'My Experience',
	description:
		"I've been working as a developer since 2015, starting as a Fullstack and then embarking on the Frontend journey. I've been working with ReactJS since 2018 and plan to continue, especially with NextJS and Typescript.",
	items: [
		{
			duration: '2023 - Present',
			position: 'Frontend Teacher',
			company: 'EDIT. - Disruptive Digital Education',
			icon: [
				React.createElement(FaHtml5),
				React.createElement(FaCss3),
				React.createElement(FaGitSquare),
				React.createElement(FaReact),
			],
			name: ['HTML5', 'CSS3', 'Git', 'ReactJS'],
		},
		{
			duration: '2022 - Present',
			position: 'Lead Frontend Developer',
			company: 'DEUS: human(ity)-centered AI',
			icon: [
				React.createElement(FaHtml5),
				React.createElement(FaCss3),
				React.createElement(IoLogoJavascript),
				React.createElement(SiTypescript),
				React.createElement(SiLodash),
				React.createElement(FaReact),
				React.createElement(SiReactquery),
				React.createElement(SiStyledcomponents),
				React.createElement(SiJest),
				React.createElement(SiCypress),
				React.createElement(SiJira),
				React.createElement(FaFigma),
			],
			name: [
				'HTML5',
				'CSS3',
				'JavaScript',
				'TypeScript',
				'Lodash',
				'ReactJS',
				'React Query',
				'Styled Components',
				'Jest',
				'Cypress',
				'Jira',
				'Figma',
			],
		},
		{
			duration: '2020 - 2022',
			position: 'Frontend Developer',
			company: 'Cartrack',
			icon: [
				React.createElement(FaHtml5),
				React.createElement(FaCss3),
				React.createElement(IoLogoJavascript),
				React.createElement(SiTypescript),
				React.createElement(SiLodash),
				React.createElement(FaReact),
				React.createElement(SiReactquery),
				React.createElement(SiRedux),
				React.createElement(SiStyledcomponents),
				React.createElement(FaInvision),
				React.createElement(SiJira),
			],
			name: [
				'HTML5',
				'CSS3',
				'JavaScript',
				'TypeScript',
				'Lodash',
				'ReactJS',
				'React Query',
				'Redux',
				'Styled Components',
				'Invision',
				'Jira',
			],
		},
		{
			duration: '2020 - 2020',
			position: 'Frontend Developer',
			company: 'Harding Scott',
			icon: [
				React.createElement(FaHtml5),
				React.createElement(FaCss3),
				React.createElement(IoLogoJavascript),
				React.createElement(SiTypescript),
				React.createElement(FaReact),
				React.createElement(SiRedux),
				React.createElement(FaFigma),
			],
			name: [
				'HTML5',
				'CSS3',
				'JavaScript',
				'TypeScript',
				'ReactJS',
				'Redux',
				'Figma',
			],
		},
		{
			duration: '2018 - 2019',
			position: 'Frontend Developer',
			company: 'Growin',
			icon: [
				React.createElement(FaHtml5),
				React.createElement(FaCss3),
				React.createElement(IoLogoJavascript),
				React.createElement(SiTypescript),
				React.createElement(FaReact),
				React.createElement(SiRedux),
				React.createElement(SiStyledcomponents),
				React.createElement(FaFigma),
			],
			name: [
				'HTML5',
				'CSS3',
				'JavaScript',
				'TypeScript',
				'ReactJS',
				'Redux',
				'Styled Components',
				'Figma',
			],
		},
		{
			duration: '2017 - 2018',
			position: 'Frontend Developer',
			company: 'Novabase',
			icon: [
				React.createElement(FaHtml5),
				React.createElement(FaCss3),
				React.createElement(IoLogoJavascript),
				React.createElement(FaBootstrap),
				React.createElement(FaSketch),
				React.createElement(SiJira),
			],
			name: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Sketch', 'Jira'],
		},
		{
			duration: '2016 - 2017',
			position: 'Frontend Developer',
			company: 'Altran',
			icon: [
				React.createElement(FaHtml5),
				React.createElement(FaCss3),
				React.createElement(FaSass),
				React.createElement(IoLogoJavascript),
				React.createElement(FaBootstrap),
			],
			name: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'Bootstrap'],
		},
		{
			duration: '2016 - 2016',
			position: 'Frontend Developer',
			company: 'Decskill',
			icon: [
				React.createElement(FaHtml5),
				React.createElement(FaCss3),
				React.createElement(FaSass),
				React.createElement(IoLogoJavascript),
				React.createElement(FaAngular),
				React.createElement(FaBootstrap),
			],
			name: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'Angular', 'Bootstrap'],
		},
		{
			duration: '2015 - 2016',
			position: 'FullStack Developer',
			company: 'East Atlantic Engineering',
			icon: [
				React.createElement(FaHtml5),
				React.createElement(FaCss3),
				React.createElement(FaSass),
				React.createElement(IoLogoJavascript),
				React.createElement(TbBrandBackbone),
				React.createElement(FaWordpress),
				React.createElement(FaPhp),
				React.createElement(FaSketch),
				React.createElement(FaInvision),
			],
			name: [
				'HTML5',
				'CSS3',
				'SASS',
				'JavaScript',
				'BackboneJS',
				'Wordpress',
				'PHP',
				'Sketch',
				'InVision',
			],
		},
	],
} as const

// Education
export const educationData = {
	title: 'My Education',
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.',
	items: [
		{
			institution: 'React GraphQL Academy',
			degree: 'React, Redux Course',
			duration: '2020-2020',
		},
		{
			institution: 'Code for All_',
			degree: 'FullStack Programming Bootcamp',
			duration: '2019-2019',
		},
		{
			institution: 'ETIC',
			degree: 'Web Development Course',
			duration: '2014 - 2015',
		},
		{
			institution: 'ESCS - School of Communication and Media Studies',
			degree: 'Bachelor of Audiovisual and Multimedia',
			duration: '2011 - 2014',
		},
	],
} as const

// Skills
export const skillsData = {
	title: 'My Skills',
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.',
	skillList: [
		{
			icon: React.createElement(FaHtml5),
			name: 'HTML5',
		},
		{
			icon: React.createElement(FaCss3),
			name: 'CSS3',
		},
		{
			icon: React.createElement(FaJs),
			name: 'JavaScript',
		},
		{
			icon: React.createElement(SiTypescript),
			name: 'TypeScript',
		},
		{
			icon: React.createElement(FaReact),
			name: 'ReactJS and React Native',
		},
		{
			icon: React.createElement(SiNextdotjs),
			name: 'NextJS',
		},
		{
			icon: React.createElement(SiRedux),
			name: 'Redux',
		},
		{
			icon: React.createElement(SiReactquery),
			name: 'React Query',
		},
		{
			icon: React.createElement(SiStyledcomponents),
			name: 'Styled Components',
		},
		{
			icon: React.createElement(SiTailwindcss),
			name: 'TailwindCSS',
		},
		{
			icon: React.createElement(TbBrandFramerMotion),
			name: 'Framer Motion',
		},
		{
			icon: React.createElement(FaNodeJs),
			name: 'NodeJS',
		},
		{
			icon: React.createElement(SiMongodb),
			name: 'MongoDB',
		},
		{
			icon: React.createElement(SiExpress),
			name: 'Express',
		},
		{
			icon: React.createElement(SiGraphql),
			name: 'GraphQL',
		},
		{
			icon: React.createElement(SiApollographql),
			name: 'Apollo',
		},
	],
} as const

// Projects
export const projects = [
	{
		num: '01',
		category: 'frontend',
		title: 'project 1',
		description:
			'SaaS app with AI-powered features like text-to-multiple-voices functionality and AI-generated images with Next.js 14 and Convex.',
		stack: [
			{ name: 'NextJS' },
			{ name: 'ReactJS' },
			{ name: 'Typescript' },
			{ name: 'TailwindCSS' },
			{ name: 'ShadcnUI' },
			{ name: 'OpenAI' },
			{ name: 'Convex' },
			{ name: 'Clerk' },
		],
		image: '/assets/project1.png',
		live: 'https://ai-podcaster-app.vercel.app/',
		github: 'https://github.com/inesscatana/ai-podcast-app',
	},
]
