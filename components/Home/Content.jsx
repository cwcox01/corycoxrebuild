import Link from "next/link";
import React from "react";

export default function Content() {
	return (
		<div className="d-flex flex-column justify-content-center page-content">
			<div>
				<div className="header-margin">
					<h1>
						Hi <br /> I am Cory <br /> A Full Stack Developer{" "}
					</h1>
				</div>
				<div className="mt-5">
					<h3>Skills</h3>
					<ul className="split-list-home">
						<li>HTML</li>
						<li>CSS</li>
						<li>JS</li>
						<li>Python</li>
						<li>Django</li>
						<li>ReactJS</li>
						<li>Bootstrap</li>
						<li>Vercel</li>
						<li>Git</li>
						<li>Version Control</li>
					</ul>
				</div>
				<div className="pb-4">
					<button>
						<Link href="#" className="text-decoration-none text-white">
							Contact Me
						</Link>
					</button>
				</div>
				<div className="header-margin">
					<h2 className="pt-2">About Me</h2>
					<div className="mt-5 text-start w-50">
						<p>
							Hello, my name is Cory. I have a degree in Computer and
							Information Technology and also 6 years of experience in the
							field. I am aspiring to be a Full Stack Developer.
						</p>
						<p>
							My forte is in Front End Development, however I can do Full Stack
							Development. As I have experience with ReactJS, NextJS and Django.
							Also, I have knowledge with Mongo DB and databases.
						</p>
						<h3 className="font-cursive pt-3 pb-3">Cory W Cox</h3>
					</div>
				</div>
				<div className="header-margin">
					<h2>Projects</h2>
					<div className="project-list pt-3">
						<ul className="projects-list pt-3">
							<li>
								<Link
									target="_blank"
									rel="noreferrer"
									href="https://cubsplaytoday.com"
									className="text-decoration-none">
									Cubs Play Today
								</Link>
							</li>
							<li>
								<Link
									target="_blank"
									rel="noreferrer"
									href="https://cory-cox-cwcox01.vercel.app/"
									className="text-decoration-none">
									Cory Cox
								</Link>
							</li>
							<li>
								<Link
									target="_blank"
									rel="noreferrer"
									href="https://github.com/cwcox01/toolslist"
									className="text-decoration-none">
									Tools List
								</Link>
							</li>
							<li>
								<Link
									target="_blank"
									rel="noreferrer"
									href="https://main--charming-puffpuff-74fa3a.netlify.app/"
									className="text-decoration-none">
									Wolverines Corner
								</Link>
							</li>
							<li>
								<Link
									target="_blank"
									rel="noreferrer"
									href="https://github.com/cwcox01/opensource"
									className="text-decoration-none">
									Open Source Projects
								</Link>
							</li>
						</ul>
						<div className="pt-3">
							<button>
								<Link href="#" className="text-decoration-none text-white">
									Portfolio
								</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="header-margin">
					<h2>Contact Me</h2>
					<div>
						<form
							method="POST"
							name="contact"
							action="https://formspree.io/f/mnqylbjk">
							<label className="d-flex align-items-start">
								Your Name:
								<input type="text" name="name" />
							</label>
							<label className="pt-3">
								Your Email: <input type="email" name="email" />
							</label>
							<label className="d-flex align-items-start pt-3">
								Message: <textarea name="message" rows="6" cols="35"></textarea>
							</label>
							<div className="pt-4 pb-4 ps-5">
								<button type="submit">Send</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
