import React from "react";

// importing smaller component
import SkillItem from "./SkillItem";

export default function Skill() {
	return (
		<div className="pb-5 all-skills">
			<div>
				<SkillItem
					skillText="HTML"
					skillColor="dodgerblue"
					skillPercentage="90%"
				/>
				<SkillItem skillText="CSS" skillColor="yellow" skillPercentage="78%" />
				<SkillItem skillText="Python" skillColor="teal" skillPercentage="85%" />
			</div>
			<div>
				<SkillItem
					skillText="Django"
					skillColor="dodgerblue"
					skillPercentage="95%"
				/>
				<SkillItem
					skillText="NextJS"
					skillColor="yellow"
					skillPercentage="89%"
				/>
				<SkillItem
					skillText="ReactJS"
					skillColor="teal"
					skillPercentage="80%"
				/>
			</div>
			<div>
				<SkillItem
					skillText="JavaScript"
					skillColor="dodgerblue"
					skillPercentage="97%"
				/>
				<SkillItem
					skillText="Bootstrap"
					skillColor="yellow"
					skillPercentage="88%"
				/>
				<SkillItem skillText="NodeJS" skillColor="teal" skillPercentage="86%" />
			</div>
		</div>
	);
}
