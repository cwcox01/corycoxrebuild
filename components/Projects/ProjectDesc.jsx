import React from "react";

// importing smaller component
import ProjectDescItem from "./ProjectDescItem";

export default function ProjectDesc() {
	return (
		<div className="project-container">
			<ProjectDescItem
				projectHeaderText="Cubs Play Today"
				projectSiteUrl="https://cubsplaytoday.com"
				projectGitUrl="https://github.com/cwcox01/cubs-play-today"
				projectDescription="This site displays information about Cubs game on today's date and other information.  Website was built with HTML, CSS, JS and using NextJS library. Site was deployed on Vercel. "
			/>
			<ProjectDescItem
				projectHeaderText="Cubs Play Today"
				projectSiteUrl="https://cubsplaytoday.com"
				projectGitUrl="https://github.com/cwcox01/cubs-play-today"
				projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor magna et pulvinar semper. Vestibulum ante ipsum primis vestibulum leo. In hac habitasse platea dictumst. Nullam gravida."
			/>
			<ProjectDescItem
				projectHeaderText="Cubs Play Today"
				projectSiteUrl="https://cubsplaytoday.com"
				projectGitUrl="https://github.com/cwcox01/cubs-play-today"
				projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor magna et pulvinar semper. Vestibulum ante ipsum primis vestibulum leo. In hac habitasse platea dictumst. Nullam gravida."
			/>
		</div>
	);
}
