import React from "react";
import Link from "next/link";

// importing smaller components
import Skill from "./Skill";

export default function About() {
	return (
		<div className="header-margin page-content">
			<h2 className="pt-2">About Me</h2>
			<div className="mt-5 text-start w-50">
				<p>
					Hello, my name is Cory. I have a degree in Computer and Information
					Technology and also 6 years of experience in the field. I am aspiring
					to be a Full Stack Developer.
				</p>
				<p>
					My forte is in Front End Development, however I can do Full Stack
					Development. As I have experience with ReactJS, NextJS and Django.
					Also, I have knowledge with Mongo DB and databases.
				</p>
				<p>
					I strive in writing clean code that is optimized for the best
					performance. I also strive in building websites which are responsive
					and look good.
				</p>
				<h3 className="font-cursive pt-3 pb-3">Cory W Cox</h3>
			</div>
			<div className="header-margin">
				<h2 className="pt-2">Skills</h2>
				<div>
					<Skill />
				</div>
				<div className="pb-5">
					<button>
						<Link href="/contact" className="text-decoration-none text-white">
							Contact Me
						</Link>
					</button>
					<button className="ms-5">
						<Link href="/projects" className="text-decoration-none text-white">
							Projects
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
