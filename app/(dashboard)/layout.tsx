import type { Metadata } from "next";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Abbey Mortgage Bank | Dashboard",
  description: "Seamless Banking At Your Fingertips",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout children={children} />;
}
