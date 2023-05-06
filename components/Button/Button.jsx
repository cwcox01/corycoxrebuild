import React from "react";
import Link from "next/link";

export default function Button({ btnUrl, btnText }) {
	return (
		<>
			<button className="ms-2">
				<Link href={btnUrl} className="text-decoration-none text-white">
					{btnText}
				</Link>
			</button>
		</>
	);
}
