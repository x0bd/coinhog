import type { Metadata } from "next";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { ClerkProvider } from "@clerk/nextjs";
import * as React from "react";
import RootProviders from "@/components/providers/RootProviders";

export const metadata: Metadata = {
	title: "CoinNeko",
	description: "personal finance tracker run by cats",
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
				<body className="container mx-auto max-w-[900px]">
					<RootProviders>{children}</RootProviders>
				</body>
			</html>
		</ClerkProvider>
	);
}
