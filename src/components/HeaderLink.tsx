import { NavLink } from 'react-router-dom'

type tHeaderLinkProps = {
	text: string,
	to: string,
}

const HeaderLink = ({ to, text }: tHeaderLinkProps) => {
	return (
		<NavLink
			to={to}
			className={(navData) => navData.isActive ? "header-link header-link--active" : "header-link"}
		>
			{text}
		</NavLink>
	)
}

export default HeaderLink
