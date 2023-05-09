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
							Information Technology and also 6 years of experience in the
							field. I am aspiring to be a Full Stack Developer."
				/>
				<AboutContentItem
					aboutItemText="My forte is in Front End Development, however I can do Full Stack
							Development. As I have experience with ReactJS, NextJS and Django.
							Also, I have knowledge with Mongo DB and databases."
				/>
				<h3 className="font-cursive pt-3 pb-3">
					Cory W Coxdfgdfgdfsdfsdfdsfdsffadsf
				</h3>
			</div>
		</div>
	);
}
