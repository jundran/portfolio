import { HashRouter, Routes, Route } from 'react-router-dom'
import '../styles/fonts/source-sans-pro.css'
import '../styles/App.css'
import Header from './Header'
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'

export default function App () {
	return (
		<HashRouter>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/projects' element={<ProjectsPage />} />
			</Routes>
		</HashRouter>
	)
}
