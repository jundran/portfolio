import Badge from '../components/Badge'
import ContactForm from '../components/ContactForm'

export default function HomePage () {
	return (
		<main className="HomePage centred">
			<section className="top" aria-label='Introduction'>
				<p className="caption">I am a full stack web developer and a student of the Odin Project.</p>
				<a href='https://www.theodinproject.com' target='_blank' rel="noreferrer">
					<img className="odin" src="skills/odin.svg" alt="odin project logo" />
				</a>
			</section>
			<section className="skills" aria-label='Skills'>
				<h2>Skills</h2>
				<div className="badges">
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
				</div>
			</section>
			<section className="contact" aria-label='Contact'>
				<h2>Contact</h2>
				<p className='caption'>I am looking for oportunities to work as a web developer.</p>
				<ContactForm />
			</section>
		</main>
	)
}
