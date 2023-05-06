import React from "react";

// importing smaller component
import AboutContentItem from "./AboutContentItem";

export default function AboutContent() {
	return (
		<div className="mt-5 text-start w-50">
			<AboutContentItem
				aboutItemText="Hello, my name is Cory. I have a degree in Computer and Information
					Technology and also 6 years of experience in the field. I am aspiring
					to be a Full Stack Developer."
			/>
			<AboutContentItem
				aboutItemText="My forte is in Front End Development, however I can do Full Stack
					Development. As I have experience with ReactJS, NextJS and Django.
					Also, I have knowledge with Mongo DB and databases."
			/>
			<AboutContentItem
				aboutItemText="I strive in writing clean code that is optimized for the best
					performance. I also strive in building websites which are responsive
					and look good."
			/>
			<h3 className="font-cursive pt-3 pb-3">Cory W Cox</h3>
		</div>
	);
}
