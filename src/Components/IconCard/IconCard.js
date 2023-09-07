import dots from '../../Assets/images/bg-dots.svg'
import { Button } from '../Buttons/Button'

export const IconCard = ({ icon, service, details }) => {
	return (
		<div className='gap-y-2.5 shadow-2xl p-5 w-[350px] rounded-2xl h-[450px] bg-whitish  flex flex-col items-center justify-evenly'>
				<img src ={icon} alt="" />
				<article className='space-y-5'>
					<h4 className='text-section text-very-dark-blue'>Add to {service}</h4>
					<p className='text-grayish-blue'>Minimum version {details}</p>
				</article>
				<img src={dots} alt="" className='w-full'/>
				<Button coloring={"bg-soft-blue text-whitish"}>
					Add & Install extension
				</Button>
		</div>
	)
}