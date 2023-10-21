import React from "react";

// importing smaller components
import AboutContentItem from "../About/AboutContentItem";

export default function HomeAboutContent() {
	return (
		<div className="header-margin">
			<h2 className="pt-2">About Me</h2>
			<div className="mt-5 text-start about-text">
				<AboutContentItem
					aboutItemText="Hello, my name is Cory. I have a degree in Computer and
							Information Technology and also 6 years of experience in the Information Technology
							field."
				/>
				<AboutContentItem
					aboutItemText="My forte is in Front End Web Development, however I am currently a Technical Support Engineer. 
					I have experience with ReactJS, NextJS and Django and also the Salesforce CRM.
							"
				/>
				<h3 className="font-cursive pt-3 pb-3">Cory W Cox</h3>
			</div>
		</div>
	);
}
