// TODO: Style This Logo Part

import { PawPrint } from "lucide-react";
import Link from "next/link";

const LogoFull = () => {
	return (
		<Link className="flex items-center gap-2" href={"/"}>
			<PawPrint className="stroke h-11 w-11 stroke-zinc-800 dark:stroke-white stroke-[2]" />
			<h1 className="text-zinc-800 dark:text-zinc-100 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
				CoinNeko
			</h1>
		</Link>
	);
};

export default LogoFull;
