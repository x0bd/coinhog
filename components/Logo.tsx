import { Cat } from "lucide-react";
import React from "react";

function Logo() {
	return (
		<a href="/" className="flex items-center gap-2">
			<Cat className="stroke h-11 w-11" />
		</a>
	);
}

export function LogoMobile() {
	return (
		<a href="/" className="flex items-center gap-2">
			<p className="bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
				CoinNeko
			</p>
		</a>
	);
}

export default Logo;
