import { FaPaperPlane } from 'react-icons/fa'

// components
import { Button } from '@/components/ui/button'

import { useFormStatus } from 'react-dom'

export default function SubmitBtn() {
	const { pending } = useFormStatus()

	return (
		<Button
			type="submit"
			className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-primary text-white dark:text-primary rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-accent"
			disabled={pending}
		>
			{pending ? (
				<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
			) : (
				<>
					Submit
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
				</>
			)}
		</Button>
	)
}
