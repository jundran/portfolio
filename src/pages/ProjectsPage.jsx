import { useState } from 'react'
import { projects as data } from '../data'
import Project from '../components/Project'
import Filter from '../components/Filter'
import Notice from '../components/Notice'
import ScrollButton from '../components/ScrollButton'

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

	function handleScroll () {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' })
		// focus() kills scroll animation
		setTimeout(() => document.querySelector('Header a').focus(), 500)
	}

	return (
		<main className="ProjectsPage centred">
			<Filter updateFilter={updateFilter}/>
			<Notice />
			<section className='projects' aria-label='Projects'>
				{ projects.map(project => <Project key={project.id} data={project} />) }
				{ !projects.length && <p className='no-content'>No projects match your filter.</p> }
			</section>
			{projects.length > 3 &&	<ScrollButton onClick={handleScroll} />}
		</main>
	)
}
