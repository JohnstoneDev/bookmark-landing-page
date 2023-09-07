import hero from '../../Assets/images/illustration-hero.svg'
import { Button } from '../Buttons/Button'


export const Box = ({ children }) => {
	return (
		<div className="desktop:grid desktop:grid-cols-2 mobile:flex mobile:flex-col-reverse max-mobile:flex max-mobile:flex-col-reverse
		p-4 max-mobile:text-center mobile:text-center justify-evenly max-w-screen">
			{ children }
		</div>
	)
}


export const TopBox = () => {
	return (
			<Box>
				<div className='flex flex-col desktop:text-left space-y-8 h-fit max-w-screen'>
					<h1 className='text-very-dark-blue text-heading'>A Simple Bookmarks Manager</h1>
					<p className='text-grayish-blue'>
						A clean and simple interface to organiPze your favorite websites. Open a new browser tab and see your sites load instantly
						Try it for free
					</p>
					<div className='space-x-8 pt-2.5 flex mobile:items-center mobile:justify-center max-mobile:items-center max-mobile:justify-center desktop:items-start desktop:justify-start'>
						<Button coloring={"bg-soft-blue text-whitish"}>Get it on Chrome</Button>
						<Button>Get it on Firefox</Button>
					</div>
				</div>

				<OverlayBox image={hero} alt="" />
			</Box>
	)
}


export const OverlayBox = ({ image }) => {
	return (
		<div className='min-w-screen'>
			<img src={image} alt="" className='z-50 absolute'/>
			<div className='relative bg-soft-blue mobile:p-36 mobile:m-28 max-mobile:p-18 max-mobile:m-16 rounded-es-[600px]
			rounded-ss-[600px] desktop:p-44 desktop:m-44 z-10 min-w-full desktop:w-[600px] mobile:w-screen-mobile'>
			</div>
		</div>
	)
}

