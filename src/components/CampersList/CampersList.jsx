// import s from './CampersList.module.css'

import CamperCard from "../CamperCard/CamperCard"

const CampersList = ({campers}) => {
	return (
		<ul>
			{campers.map(c => (
				<li key={c.id}>
					<CamperCard camper={c}/>
				</li>
			))}
		</ul>
	)
}

export default CampersList