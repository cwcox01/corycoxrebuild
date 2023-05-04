import React from "react";
import Link from "next/link";

export default function ProjectDescItem({
	projectHeaderText,
	projectDescription,
	projectGitUrl,
	projectSiteUrl,
}) {
	return (
		<div className="project">
			<h5 className="pb-2">{projectHeaderText}</h5>
			<p>{projectDescription}</p>
			<Link
				href={projectSiteUrl}
				className="text-center text-decoration-none text-white">
				Site Link
			</Link>
			<Link
				href={projectGitUrl}
				className="text-center text-decoration-none text-white">
				GitHub Project
			</Link>
		</div>
	);
}
