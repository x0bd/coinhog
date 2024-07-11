import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProviders from "@/components/providers/RootProviders";
import { Toaster } from "@/components/ui/sonner";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
	title: "CoinNeko",
	description: "a personal finance tracker run by cats",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html
				lang="en"
				className={GeistMono.className}
				suppressHydrationWarning
			>
				<div>
					<body>
						<Toaster richColors position="bottom-right" />
						<RootProviders>{children}</RootProviders>
					</body>
				</div>
			</html>
		</ClerkProvider>
	);
}
