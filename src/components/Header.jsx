import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Header () {
	return (
		<Container>
			<ul className='centred'>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/projects'>Projects</Link></li>
			</ul>
		</Container>
	)
}

const Container = styled.header`
	background: #224;
	color: #fff;

	ul {
		display: flex;
		gap: 64px;
		padding: 16px;
		margin: 0;
	}

	a {
		text-decoration: none;
		color: #fff;
		font-size: 1.5rem;
		font-weight: 600;
	}
`
