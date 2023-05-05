import React from "react";

// importing smaller component
import ProjectDescItem from "./ProjectDescItem";

export default function ProjectDesc() {
	return (
		<div className="project-container ms-0 pt-2">
			<ProjectDescItem
				projectHeaderText="Cubs Play Today"
				projectSiteUrl="https://cubsplaytoday.com"
				projectGitUrl="https://github.com/cwcox01/cubs-play-today"
				projectDescription="This website displays information about Cubs game on today's date and other information.  Website was built with HTML, CSS, JS and using NextJS library. Site was deployed on Vercel. "
			/>
			<ProjectDescItem
				projectHeaderText="Cory Cox"
				projectSiteUrl="https://corycox.com"
				projectGitUrl="https://github.com/cwcox01/cory-cox"
				projectDescription="This project was a project for a CV resume I originally built.  Website was deployed on Vercel and built with HTML, CSS, JS and using NextJS."
			/>
			<ProjectDescItem
				projectHeaderText="Cubs Play Today"
				projectSiteUrl="https://github.com/cwcox01/toolslist"
				projectGitUrl="https://github.com/cwcox01/toolslist"
				projectDescription="A project which was built usiing Python, HTML, CSS and JS using Django.  The project shows an inventory of my Ryobi Tools.  It has the Django authentication system setup as well as a database for tools and batteries I have."
			/>
			<ProjectDescItem
				projectHeaderText="Wolverines Corner"
				projectSiteUrl="https://charming-puffpuff-74fa3a.netlify.app/"
				projectGitUrl="https://github.com/cwcox01/wolverines-corner"
				projectDescription="A Michigan Wolverine fan page built with ReactJS library.  Also, HTML, CSS and JS programming languages were used to build this website.  Website was also deployed with Netlify."
			/>
		</div>
	);
}
