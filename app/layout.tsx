import type { Metadata } from "next";
import {
  Inter,
  Loved_by_the_King,
  Permanent_Marker,
  Roboto,
} from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const Loved = Loved_by_the_King({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-caption",
});
const RobotoFont = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic"],
  variable: "--font-roboto",
});

const PermanentMarker = Permanent_Marker({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-marker",
});

export const metadata: Metadata = {
  title: "Ecole chretienne aurora dawn",
  description: "Ecole par excellencce de kinshasa",
  icons: ["/favicon.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full ">
      <body
        className={cn(
          Loved.variable,
          PermanentMarker.variable,
          RobotoFont.variable,
          inter.className,
          "font-sans h-full bg-background text-foreground "
        )}
      >
        {children}
      </body>
    </html>
  );
}
