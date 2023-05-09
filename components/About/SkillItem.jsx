import React from "react";

//importing About.module.css
import styles from "/styles/About.module.css";

export default function SkillItem({ skillText, skillColor, skillPercentage }) {
	return (
		<>
			<p className="pt-4 pb-2 mb-0">{skillText}</p>
			<div className={`w-75 ${styles["my-progress"]}`}>
				<div
					className={`${styles["progress-bar"]}`}
					style={{ backgroundColor: skillColor, width: skillPercentage }}></div>
			</div>
		</>
	);
}
