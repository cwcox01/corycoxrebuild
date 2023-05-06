import React from "react";
import Link from "next/link";

export default function NavbarSocialItem({
	navbarSocialUrl,
	navbarSocialClass,
}) {
	return (
		<li className="ps-3 pe-2">
			<Link href={navbarSocialUrl} target="_blank" rel="noreferrer">
				<i className={navbarSocialClass} aria-hidden="true"></i>
			</Link>
		</li>
	);
}
