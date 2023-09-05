import {
	useState
} from "react"

import tab1 from "../../Assets/images/illustration-features-tab-1.svg"
import tab2 from "../../Assets/images/illustration-features-tab-2.svg"
import tab3 from "../../Assets/images/illustration-features-tab-3.svg"

import { Box } from "../BoxView/Box"
import { Button } from "../Buttons/Button"

const OverlayLeft = ({ image }) => {
	return (
		<div className='min-w-screen pt-12 mobile:h-[350px] max-mobile:h-[350px]'>
			<img src={image} alt="" className='absolute z-50'/>
			<div className='relative bg-soft-blue rounded-ss-[600px] rounded-e-[600px] min-w-full
			z-10 w-full p-44 ml-[-400px]'>
			</div>
		</div>
	)
}

const FeatureBox = ({ title, details, image }) => {
	return (
		<Box>
			<OverlayLeft image={image} />
			<div className="flex flex-col desktop:text-left space-y-8 h-fit max-w-screen">
				<h3 className="text-section text-very-dark-blue">{title}</h3>
				<p className="text-grayish-blue">{details}</p>
				<Button
					coloring={"bg-soft-blue text-whitish mobile:hidden max-mobile:hidden desktop:inline-block"}>
					More Info
				</Button>
			</div>
		</Box>
	)
}


export const Features = () => {
	const options = [
		{
			id : 1,
			title : "Bookmark in one click",
			image : tab1,
			details : "Organize your bookmarks however you like. Our Simple drag-and-drop interface gives you complete control over how you manage your favorite sites"
		},
		{
			id : 2,
			title : "Intelligent Search",
			image : tab2,
			details : "Our pewerful search feature will help you find saved sites in no time at all. No need to trawl through all your bookmarks"
		},
		{
			id : 3,
			title : "Share your bookmarks",
			image : tab3,
			details : "Easily share your bookmarks and collections with others. Create a shareabe link you can send at the click of a button."
		}
	]

	const [ details, setDetails ] = useState(options[0])

	const switchInfo = (id) => {
		let info = options.find(opt => opt.id === id)
		setDetails(info)
	}

	return (
		<div className="space-y-6 gap-4 flex flex-col mobile:pt-8 desktop:pt-0">
			<section className="text-center flex flex-col space-y-4 text-grayish-blue">
				<h2 className="text-heading text-very-dark-blue">Features</h2>
				<p>Our aim is to make it quick and easy for you to access your favorite websites.
				Your bookmarks sync between yout devices so you can access them on the go.</p>
			</section>

			<section className="pt-2 text-center text-[20px] mobile:flex mobile:flex-col desktop:grid desktop:grid-cols-3 gap-4 max-mobile:flex max-mobile:flex-col text-very-dark-blue">
					{[
						['Bookmark in one click', 1],
						['Intelligent Search', 2],
						['Share your bookmarks', 3],
					].map(([title, id]) => (
						<button onClick={() => switchInfo(id)} className="p-2 active:border-b-4 focus:border-b-4 border-b-soft-red">{title}</button>
					))}
			</section>

			<FeatureBox {...details}/>
		</div>
	)
}