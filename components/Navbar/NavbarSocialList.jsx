import React from "react";

// importing smaller navbar component
import NavbarSocialItem from "./NavbarSocialItem";

export default function NavbarSocialList() {
	return (
		<div>
			<ul className="social-nav d-flex ps-0 justify-content-center">
				<NavbarSocialItem
					navbarSocialUrl="https://github.com/cwcox01"
					navbarSocialClass="fa fa-github fa-xl"
				/>
				<NavbarSocialItem
					navbarSocialUrl="https://www.linkedin.com/in/corywcox"
					navbarSocialClass="fa fa-linkedin fa-xl"
				/>
				<NavbarSocialItem
					navbarSocialUrl="https://www.instagram.com/ugotcced/"
					navbarSocialClass="fa fa-instagram fa-xl"
				/>
				<NavbarSocialItem
					navbarSocialUrl="https://www.facebook.com/cwcox01"
					navbarSocialClass="fa fa-facebook fa-xl"
				/>
			</ul>
		</div>
	);
}
