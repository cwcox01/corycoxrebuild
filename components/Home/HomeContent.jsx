import React from "react";

// importing smaller components for home page
import HomeHeading from "./HomeHeading";
import HomeSkills from "./HomeSkills";
import Button from "../Button/Button";
import HomeAboutContent from "./HomeAboutContent";
import HomeProjects from "./HomeProjects";
import HomeContact from "./HomeContact";

export default function HomeContent() {
	return (
		<div>
			<HomeHeading />
			<HomeSkills />
			<div className="pb-4">
				<Button btnText="Contact Me" btnUrl="/contact" />
			</div>
			<HomeAboutContent />
			<HomeProjects />
			<HomeContact />
		</div>
	);
}
