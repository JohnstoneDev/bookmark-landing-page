export const Button = ({ children, coloring }) => {
	return (
		<button
			className={`text-button p-4 rounded-lg min-w-fit w-[150px] h-fit ${coloring} shadow-2xl hover:bg-whitish hover:text-very-dark-blue
			hover:border-2`}>
				{children}
		</button>
	)
}
