import React from "react";

// importing smaller component
import SkillItem from "./SkillItem";

export default function Skill() {
	return (
		<div className="pb-5">
			<SkillItem
				skillText="HTML"
				skillColor="dodgerblue"
				skillPercentage="80%"
			/>
			<SkillItem skillText="CSS" skillColor="yellow" skillPercentage="70%" />
			<SkillItem skillText="Python" skillColor="teal" skillPercentage="75%" />
		</div>
	);
}
