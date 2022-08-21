import HeaderLink from "@components/HeaderLink";

const Header = () => {
	return (
		<nav>
			<ul>
				<li>
					<HeaderLink to="/" text="home" />
				</li>
				<li>
					<HeaderLink to="/destination" text="destination" />
				</li>
				<li>
					<HeaderLink to="/crew" text="crew" />
				</li>
				<li>
					<HeaderLink to="/technology" text="technology" />
				</li>
			</ul>
		</nav>
	);
}

export default Header
