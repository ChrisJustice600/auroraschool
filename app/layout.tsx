import type { Metadata } from "next";
import { Inter, Loved_by_the_King } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const Loved = Loved_by_the_King({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-caption",
});

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
    <html lang="en">
      <body className={Loved.variable}>{children}</body>
    </html>
  );
}
