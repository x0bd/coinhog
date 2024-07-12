import { PawPrint } from "lucide-react";
import React from "react";

function Logo() {
	return (
		<a href="/" className="flex items-center gap-2">
			<PawPrint className="stroke h-8 w-8" />
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
