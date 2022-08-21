import { useParams } from 'react-router-dom';

type Props = {}

const Crew = (props: Props) => {
	let { id } = useParams();

	return (
		<div>Crew {id}</div>
	)
}

export default Crew
