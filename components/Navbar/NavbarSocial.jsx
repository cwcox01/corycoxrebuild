import React from "react";

// importing smaller navbar component
import NavbarSocialList from "./NavbarSocialList";

export default function NavbarSocial() {
	return (
		<div className="pt-3">
			<h3 className="mb-0">Cory Cox</h3>
			<p>Full Stack Developer</p>
			<NavbarSocialList />
		</div>
	);
}
