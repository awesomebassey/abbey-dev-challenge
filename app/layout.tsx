import type { Metadata } from "next";
import { Providers, fonts } from "@/app/_helpers";
import "./globals.css";

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
      <body className={`${fonts.outfit.variable} ${fonts.yserif.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
