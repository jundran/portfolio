import styled from 'styled-components'
import { useState } from 'react'
import infoIcon from '../../public/icons/info.svg'

export default function Notice ({ message }) {
	const [showTooltip, setShowTooltip] = useState(false)

	return (
		<NoticeIcon
			onClick={() => setShowTooltip(!showTooltip)}
			onMouseOver={() => setShowTooltip(true)}
			onMouseOut={() => setShowTooltip(false)}
		>
			<img src={infoIcon} alt='info icon' />
			{showTooltip && <Tooltip message={message}/>}
		</NoticeIcon>
	)
}

function Tooltip ({ message }) {
	return (
		<TooltipContainer>
			<p>{message}</p>
		</TooltipContainer>
	)
}

const NoticeIcon = styled.button`
	background: none;
	border: none;
	outline-offset: -2px;
	position: relative;
	margin: 7px 0 0 -16px;
`

const TooltipContainer = styled.div`
	position: absolute;
	bottom: 60px;
	right: 0;
	background: #fff;
	width: 310px;
	max-width: 90vw;
	padding:15px;
	border: 1px solid orange;
	color: orange;
	font-size: 1rem;
	text-align: start;
	line-height: 1.4;
	border-radius: 10px;
	font-weight: 500;
	p {	margin: 0; }
`
