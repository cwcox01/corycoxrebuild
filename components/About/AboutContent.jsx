import React from "react";

// importing smaller component
import AboutContentItem from "./AboutContentItem";

export default function AboutContent() {
	return (
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
			<AboutContentItem
				aboutItemText="I strive in writing clean code and providing technical support that is optimized for the best
					performance. "
			/>
			<h3 className="font-cursive pt-3 pb-3">Cory W Cox</h3>
		</div>
	);
}
