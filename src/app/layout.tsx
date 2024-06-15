import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/style/globals.css";
import { NavbarMain } from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    images:
      "https://og.tailgraph.com/og?fontFamily=Roboto&title=Innovative%20Solutions%20with%20JavaScript&titleTailwind=font-bold%20text-6xl%20text-lime-900&titleFontFamily=Dancing%2BScript&text=Welcome!%20I'm%20Prasenjit%20Das%2C%20%20A%20JavaScript%20engineer&textTailwind=text-2xl%20mt-4%20text-lime-700&textFontFamily=Inter&logoUrl=&logoTailwind=h-8%20bg-black&bgTailwind=bg-lime-100&footer=www.prasenjitpriyan.blog&footerTailwind=text-lime-900%20bg-lime-200&containerTailwind=bg-transparent&t=1718431946275&refresh=1",
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
        <Footer />
      </body>
    </html>
  );
}
