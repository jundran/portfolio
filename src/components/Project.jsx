import parse from 'html-react-parser'
import styled from 'styled-components'
import { TABLET, CHARCOAL, GREEN } from '../styles/variables'

export default function Project ({ data }) {
	return (
		<Container className="Project">
			<div className="content">
				<h3>{data.title}</h3>
				<p className="stack"><span>Tech Stack: </span>{data.stack}</p>
				<ScreenShot media='tablet' src={'screenshots/' + data.image} alt={data.name} />
				<p className='desc'>{parse(data.description)}</p>
				<div className="links">
					<ProjectLink href={data.code} target='_blank' rel="noreferrer">
						<span>Code</span>
						<img src="icons/code.svg" alt="" />
					</ProjectLink>
					<ProjectLink className="live" href={data.live} target='_blank' rel="noreferrer">
						<span>Live</span>
						<img src="icons/preview.svg" alt="" />
					</ProjectLink>
				</div>
			</div>
			<ScreenShot src={'screenshots/' + data.image} alt={data.name} />
		</Container>
	)
}

const Container = styled.div`
	display: grid;
	grid-template-columns: 600px 1fr;
	@media (max-width: ${TABLET}) {
		grid-template-columns: 1fr
	}
	gap: 32px;
	color: ${CHARCOAL};
	line-height: 1.5;

	h3 {
		font-size: 1.8rem;
		font-weight: 600;
		margin: 0;
	}
	.stack {
		font-weight: 600;
		color: ${GREEN};
	}
	.desc {
		max-width: 700px;
	}
	.links {
		display: flex;
		margin-top: 24px;
	}
`

const ScreenShot = styled.img`
	display: block;
	border: 5px solid #222;
	border-radius: 8px;
	overflow: hidden;
	width: 100%;
	max-width: 500px;
	object-fit: contain;
	display: ${props => props.media === 'tablet' && 'none'};
	@media (max-width: ${TABLET}) {
		display: ${props => props.media === 'tablet' ? 'block' : 'none'};
	}
`
const ProjectLink = styled.a`
	display: flex;
	justify-content: center;
	gap: 8px;
	font-size: 1rem;
	border: 2px solid currentColor;
	border-radius: 32px;
	padding: 8px 0;
	width: 100px;
	text-align: center;
	color: #222;
	text-decoration: none;
	transition: transform .1s ease-in-out;
	&.live {
		color: ${GREEN};
		margin-left: 32px;
	}
	&:hover { transform: scale(110%); }
	img { width: 16px; }
`
