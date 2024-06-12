import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/style/globals.css";
import { NavbarMain } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JavaScript Engineer Portfolio - Prasenjit Das",
  description:
    "Explore the portfolio of a skilled JavaScript engineer, showcasing web development projects, interactive websites, and front-end expertise.",
  authors: [{ name: "Prasenjit Das" }],
  keywords: [
    "JavaScript",
    "Web Development",
    "Front-End Web Development",
    "constPrasenjit",
  ],
  openGraph: {
    title: "JavaScript Engineer Portfolio - Prasenjit Das",
    description:
      "Explore the portfolio of a skilled JavaScript engineer, showcasing web development projects, interactive websites, and front-end expertise.",
    url: "http://localhost:3000",
    type: "website",
    images: "http://localhost:3000/api/og",
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Engineer Portfolio - Prasenjit Das",
    description:
      "Explore the portfolio of a skilled JavaScript engineer, showcasing web development projects, interactive websites, and front-end expertise.",
    images: "http://localhost:3000/api/og",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarMain />
        {children}
      </body>
    </html>
  );
}
