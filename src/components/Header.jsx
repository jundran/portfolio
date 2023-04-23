import { Link } from 'react-router-dom'

export default function Header () {
	return (
		<header className='Header'>
			<ul className='centred'>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/projects'>Projects</Link></li>
			</ul>
		</header>
	)
}
