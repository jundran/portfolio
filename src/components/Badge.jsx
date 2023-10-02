import styled from 'styled-components'

export default function Badge ({ image, name, link }) {
	function Inner () {
		return (
			<Container>
				<img src={image} alt={name} />
				<p>{name}</p>
			</Container>
		)
	}

	if (link) return <a href={link} target="_blank" rel="noreferrer"><Inner /></a>
	return <Inner />
}

const Container = styled.button`
	background: none;
	border: 1px dotted #999;
	width: 125px;
	height: 125px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 16px;
	@media(max-width: 450px) {
		width: 150px;
		height: 150px;
	}
	img {
		width: 75%;
		height: 75%;
	}
	p {
		margin: 0;
		text-align: center;
	}
`
