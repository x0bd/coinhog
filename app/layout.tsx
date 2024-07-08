import type { Metadata } from "next";
import "./globals.css";
import { GeistMono } from "geist/font/mono";

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
		<html lang="en">
			<body className={GeistMono.className}>{children}</body>
		</html>
	);
}
