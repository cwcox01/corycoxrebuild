import React from "react";

// importing styles from Home.module.css
import styles from "/styles/Home.module.css";

// importing smaler components
import HomeSkillItem from "./HomeSkillItem";

export default function HomeSkills() {
	return (
		<div className="mt-5">
			<h3>Skills</h3>
			<ul className={styles.splitListHome}>
				<HomeSkillItem homeSkillText="HTML" />
				<HomeSkillItem homeSkillText="CSS" />
				<HomeSkillItem homeSkillText="JS" />
				<HomeSkillItem homeSkillText="Python" />
				<HomeSkillItem homeSkillText="Django" />
				<HomeSkillItem homeSkillText="ReactJS" />
				<HomeSkillItem homeSkillText="Bootstrap" />
				<HomeSkillItem homeSkillText="Vercel" />
				<HomeSkillItem homeSkillText="Git" />
				<HomeSkillItem homeSkillText="Version Control" />
			</ul>
		</div>
	);
}
