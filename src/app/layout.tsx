import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WOMP - The Ultimate Blob Coin",
  description: "Join the WOMP revolution! The cutest and most powerful blob coin in the crypto universe. Womp womp womp!",
  keywords: ["WOMP", "memecoin", "cryptocurrency", "blob", "DeFi", "token"],
  openGraph: {
    title: "WOMP - The Ultimate Blob Coin",
    description: "Join the WOMP revolution! The cutest and most powerful blob coin in the crypto universe.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WOMP - The Ultimate Blob Coin",
    description: "Join the WOMP revolution! The cutest and most powerful blob coin in the crypto universe.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
