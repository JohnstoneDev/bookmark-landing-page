export const Button = ({ children, coloring }) => {
	return (
		<button
			className={`text-button p-4 rounded-lg min-w-fit w-[150px] h-fit ${coloring} shadow-2xl hover:bg-whitish hover:text-very-dark-blue
			hover:border-[2px] border-[2px] border-transparent hover:border-soft-blue`}>
				{children}
		</button>
	)
}
