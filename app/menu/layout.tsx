import type { Metadata } from "next";
import { LanguageProvider } from "../LanguageContext";

export const metadata: Metadata = {
  title: "Menu | Ya•Me Beach Bar",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
