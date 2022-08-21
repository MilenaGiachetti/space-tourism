import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Picture from "@components/Picture";
import data from "@data/destination.json";

const Destination = () => {
	let { id } = useParams();
	let { destinations } = data;
	let [selected, setSelected] = useState<number>(0);

	useEffect(() => {
		const selectedId = destinations.findIndex((destination) => destination.name === id);
		setSelected(selectedId > -1 ? selectedId : 0)
	}, [destinations, id])

	return (
		<>
			<h1 className="c-destination__title"><span aria-hidden="true" className="c-destination__title-number">01</span> Pick your destination</h1>
			<div className="c-destination__image-ctn">
				<Picture
					alt={destinations[selected].name}
					className="c-destination__image"
					pngSrcSets={destinations[selected].images.png}
					webPSrcSets={destinations[selected].images.webp}
				/>
			</div>
			<div>
				<nav>
					<ul className="c-destination__menu">
						{
							destinations.map((destination) => (
								<li className="c-destination__menu-item" key={destination.name}>
									<NavLink
										className={(navData) => navData.isActive ? "c-destination__link c-destination__link--active" : "c-destination__link"}
										to={`/destination/${destination.name}`}
									>
										{destination.name}
									</NavLink>
								</li>
							))
						}
					</ul>
				</nav>
				<h2 className="c-destination__subtitle">{destinations[selected].name}</h2>
				<p>{destinations[selected].description}</p>
				<div>
					<div>
						<h3 className="c-destination__data-title">Avg. distance</h3>
						<p className="c-destination__data">{destinations[selected].distance}</p>
					</div>
					<div>
						<h3 className="c-destination__data-title">Est. travel time</h3>
						<p className="c-destination__data">{destinations[selected].travel}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Destination
