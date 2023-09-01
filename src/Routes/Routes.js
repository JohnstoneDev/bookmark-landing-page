import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/HomePage/Home'

export const Paths = () => {
	return (
			<Routes>
				<Route exact path='/' element={<Home />}/>
			</Routes>
	)
}