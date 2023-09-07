import logo from '../../Assets/images/logo-bookmark.svg'
// import hero from '../../Assets/images/icon-hamburger.svg'

import { Button } from '../Buttons/Button'

export const NavBar = () => {
	return (
		<nav className='p-3 grid grid-cols-2 gap-4 items-center'>
			<img src={logo} alt="" className='max-h-fit'/>
			<div className='desktop:flex mobile:hidden max-mobile:hidden items-center justify-between'>
					{[
						['Features', 'features', 1],
						['Pricing', 'pricing', 2],
						['Contact', 'Contact',3 ],
					].map(([title, link, id]) => (
						<p className='cursor-pointer' key={id}>{title}</p>
					))}
				<Button coloring={"bg-soft-red"}>Login</Button>
			</div>
		</nav>
	)
}