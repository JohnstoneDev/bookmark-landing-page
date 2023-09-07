import chrome from '../../Assets/images/logo-chrome.svg'
import firefox from '../../Assets/images/logo-firefox.svg'
import opera from '../../Assets/images/logo-opera.svg'

import { IconCard } from './IconCard'


export const Download = () => {
	return (
		<section className='p-12 space-y-12 text-center'>
			<div className='space-y-8 pb-4'>
				<h3 className='text-heading text-very-dark-blue'>Download the extension</h3>
				<p className='text-grayish-blue'>We’ve got more browsers in the pipeline. Please do let us know if you’ve
				got a favourite you’d like us to prioritize.
				</p>
			</div>
			<div className='flex mobile:flex-col max-mobile:flex-col desktop:flex-row items-center justify-center gap-8 space-y-6'>
				<IconCard icon={chrome} service={"Chrome"} details={"62"}/>
				<IconCard icon={firefox} service={"Firefox"} details={"62"}/>
				<IconCard icon={opera} service={"Opera"} details={"62"}/>
			</div>
		</section>
	)
}