import Badge from '../components/Badge'
import ContactForm from '../components/ContactForm'
import styled from 'styled-components'
import { MOBILE } from '../styles/variables'
import { Link } from 'react-router-dom'

export default function HomePage () {
	return (
		<Page className="HomePage centred">
			<Intro aria-label='Introduction'>
				<div>
					<p className="caption">I am a full stack web developer and a student of the Odin Project.</p>
					<OdinLogoLink href='https://www.theodinproject.com' target='_blank' rel="noreferrer">
						<img src="skills/odin.svg" alt="odin project logo" />
					</OdinLogoLink>
				</div>
				<p><Link className='simple-link' to='/projects'>View my live deployments.</Link></p>
				<p><a className='simple-link' href='https://github.com/jundran' target='_blank' rel="noreferrer">
					View all my code on GitHub.
				</a></p>
			</Intro>
			<section aria-label='Skills'>
				<h2>Skills</h2>
				<Badges className="badges">
					<Badge image="skills/html.svg" name="HTML" />
					<Badge image="skills/css.svg" name="CSS" />
					<Badge image="skills/javascript.svg" name="JavaScript" />
					<Badge image="skills/typescript.svg" name="TypeScript" />
					<Badge image="skills/react.svg" name="React" />
					<Badge image="skills/react-router.svg" name="React Router" />
					<Badge image="skills/nextjs.svg" name="NextJS" />
					<Badge image="skills/nodejs.svg" name="NodeJS" />
					<Badge image="skills/express.svg" name="ExpressJS" />
					<Badge image="skills/mongodb.svg" name="MongoDB" />
					<Badge image="skills/supabase.svg" name="Supabase" />
					<Badge image="skills/socketio.svg" name="SocketIO" />
					<Badge image="skills/jest.svg" name="Jest" />
					<Badge image="skills/eslint.svg" name="ESLint" />
					<Badge image="skills/sass.svg" name="SASS" />
					<Badge image="skills/webpack.svg" name="Webpack" />
					<Badge image="skills/babel.svg" name="Babel" />
					<Badge image="skills/git.svg" name="Git" />
					<Badge image="skills/vite.svg" name="Vite" />
					<Badge image="skills/esbuild.svg" name="ESBuild" />
					<Badge image="skills/linux.svg" name="Linux" />
					<Badge image="skills/github.svg" name="GitHub" link="https://github.com/jundran" />
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

const Intro = styled.section`
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

const OdinLogoLink = styled.a`
	display: block;
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
