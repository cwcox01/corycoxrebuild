import React from "react";

export default function SkillItem({ skillText, skillColor, skillPercentage }) {
	return (
		<>
			<p className="pt-4 pb-2 mb-0">{skillText}</p>
			<div className="myProgress w-25">
				<div
					className="progress-bar"
					style={{ backgroundColor: skillColor, width: skillPercentage }}></div>
			</div>
		</>
	);
}
