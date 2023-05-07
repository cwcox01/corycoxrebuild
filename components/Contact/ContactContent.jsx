import React from "react";

// importing smaller components
import ContactForm from "./ContactForm";

export default function ContactContent() {
	return (
		<>
			<h2>Contact Me</h2>
			<p className="pt-4 pb-4">
				Hello, I am interested in speaking with you. Please fill out the form
				below to get in touch with me.
			</p>
			<ContactForm />
		</>
	);
}
