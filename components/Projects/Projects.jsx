import React from "react";

// importing smaller component
import ProjectDesc from "./ProjectDesc";
import ProjectList from "./ProjectList";

export default function Projects() {
	return (
		<div className="header-margin page-content">
			<h2 className="pt-2">Projects</h2>
			<ProjectList />
			<div className="header-margin">
				<h2 className="pt-2"> Project Descriptions</h2>
				<ProjectDesc />
			</div>
		</div>
	);
}
