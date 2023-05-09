import React, { useState, useEffect, useRef } from "react";

// importing smaller navbar components
import NavbarImage from "./NavbarImage";
import NavbarSocial from "./NavbarSocial";
import NavbarList from "./NavbarList";

export default function NavbarContent({ isOpen }) {
	const today = new Date();
	const year = today.getFullYear();

	return (
		<div
			className={`d-flex text-center side-bar-nav justify-content-center flex-column ps-1 align-items-center nav-text ${
				isOpen ? "open" : ""
			}`}>
			<NavbarImage />
			<NavbarSocial />
			<NavbarList />
			<div className="sidebar-footer-text ps-5">
				<p>&copy; {year} Cory Cox</p>
			</div>
		</div>
	);
}
