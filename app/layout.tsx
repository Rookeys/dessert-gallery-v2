import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@common/header";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Dessert gallery",
    default: "Dessert gallery",
  },
  description:
    "Get recommendations for dessert cafes near you. Community sites with recommendations for the best dessert cafes",
  icons: {
    icon: "/faviconT.ico",
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
        <Header />
        {children}
      </body>
    </html>
  );
}
