import React from "react";

// importing smaller components
import ContactForm from "../Contact/ContactForm";

export default function HomeContact() {
	return (
		<div className="header-margin">
			<h2>Contact Me</h2>
			<div>
				<ContactForm />
			</div>
		</div>
	);
}
