import React from "react";
import Link from "next/link";

// importing smaller component
import ProjectDesc from "./ProjectDesc";

export default function Projects() {
	return (
		<div className="header-margin page-content">
			<h2 className="pt-2">Projects</h2>
			<div className="project-list pt-3">
				<ul className="projects-list pt-3">
					<li>
						<Link
							target="_blank"
							rel="noreferrer"
							href="https://cubsplaytoday.com"
							className="text-decoration-none">
							Cubs Play Today
						</Link>
					</li>
					<li>
						<Link
							target="_blank"
							rel="noreferrer"
							href="https://cory-cox-cwcox01.vercel.app/"
							className="text-decoration-none">
							Cory Cox
						</Link>
					</li>
					<li>
						<Link
							target="_blank"
							rel="noreferrer"
							href="https://github.com/cwcox01/toolslist"
							className="text-decoration-none">
							Tools List
						</Link>
					</li>
					<li>
						<Link
							target="_blank"
							rel="noreferrer"
							href="https://main--charming-puffpuff-74fa3a.netlify.app/"
							className="text-decoration-none">
							Wolverines Corner
						</Link>
					</li>
					<li>
						<Link
							target="_blank"
							rel="noreferrer"
							href="https://github.com/cwcox01/opensource"
							className="text-decoration-none">
							Open Source Projects
						</Link>
					</li>
				</ul>
			</div>
			<div className="header-margin">
				<h2 className="pt-2"> Project Descriptions</h2>
				<ProjectDesc />
			</div>
		</div>
	);
}
