import React from "react";
import Link from "next/link";

// importing Project.module.css file
import styles from "/styles/Project.module.css";

export default function ProjectDescItem({
	projectHeaderText,
	projectDescription,
	projectGitUrl,
	projectSiteUrl,
}) {
	return (
		<div className={`mt-3 ${styles["project"]}`}>
			<h5 className="pb-2">{projectHeaderText}</h5>
			<p>{projectDescription}</p>
			<Link
				target="_blank"
				rel="noreferrer"
				href={projectSiteUrl}
				className="text-center text-decoration-none text-white">
				Site Link
			</Link>
			<Link
				target="_blank"
				rel="noreferrer"
				href={projectGitUrl}
				className="text-center text-decoration-none text-white">
				GitHub Project
			</Link>
		</div>
	);
}
