import React from "react";

export default function ContactForm() {
	return (
		<div className="contact-form">
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
	);
}
