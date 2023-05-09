import React, { useState } from "react";

// importing smaller navbar components
import NavbarContent from "./NavbarContent";

export default function Navbar() {
	// Define state to keep track of whether the menu is open or closed
	const [isOpen, setIsOpen] = useState(false);

	// Define a function to toggle the state when the hamburger icon is clicked
	function toggleMenu() {
		setIsOpen(!isOpen);
	}

	return (
		<div className={`navbar-list`}>
			{isOpen ? (
				<button className="hamburger" onClick={toggleMenu}>
					X
				</button>
			) : (
				<button className="hamburger" onClick={toggleMenu}>
					<span></span>
					<span></span>
					<span></span>
				</button>
			)}
			<NavbarContent isOpen={isOpen} />
		</div>
	);
}
