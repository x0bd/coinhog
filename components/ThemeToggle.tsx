"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { PiSunDimBold } from "react-icons/pi";
import { RxMoon } from "react-icons/rx";

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	let otherTheme = resolvedTheme === "dark" ? "light" : "dark";

	return (
		<Button variant="link" size="icon" onClick={() => setTheme(otherTheme)}>
			<PiSunDimBold className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
			<RxMoon className="absolute h-[1.6rem] w-[1.6rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
		</Button>
	);
}
