import type { Metadata } from "next";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
	title: "coinhog",
	description: "personal finance tracker",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={GeistMono.className}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
