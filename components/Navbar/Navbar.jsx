import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	const today = new Date();
	const year = today.getFullYear();
	return (
		<div className="d-flex text-center side-bar-nav">
			<div className="d-flex text-center side-bar-nav justify-content-center flex-column ps-1 align-items-center nav-text">
				<div>
					<Link href="/">
						<Image
							src="/img/favicon.svg"
							alt="Cory Cox Icon"
							height={130}
							width={130}
						/>
					</Link>
				</div>
				<div className="pt-3">
					<h3 className="mb-0">Cory Cox</h3>
					<p>Full Stack Developer</p>
					<div>
						<ul className="social-nav d-flex ps-0 justify-content-center">
							<li>
								<Link
									href="https://github.com/cwcox01"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-github fa-xl" aria-hidden="true"></i>
								</Link>
							</li>
							<li className="ps-3">
								<Link
									href="https://www.linkedin.com/in/corywcox"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-linkedin fa-xl" aria-hidden="true"></i>
								</Link>
							</li>
							<li className="ps-3">
								<Link
									href="https://www.instagram.com/ugotcced/"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-instagram fa-xl" aria-hidden="true"></i>
								</Link>
							</li>
							<li className="ps-3">
								<Link
									href="https://www.facebook.com/cwcox01"
									target="_blank"
									rel="noreferrer">
									<i className="fa fa-facebook fa-xl" aria-hidden="true"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>
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
