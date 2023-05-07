import React from "react";
import Link from "next/link";

export default function NavbarListItem({ navListText, navListUrl }) {
	return (
		<li className="pt-2 pb-2">
			<Link className="text-decoration-none" href={navListUrl} rel="noreferrer">
				{navListText}
			</Link>
		</li>
	);
}
