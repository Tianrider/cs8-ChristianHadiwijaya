import {Book, Menu, Sunset, Trees, Zap} from "lucide-react";
import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {cn} from "@/lib/utils";

interface MenuItem {
	title: string;
	url: string;
	description?: string;
	icon?: React.ReactNode;
	items?: MenuItem[];
}

interface Navbar1Props {
	logo?: {
		url: string;
		src: string;
		alt: string;
	};
	menu?: MenuItem[];
}

const Navbar1 = ({
	logo = {
		url: "https://www.shadcnblocks.com",
		src: "https://www.shadcnblocks.com/images/block/block-1.svg",
		alt: "logo",
	},
	menu = [
		{title: "Home", url: "#"},
		{
			title: "Products",
			url: "#",
			items: [
				{
					title: "Blog",
					description: "The latest industry news, updates, and info",
					icon: <Book className="size-5 shrink-0" />,
					url: "#",
				},
				{
					title: "Company",
					description:
						"Our mission is to innovate and empower the world",
					icon: <Trees className="size-5 shrink-0" />,
					url: "#",
				},
				{
					title: "Careers",
					description:
						"Browse job listing and discover our workspace",
					icon: <Sunset className="size-5 shrink-0" />,
					url: "#",
				},
				{
					title: "Support",
					description:
						"Get in touch with our support team or visit our community forums",
					icon: <Zap className="size-5 shrink-0" />,
					url: "#",
				},
			],
		},
		{
			title: "Resources",
			url: "#",
			items: [
				{
					title: "Help Center",
					description: "Get all the answers you need right here",
					icon: <Zap className="size-5 shrink-0" />,
					url: "#",
				},
				{
					title: "Contact Us",
					description:
						"We are here to help you with any questions you have",
					icon: <Sunset className="size-5 shrink-0" />,
					url: "#",
				},
				{
					title: "Status",
					description:
						"Check the current status of our services and APIs",
					icon: <Trees className="size-5 shrink-0" />,
					url: "#",
				},
				{
					title: "Terms of Service",
					description:
						"Our terms and conditions for using our services",
					icon: <Book className="size-5 shrink-0" />,
					url: "#",
				},
			],
		},
		{
			title: "Pricing",
			url: "#",
		},
		{
			title: "Blog",
			url: "#",
		},
	],
}: Navbar1Props) => {
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > 10) {
				setHasScrolled(true);
			} else {
				setHasScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<AnimatePresence>
			<motion.section
				className={cn(
					"py-1 fixed lg:px-16 top-0 left-0 right-0 z-100",
					hasScrolled
						? "bg-white/10 backdrop-blur-sm lg:py-5"
						: "bg-transparent lg:py-12"
				)}
				initial={{opacity: 0, y: -20}}
				animate={{
					opacity: 1,
					y: 0,
					backgroundColor: hasScrolled
						? "rgba(255, 255, 255, 0.8)"
						: "rgba(255, 255, 255, 0)",
					backdropFilter: hasScrolled ? "blur(8px)" : "blur(0px)",
					boxShadow: hasScrolled
						? "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
						: "none",
				}}
				transition={{
					duration: 0.5,
					backgroundColor: {duration: 0.4},
					backdropFilter: {duration: 0.4},
					boxShadow: {duration: 0.4},
				}}
			>
				<div className="relative">
					<motion.div
						className="absolute inset-0"
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{duration: 0.3}}
					/>
					<nav className="hidden justify-between w-full lg:flex relative">
						<div className="flex items-center w-full justify-between gap-6">
							<a
								href={logo.url}
								className="flex items-center gap-2"
							>
								<motion.img
									src={
										!hasScrolled
											? "/tokopedia-logo.svg"
											: "/tokopedia-logo-green.svg"
									}
									className="w-40"
									alt={logo.alt}
									animate={{scale: hasScrolled ? 0.95 : 1}}
									transition={{duration: 0.3}}
								/>
							</a>
							<div className="flex items-center">
								<NavigationMenu className="bg-transparent">
									<NavigationMenuList className="bg-transparent">
										{menu.map((item) =>
											renderMenuItem(item, hasScrolled)
										)}
									</NavigationMenuList>
								</NavigationMenu>
							</div>
						</div>
					</nav>
					<div className="block lg:hidden relative px-4 py-2">
						<div className="flex items-center justify-between">
							<a
								href={logo.url}
								className="flex items-center gap-2"
							>
								<motion.img
									src={
										!hasScrolled
											? "/tokopedia-logo.svg"
											: "/tokopedia-logo-green.svg"
									}
									className="w-34"
									alt={logo.alt}
									animate={{scale: hasScrolled ? 0.95 : 1}}
									transition={{duration: 0.3}}
								/>
							</a>
							<Sheet>
								<SheetTrigger asChild>
									<motion.div
										animate={{
											backgroundColor: hasScrolled
												? "rgba(255, 255, 255, 1)"
												: "rgba(255, 255, 255, 0.5)",
											scale: hasScrolled ? 0.95 : 1,
										}}
										transition={{duration: 0.3}}
									>
										<Button
											variant={
												hasScrolled
													? "outline"
													: "ghost"
											}
											size="icon"
										>
											<Menu className="size-4" />
										</Button>
									</motion.div>
								</SheetTrigger>
								<SheetContent className="overflow-y-auto">
									<div className="my-6 flex flex-col gap-6">
										<Accordion
											type="single"
											collapsible
											className="flex w-full flex-col gap-4"
										>
											{menu.map((item) =>
												renderMobileMenuItem(
													item,
													hasScrolled
												)
											)}
										</Accordion>
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</div>
			</motion.section>
		</AnimatePresence>
	);
};

