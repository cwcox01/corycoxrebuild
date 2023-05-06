import React from "react";

// importing smaller component
import ProjectDesc from "./ProjectDesc";
import ProjectList from "./ProjectList";

export default function Projects() {
	return (
		<div className="header-margin page-content">
			<ProjectList />
			<ProjectDesc />
		</div>
	);
}
