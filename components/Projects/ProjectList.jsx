import React from "react";

// importing smaller component
import ProjectListItem from "./ProjectListItem";

export default function ProjectList() {
	return (
		<div className="project-list pt-3">
			<h2 className="pt-2 pb-2">Projects</h2>
			<ul className="projects-list pt-3">
				<ProjectListItem
					projectListText="Cubs Play Today"
					projectListUrl="https://cubsplaytoday.com"
				/>
				<ProjectListItem
					projectListText="Cory Cox"
					projectListUrl="https://cory-cox-cwcox01.vercel.app/"
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
		</div>
	);
}
