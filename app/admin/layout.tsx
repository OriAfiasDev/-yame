import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Ya•Me Beach Bar",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