const renderMenuItem = (item: MenuItem, hasScrolled: boolean) => {
	if (item.items) {
		return (
			<NavigationMenuItem
				key={item.title}
				className={cn(
					"text-muted-foreground",
					hasScrolled ? "text-muted-foreground" : "text-white"
				)}
			>
				<motion.div
					animate={{
						color: hasScrolled
							? "var(--muted-foreground)"
							: "white",
					}}
					transition={{duration: 0.3}}
				>
					<NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
				</motion.div>
				<NavigationMenuContent>
					<ul className="w-80 p-3">
						<NavigationMenuLink>
							{item.items.map((subItem) => (
								<li key={subItem.title}>
									<a
										className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
										href={subItem.url}
									>
										{subItem.icon}
										<div>
											<div className="text-sm font-semibold">
												{subItem.title}
											</div>
											{subItem.description && (
												<p className="text-sm leading-snug text-muted-foreground">
													{subItem.description}
												</p>
											)}
										</div>
									</a>
								</li>
							))}
						</NavigationMenuLink>
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
		);
	}

	return (
		<motion.a
			key={item.title}
			className={cn(
				"group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground",
				hasScrolled
					? "bg-background text-muted-foreground"
					: "bg-transparent text-white"
			)}
			href={item.url}
			animate={{
				color: hasScrolled ? "var(--muted-foreground)" : "white",
				backgroundColor: hasScrolled
					? "var(--background)"
					: "transparent",
			}}
			transition={{duration: 0.3}}
		>
			{item.title}
		</motion.a>
	);
};

const renderMobileMenuItem = (item: MenuItem, hasScrolled: boolean) => {
	if (item.items) {
		return (
			<AccordionItem
				key={item.title}
				value={item.title}
				className="border-b-0 text-white"
			>
				<motion.div
					animate={{
						color: hasScrolled ? "var(--foreground)" : "white",
					}}
					transition={{duration: 0.3}}
				>
					<AccordionTrigger className="py-0 font-semibold hover:no-underline">
						{item.title}
					</AccordionTrigger>
				</motion.div>
				<AccordionContent className="mt-2">
					{item.items.map((subItem) => (
						<a
							key={subItem.title}
							className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
							href={subItem.url}
						>
							{subItem.icon}
							<div>
								<div className="text-sm font-semibold">
									{subItem.title}
								</div>
								{subItem.description && (
									<p className="text-sm leading-snug text-muted-foreground">
										{subItem.description}
									</p>
								)}
							</div>
						</a>
					))}
				</AccordionContent>
			</AccordionItem>
		);
	}

	return (
		<motion.a
			key={item.title}
			href={item.url}
			className="font-semibold"
			animate={{
				color: hasScrolled ? "var(--foreground)" : "white",
			}}
			transition={{duration: 0.3}}
		>
			{item.title}
		</motion.a>
	);
};

export {Navbar1};
