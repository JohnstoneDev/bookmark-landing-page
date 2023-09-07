import { useState } from "react"

import arrow from '../../Assets/images/icon-arrow.svg'
import close from '../../Assets/images/icon-close.svg'
import { Button } from "../Buttons/Button"

const Details = ({ question, answer }) => {
	const [ expand, setExpand ] = useState(true)

	return (
		<section className="p-6 space-y-4">
			<div className={`flex justify-between items-center p-2 ${!expand ? "border-b-0" : "border-b-2 border-b-grayish-blue"}`}>
				<h4 className="text-button text-very-dark-blue">{question}</h4>
				<button onClick={() => setExpand(!expand)}>
					<img src={expand ? arrow : close } alt="icon" />
				</button>
			</div>

			<div hidden={expand} className="p-2">
				{answer}
			</div>
		</section>
	)
}


export const DetailsSection = () => {
	return (
		<div className="text-grayish-blue space-y-8 p-6 flex flex-col items-center justify-center">
			<article className="text-center space-y-6">
				<h3 className="text-heading text-very-dark-blue"> Frequently Asked Questions </h3>
				<p>  Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
			</article>
			<section className="desktop:w-1/2">
				{questions.map((question) => <Details key={question.id} {...question}/>)}
			</section>

			<Button coloring={"text-whitish bg-soft-blue"}> More Info </Button>
		</div>
	)
}


const questions = [
	{
		id : 1,
		question : 'What is a Bookmark?',
		answer : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
	},
	{
		id : 2,
		question : 'How can I request a new browser?',
		answer : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
	},
	{
		id : 3,
		question : 'What is a Bookmark?',
		answer : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
	},
	{
		id : 5,
		question : 'Is there a mobile app?',
		answer : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
	},
	{
		id : 4,
		question : 'What about other Chromium browser?',
		answer : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
	},
]
