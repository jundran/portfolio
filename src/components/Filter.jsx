import { useState } from 'react'
import styled from 'styled-components'
import { tags } from '../data'
import { MOBILE, CHARCOAL } from '../styles/variables'

export default function Filter ({ updateFilter }) {
	const openFilter = tags.map(tag => { return {tag, checked: false} })
	const [enabledValues, setEnabledValues] = useState(openFilter)

	function handleChange (index) {
		let copy = [...enabledValues]
		copy[index].checked = !copy[index].checked
		setEnabledValues(copy)
		updateFilter(copy)
	}

	function handleClear () {
		setEnabledValues(openFilter)
		updateFilter(openFilter)
	}

	return (
		<Container className="Filter">
			<h2>Show projects that utilize <span>all</span> selected features</h2>
			<form aria-label='Show projects that utilize all checked features'>
				<ul>
					{enabledValues.map((item, index) => (
						<li key={item.tag}>
							<label htmlFor={item.tag}>{item.tag}</label>
							<input
								id={item.tag}
								checked={item.checked}
								onChange={() => handleChange(index)}
								type="checkbox"
							/>
						</li>
					))}
					<li><button type="button" onClick={handleClear}>Clear</button></li>
				</ul>
			</form>
		</Container>
	)
}

const Container = styled.div`
	color: ${CHARCOAL};
	margin-bottom: 32px;
	h2 {
		font-size: 1.2rem;
		margin-bottom: 8px;
		span { color: orangered; }
	}
	ul {
		display: flex;
		gap: 32px;
		border: 1px dotted ${CHARCOAL};
		width: fit-content;
		margin: 0;
		padding: 16px;
	}

	@media (max-width: ${MOBILE}) {
		ul {
			flex-direction: column;
			gap: 8px;
		}
		li {
			display: grid;
			grid-template-columns: 170px 50px;
		}
		button { width: 90px; }
	}
`
