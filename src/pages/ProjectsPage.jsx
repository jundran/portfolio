import { useState } from 'react'
import { projects as data, tags } from '../data'
import Project from '../components/Project'

export default function ProjectsPage () {
	const [projects, setProjects] = useState(data)

	function updateFilter (filterArray) {
		setProjects(data.filter(project => {
			for (const item of filterArray) {
				if (item.checked && !project.tags.includes(item.tag)) return false
			}
			return true
		}))
	}

	function handleClick () {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' })
		// focus() kills scroll animation
		setTimeout(() => document.querySelector('Header a').focus(), 500)
	}

	return (
		<main className="ProjectsPage centred">
			<Filter updateFilter={updateFilter}/>
			<section className='projects' aria-label='Projects'>
				{ projects.map(project => <Project key={project.id} data={project} />) }
				{ !projects.length && <p className='no-content'>No projects match your filter.</p> }
			</section>
			{projects.length > 3 &&
			<button className='scroll-button' onClick={handleClick} aria-label='Scroll to top'>
				<img src="/icons/arrow-up.svg" alt="" />
			</button>}
		</main>
	)
}

function Filter ({ updateFilter }) {
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
		<div className="Filter">
			<h2>Show projects with all selected features</h2>
			<form aria-label='Show projects with all checked features'>
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
		</div>
	)
}
