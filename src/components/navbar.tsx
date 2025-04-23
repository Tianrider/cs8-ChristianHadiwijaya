import {Navbar1} from "./shadcnblocks-com-navbar1";

const demoData = {
	logo: {
		url: "/",
		src: "/tokopedia-logo-green.svg",
		alt: "Tokopedia Logo",
	},
	menu: [
		{
			title: "Home",
			url: "#hero",
		},
		{
			title: "Challenges",
			url: "#challenges",
		},
		{
			title: "Mission",
			url: "#mission",
		},
		{
			title: "Business",
			url: "#business",
		},
	],
};

function Navbar() {
	return <Navbar1 {...demoData} />;
}

export {Navbar};
