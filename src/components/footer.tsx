import {Footer2} from "./ui/shadcnblocks-com-footer2";

const footerData = {
	logo: {
		src: "/tokopedia-logo.svg",
		alt: "tokopedia logo",
		url: "#",
	},
	menuItems: [
		{
			title: "Product",
			links: [
				{text: "Overview", url: "#"},
				{text: "Pricing", url: "#"},
				{text: "Marketplace", url: "#"},
				{text: "Features", url: "#"},
				{text: "Integrations", url: "#"},
				{text: "Pricing", url: "#"},
			],
		},
		{
			title: "Company",
			links: [
				{text: "About", url: "#"},
				{text: "Team", url: "#"},
				{text: "Blog", url: "#"},
				{text: "Careers", url: "#"},
				{text: "Contact", url: "#"},
				{text: "Privacy", url: "#"},
			],
		},
		{
			title: "Resources",
			links: [
				{text: "Help", url: "#"},
				{text: "Sales", url: "#"},
				{text: "Advertise", url: "#"},
			],
		},
		{
			title: "Social",
			links: [
				{text: "Twitter", url: "#"},
				{text: "Instagram", url: "#"},
				{text: "LinkedIn", url: "#"},
			],
		},
	],
	copyright: "© 2025 Copyright. All rights reserved.",
};

export default function Footer() {
	return <Footer2 {...footerData} />;
}
