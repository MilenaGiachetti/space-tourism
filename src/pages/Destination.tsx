import { useParams } from 'react-router-dom';

type Props = {}

const Destination = (props: Props) => {
	let { id } = useParams();

	return (
		<div>Destination {id}</div>
	)
}

export default Destination
