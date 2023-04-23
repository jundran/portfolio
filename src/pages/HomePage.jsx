import { useState } from 'react'

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

function ContactForm () {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [showConfirmation, setShowConfirmation] = useState(false)
	const [sending, setSending] = useState(false)

	function handleSubmit (e) {
		e.preventDefault()
		if (sending) return
		console.log(e)
		setSending(true)
		setTimeout(() => {
			setName('')
			setEmail('')
			setMessage('')
			setShowConfirmation(true)
			setTimeout(() => setShowConfirmation(false), 5000)
			setSending(false)
		}, 400)
	}

	return (
		<form className='ContactForm' onSubmit={handleSubmit}>
			<ul>
				<li>
					<label htmlFor="sender">Name</label>
					<input id="sender" value={name} onChange={e => setName(e.target.value)} required />
				</li>
				<li>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
				</li>
				<li>
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						value={message}
						onChange={e => setMessage(e.target.value)}
						placeholder='Form not wired up yet. Message will not be sent.'
						required
					/>
				</li>
			</ul>
			<button disabled={sending || showConfirmation ? true : false} >
				{sending ? 'Sending....' : 'Submit'}
			</button>
			{showConfirmation && <p>Thank you for your message.</p>}
		</form>
	)
}

function Badge ({ image, name, link }) {
	function Inner () {
		return (
			<div className="Badge">
				<img src={image} alt={name} />
				<p>{name}</p>
			</div>
		)
	}

	if (link) return <a href={link} target="_blank" rel="noreferrer"><Inner /></a>
	return <Inner />
}
