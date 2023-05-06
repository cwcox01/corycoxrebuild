import React from "react";

// importing smaller components
import Skill from "./Skill";
import AboutContent from "./AboutContent";

export default function About() {
	return (
		<div className="header-margin page-content">
			<h2 className="pt-2">About Me</h2>
			<AboutContent />
			<Skill />
		</div>
	);
}
