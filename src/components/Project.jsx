import parse from 'html-react-parser'

export default function Project ({ data }) {
	return (
		<div className="Project">
			<div className="content">
				<h3>{data.title}</h3>
				<p className="stack"><span>Tech Stack: </span>{data.stack}</p>
				<div className="screenshot mobile">
					<img src={'screenshots/' + data.image} alt={data.name} />
				</div>
				<p className='desc'>{parse(data.description)}</p>
				<div className="links">
					<a href={data.code} target='_blank' rel="noreferrer" className="code">
						<span>Code</span>
						<img src="icons/code.svg" alt="" />
					</a>
					<a href={data.live} target='_blank' rel="noreferrer" className="live">
						<span>Live</span>
						<img src="icons/preview.svg" alt="" />
					</a>
				</div>
			</div>
			<div className="screenshot desktop">
				<img src={'screenshots/' + data.image} alt={data.name} />
			</div>
		</div>
	)
}
