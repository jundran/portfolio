import styled from 'styled-components'

export default function Notice () {
	return (
		<Container>
			<p><em>
				Please note that for full stack projects, the server uses a free tier web service hosted by <a className='simple-link'href='https://render.com/' target="_blank" rel="noreferrer">Render</a>. Front end clients are hosted on <a className='simple-link'href='https://pages.github.com/' target="_blank" rel="noreferrer">GitHub Pages</a>. The Render server sleeps when idle for 15 minutes. Please allow 15-30 seconds for the server to wake up and respond to the first network action. Subsequent use of the website will function normally.
			</em></p>
		</Container>
	)
}

const Container = styled.div`
	max-width: 640px
`
