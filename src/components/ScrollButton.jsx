import styled from 'styled-components'
import { GREEN } from '../styles/variables'

export default function ScrollButton ({ onClick }) {
	return (
		<Button onClick={onClick} aria-label='Scroll to top'>
			<img src="icons/arrow-up.svg" alt="" />
		</Button>
	)
}

const Button = styled.button`
	background: none;
	margin-top: 32px;
	width: 64px;
	height: 64px;
	padding: 0;
	border: 2px solid ${GREEN};
	border-radius: 50%;
	img {	width: 80%; }
`
