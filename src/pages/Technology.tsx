import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import data from "@data/technology.json";

const Technology = () => {
	let { id } = useParams();
	let { technology } = data;
	let [selected, setSelected] = useState<number>(0);

	useEffect(() => {
		const selectedId = technology.findIndex((tech) => tech.name === id);
		setSelected(selectedId > -1 ? selectedId : 0)
	}, [technology, id])

	return (
		<>
			<h1 className="c-technology__title"><span aria-hidden="true" className="c-technology__title-number">03</span> SPACE LAUNCH 101</h1>
			<div>
				<nav>
					<ul className="c-technology__menu">
						{
							technology.map((tech, index) => (
								<li key={tech.name} className="c-technology__menu-item">
									<NavLink
										className={(navData) => navData.isActive ? "c-technology__link c-technology__link--active" : "c-technology__link"}
										to={`/technology/${tech.name}`}
									>
										{index + 1}
									</NavLink>
								</li>
							))
						}
					</ul>
				</nav>
				<div>
					<h2 className="c-technology__title"><span className="c-technology__title-small">THE TERMINOLOGY…</span> {technology[selected].name}</h2>
					<p>{technology[selected].description}</p>
				</div>
			</div>
			<div className="c-technology__image-ctn">
				<img
					alt={technology[selected].name}
					className="c-technology__image"
					src={technology[selected].images.portrait}
				/>
			</div>
		</>
	)
}

export default Technology
