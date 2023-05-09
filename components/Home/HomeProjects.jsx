import React from "react";

// importing smaller components
import Button from "../Button/Button";
import ProjectListItem from "../Projects/ProjectListItem";
import ProjectList from "../Projects/ProjectList";

export default function HomeProjects() {
	return (
		<div className="header-margin">
			<ProjectList />
			<div className="pt-3">
				<Button btnText="Portfolio" btnUrl="/projects" />
			</div>
		</div>
	);
}
