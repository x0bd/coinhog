// Make NavBar with fancy framer motion animations
"use client";

import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggle";

const NavBar = () => {
	return (
		<>
			<DesktopNavbar />
		</>
	);
};

const items = [
	{ label: "Dashboard", link: "/" },
	{ label: "Transactions", link: "/transactions" },
	{ label: "Manage", link: "/transactions" },
];

const DesktopNavbar = () => {
	return (
		<div className="hidden border-separate border-b bg-background md:block">
			<nav className="container flex items-center justify-between px-2">
				<div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
					<Logo />
					<div className="flex h-full">
						{items.map((item) => (
							<NavbarItem
								key={item.label}
								link={item.link}
								label={item.label}
							/>
						))}
					</div>
				</div>
				<div className="flex items-center gap-2">
					<ThemeToggle />
					<UserButton afterSignOutUrl="/sign-in" />
				</div>
			</nav>
		</div>
	);
};

const NavbarItem = ({ link, label }: { link: string; label: string }) => {
	const pathname = usePathname();
	const isActive = pathname === link;

	return (
		<div className="relative flex items-center">
			<Link
				className={cn(
					buttonVariants({ variant: "ghost" }),
					"w-full justify-start text-lg text-muted-foreground hover:text-foreground",
					isActive && "text-foreground"
				)}
				href={link}
			>
				{label}
			</Link>
			{isActive && (
				<div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block"></div>
			)}
		</div>
	);
};

export default NavBar;
