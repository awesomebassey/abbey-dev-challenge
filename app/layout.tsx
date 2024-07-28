import type { Metadata } from "next";
import { Inter, Young_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const yserif = Young_Serif({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Abbey Mortgage Bank",
  description: "Seamless Banking At Your Fingertips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${yserif.className}`}>
        {children}
      </body>
    </html>
  );
}
