import { useParams } from 'react-router-dom';

type Props = {}

const Technology = (props: Props) => {
	let { id } = useParams();

	return (
		<div>Technology {id}</div>
	)
}

export default Technology
