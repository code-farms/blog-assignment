import type { Metadata } from "next";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blog Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
