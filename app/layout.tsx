import type { Metadata } from "next";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/ThemeProviders";

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
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<body className="container mx-auto max-w-[900px]">
						<div>{children}</div>
					</body>
				</ThemeProvider>
			</html>
		</ClerkProvider>
	);
}
