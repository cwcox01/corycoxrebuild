import React from "react";

//importing smaller components
import HomeContent from "./HomeContent";

export default function Content() {
	return (
		<div className="d-flex flex-column justify-content-center page-content">
			<HomeContent />
		</div>
	);
}
