import React from "react";
import Link from "next/link";

export default function ProjectListItem({ projectListText, projectListUrl }) {
	return (
		<li>
			<Link
				target="_blank"
				rel="noreferrer"
				href={projectListUrl}
				className="text-decoration-none">
				{projectListText}
			</Link>
		</li>
	);
}
