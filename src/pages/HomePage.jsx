import Badge from '../components/Badge'
import ContactForm from '../components/ContactForm'
import styled from 'styled-components'
import { MOBILE } from '../styles/variables'

export default function HomePage () {
	return (
		<Page className="HomePage centred">
			<Top aria-label='Introduction'>
				<p className="caption">I am a full stack web developer and a student of the Odin Project.</p>
				<a href='https://www.theodinproject.com' target='_blank' rel="noreferrer">
					<img className="odin" src="skills/odin.svg" alt="odin project logo" />
				</a>
			</Top>
			<section aria-label='Skills'>
				<h2>Skills</h2>
				<Badges className="badges">
					<Badge image="skills/html.svg" name="HTML" />
					<Badge image="skills/css.svg" name="CSS" />
					<Badge image="skills/javascript.svg" name="JavaScript" />
					<Badge image="skills/typescript.svg" name="TypeScript" />
					<Badge image="skills/react.svg" name="React" />
					<Badge image="skills/react-router.svg" name="React Router" />
					<Badge image="skills/nodejs.svg" name="NodeJS" />
					<Badge image="skills/express.svg" name="ExpressJS" />
					<Badge image="skills/mongodb.svg" name="MongoDB" />
					<Badge image="skills/jest.svg" name="Jest" />
					<Badge image="skills/webpack.svg" name="Webpack" />
					<Badge image="skills/babel.svg" name="Babel" />
					<Badge image="skills/github.svg" name="GitHub" link="https://github.com/jundran" />
					<Badge image="skills/git.svg" name="Git" />
					<Badge image="skills/sass.svg" name="SASS" />
					<Badge image="skills/linux.svg" name="Linux" />
				</Badges>
			</section>
			<Contact className="contact" aria-label='Contact'>
				<h2>Contact</h2>
				<p className='caption'>I am looking for oportunities to work as a web developer.</p>
				<ContactForm />
			</Contact>
		</Page>
	)
}

const Page = styled.main`
	section { margin-bottom: 64px }
	h2 { font-size: 2rem }
`

const Top = styled.section`
	font-size: 2rem;
	font-weight: 700;
	color: #444;
	p {
		font-size: 2rem;
		margin-bottom: 32px;
	}
	img {
		width: 512px;
		max-width: 90vw;
	}
`

const Badges = styled.div`
	display: flex;
	gap: 32px;
	flex-wrap: wrap;
	@media(max-width: ${MOBILE}) {
		gap: 16px;
		justify-content: center;
	}
`

const Contact = styled.section`
	color: #999;
	font-size: 1.5rem;
	margin-bottom: 32px;
`
