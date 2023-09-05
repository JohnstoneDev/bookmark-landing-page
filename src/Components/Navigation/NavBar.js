import logo from '../../Assets/images/logo-bookmark.svg'
// import hero from '../../Assets/images/icon-hamburger.svg'

import { Button } from '../Buttons/Button'

export const NavBar = () => {
	return (
		<nav className='p-3 grid grid-cols-2 gap-4 items-center'>
			<img src={logo} alt="" className='max-h-fit'/>
			<div className='desktop:flex mobile:hidden max-mobile:hidden items-center justify-between'>
					{[
						['Features', 'features'],
						['Pricing', 'pricing'],
						['Contact', 'Contact'],
					].map(([title, link]) => (
						<p className='cursor-pointer'>{title}</p>
					))}
				<Button coloring={"bg-soft-red"}>Login</Button>
			</div>
		</nav>
	)
}