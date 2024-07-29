import type { Metadata } from "next";
import { Providers, fonts } from "@/app/_helpers";
import "./globals.css";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Abbey Mortgage Bank",
  description: "Seamless Banking At Your Fingertips",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${fonts.outfit.variable} ${fonts.yserif.variable}`}>
        <Providers>
          <SessionProvider session={session}>{children}</SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
