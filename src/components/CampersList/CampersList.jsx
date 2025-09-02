// import s from './CampersList.module.css'

const CampersList = ({campers}) => {
	

	return (
		<ul>
			{campers.map(c => (
				<li key={c.id}>{c.name}</li>
			))}
		</ul>
	)
}

export default CampersList