import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Picture from "@components/Picture";
import data from "@data/crew.json";

const Crew = () => {
	let { id } = useParams();
	let { crew } = data;
	let [selected, setSelected] = useState<number>(0);

	useEffect(() => {
		const selectedId = crew.findIndex((member) => member.name === id);
		setSelected(selectedId > -1 ? selectedId : 0)
	}, [crew, id])

	return (
		<>
			<h1 className="c-crew__title"><span aria-hidden="true" className="c-crew__title-number">02</span> Meet your crew</h1>
			<div className="c-crew__text-ctn">
				<p className="c-crew__role">{crew[selected].role}</p>
				<h2 className="c-crew__subtitle">{crew[selected].name}</h2>
				<p>{crew[selected].bio}</p>
			</div>
			<nav>
				<ul className="c-crew__menu">
					{
						crew.map((member) => (
							<li className="c-crew__menu-item" key={member.name}>
								<NavLink
									className={(navData) => navData.isActive ? "c-crew__link c-crew__link--active" : "c-crew__link"}
									to={`/crew/${member.name}`}
								>
									<span className="c-crew__sr-only">{member.name}</span>
								</NavLink>
							</li>
						))
					}
				</ul>
			</nav>
			<div>
				<Picture
					alt={crew[selected].name}
					className="c-crew__image"
					pngSrcSets={crew[selected].images.png}
					webPSrcSets={crew[selected].images.webp}
				/>
			</div>
		</ >
	)
}

export default Crew
