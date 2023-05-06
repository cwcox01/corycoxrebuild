import React from "react";
import Link from "next/link";

// importing smaller navbar components
import NavbarImage from "./NavbarImage";
import NavbarSocial from "./NavbarSocial";

export default function Navbar() {
	const today = new Date();
	const year = today.getFullYear();
	return (
		<div className="d-flex text-center side-bar-nav">
			<div className="d-flex text-center side-bar-nav justify-content-center flex-column ps-1 align-items-center nav-text">
				<NavbarImage />
				<NavbarSocial />
				<div className="nav-top-div d-flex text-start pt-3">
					<nav>
						<ul className="ps-0">
							<li className="pt-2 pb-2">
								<Link
									className="text-decoration-none"
									href="/"
									rel="noreferrer">
									Home
								</Link>
							</li>
							<li className="pt-2 pb-2">
								<Link
									className="text-decoration-none"
									href="/about"
									rel="noreferrer">
									About
								</Link>
							</li>
							<li className="pt-2 pb-2">
								<Link
									className="text-decoration-none"
									href="/projects"
									rel="noreferrer">
									Projects
								</Link>
							</li>
							<li className="pt-2 pb-2">
								<Link
									className="text-decoration-none"
									href="/contact"
									rel="noreferrer">
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className="sidebar-footer-text ps-5">
					<p>&copy; {year} Cory Cox</p>
				</div>
			</div>
		</div>
	);
}
