import React, { useState } from "react";

// importing smaller navbar components
import NavbarContent from "./NavbarContent";

export default function Navbar() {
	// Define state to keep track of whether the menu is open or closed
	const [isOpen, setIsOpen] = useState(false);

	if (typeof document !== "undefined") {
		if (isOpen === true) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}
	}

	// Define a function to toggle the state when the hamburger icon is clicked
	function toggleMenu() {
		setIsOpen(!isOpen);
	}

	return (
		<div className={`navbar-list`}>
			{isOpen ? (
				<button className="hamburger" onClick={toggleMenu}>
					<i class="fa-regular fa-x"></i>{" "}
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
