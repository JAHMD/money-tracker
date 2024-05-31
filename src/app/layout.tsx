import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={cn(inter.className, "min-h-dvh flex flex-col")}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
