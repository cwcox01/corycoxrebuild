import React from "react";

// importing About.module.css
import styles from "/styles/About.module.css";

// importing smaller component
import SkillItem from "./SkillItem";
import Button from "../Button/Button";

export default function Skill() {
	return (
		<div className="header-margin">
			<h2 className="pt-2">Skills</h2>
			<div className={`pb-5 ${styles["all-skills"]}`}>
				<div>
					<SkillItem
						skillText="HTML"
						skillColor="dodgerblue"
						skillPercentage="90%"
					/>
					<SkillItem
						skillText="CSS"
						skillColor="yellow"
						skillPercentage="78%"
					/>
					<SkillItem
						skillText="Python"
						skillColor="teal"
						skillPercentage="85%"
					/>
					<SkillItem
						skillText="Git"
						skillColor="dodgerblue"
						skillPercentage="90%"
					/>
					<SkillItem
						skillText="SQL"
						skillColor="yellow"
						skillPercentage="98%"
					/>
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
					<SkillItem
						skillText="GitHub"
						skillColor="dodgerblue"
						skillPercentage="85%"
					/>
					<SkillItem
						skillText="Salesforce CRM"
						skillColor="yellow"
						skillPercentage="58%"
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
					<SkillItem
						skillText="NodeJS"
						skillColor="teal"
						skillPercentage="86%"
					/>
					<SkillItem
						skillText="Version Control"
						skillColor="dodgerblue"
						skillPercentage="80%"
					/>
					<SkillItem
						skillText="Slack"
						skillColor="yellow"
						skillPercentage="88%"
					/>
				</div>
			</div>
			<div className="pb-5">
				<div className="mb-3">
					<Button btnUrl="/contact" btnText="Contact Me" />
				</div>
				<Button btnUrl="/projects" btnText="Projects" />
			</div>
		</div>
	);
}
