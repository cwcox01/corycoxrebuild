import React from "react";

// importing smaller components
import Button from "../Button/Button";
import ProjectListItem from "../Projects/ProjectListItem";

export default function HomeProjects() {
	return (
		<div className="header-margin">
			<h2>Projects</h2>
			<div className="project-list pt-3">
				<ul className="projects-list pt-3">
					<ProjectListItem
						projectListText="Cubs Play Today"
						projectListUrl="https://cubsplaytoday.com"
					/>
					<ProjectListItem
						projectListText="Cory Cox"
						projectListUrl="https://corycox.com"
					/>
					<ProjectListItem
						projectListText="Tools List"
						projectListUrl="https://github.com/cwcox01/toolslist"
					/>
					<ProjectListItem
						projectListText="Wolverines Corner"
						projectListUrl="https://charming-puffpuff-74fa3a.netlify.app/"
					/>
					<ProjectListItem
						projectListText="Open Source"
						projectListUrl="https://github.com/cwcox01/opensource"
					/>
				</ul>
				<div className="pt-3">
					<Button btnText="Portfolio" btnUrl="/projects" />
				</div>
			</div>
		</div>
	);
}
