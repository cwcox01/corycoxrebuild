import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavbarImage() {
	return (
		<div className="pt-5 pb-3">
			<Link href="/">
				<Image
					src="/img/favicon.svg"
					alt="Cory Cox Icon"
					height={130}
					width={130}
				/>
			</Link>
		</div>
	);
}
