import React from "react";

// importing smaller components
import NavbarListItem from "./NavbarListItem";

export default function NavbarList() {
	return (
		<div className="nav-top-div d-flex text-start pt-3">
			<nav>
				<ul className="ps-0">
					<NavbarListItem navListText="Home" navListUrl="/" />
					<NavbarListItem navListText="About" navListUrl="/about" />
					<NavbarListItem navListText="Projects" navListUrl="projects" />
					<NavbarListItem navListText="Contact" navListUrl="/contact" />
				</ul>
			</nav>
		</div>
	);
}
