import { useState } from 'react'
import styled from 'styled-components'
import { MOBILE } from '../styles/variables'

export default function ContactForm () {
	const [showForm, setShowForm] = useState(true)

	function handleSubmit (e) {
		e.preventDefault()

		fetch('http://localhost:6001/api/v1/message', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				sender: e.target.sender.value,
				email: e.target.email.value,
				message: e.target.message.value
			})
		}).catch(err => console.log(err))

		// Because the server will be waking from sleep, not waiting for response
		setShowForm(false)
		e.target.reset()
	}

	return (
		<>
			{showForm ?
				<Form onSubmit={handleSubmit}>
					<ul>
						<li>
							<label htmlFor="sender">Name</label>
							<input name="sender" required />
						</li>
						<li>
							<label htmlFor="email">Email</label>
							<input name="email" type="email" required />
						</li>
						<li>
							<label htmlFor="message">Message</label>
							<textarea name="message" required />
						</li>
					</ul>
					<button>Submit</button>
				</Form>
				:
				<div>
					<p><strong>Thank you. Your message has been sent.</strong></p>
					<Button onClick={() => setShowForm(true)}>Send another message</Button>
				</div>
			}
		</>
	)
}

const Form = styled.form`
	position: relative;
	width: 600px;
	max-width: 100%;

	li {
		display: grid;
		grid-template-columns: 100px 1fr;
		margin-bottom: 16px;
	}

	input {
		height: 32px;
		font-size: 1rem;
	}

	textarea {
		height: 200px;
		font-size: 1rem;
		font-family: inherit;
	}

	button {
		border: none;
		padding: 16px 0;
		width: 200px;
		background: #224;
		color: #fff;
		border-radius: 8px;
		float: right;
	}

	@media(max-width: ${MOBILE}) {
		ul { padding: 0 }
		li { grid-template-columns: 1fr }
	}
`

const Button = styled.button`
	padding: 16px;
	font-size: .9rem;
`
