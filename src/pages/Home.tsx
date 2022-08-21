import { NavLink } from "react-router-dom"

const Home = () => {
	return (
		<>
			<div className="c-home__text-ctn">
				<h1 className="c-home__title">
					<span className="c-home__title-small">SO, YOU WANT TO TRAVEL TO</span>
					Space
				</h1>
				<p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
			</div>
			<div className="c-home__button-ctn">
				<NavLink className="c-home__link" to="/destination">Explore</NavLink>
			</div>
		</>
	)
}

export default Home
