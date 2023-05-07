import React from "react";

// importing smaller navbar components
import NavbarContent from "./NavbarContent";

export default function Navbar() {
	return (
		<div className="d-flex text-center side-bar-nav">
			<NavbarContent />
		</div>
	);
}
