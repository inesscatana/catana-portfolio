import Link from 'next/link'
import { FaDev, FaGithub, FaLinkedinIn } from 'react-icons/fa'

interface SocialProps {
	containerStyles: string
	iconStyles: string
}

const socials = [
	{ icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/inescatana/' },
	{ icon: <FaGithub />, path: 'https://github.com/inesscatana' },
	{ icon: <FaDev />, path: 'https://dev.to/inescatana' },
]

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => (
				<Link key={index} href={item.path} legacyBehavior>
					<a className={iconStyles} target="_blank" rel="noopener noreferrer">
						{item.icon}
					</a>
				</Link>
			))}
		</div>
	)
}

export default Social
