import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Coach Name — Online Fitness Coaching",
  description:
    "Transform your body and mindset with personalised online coaching. Real plans, real results.",
  openGraph: {
    title: "Coach Name — Online Fitness Coaching",
    description: "Transform your body with personalised online coaching.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
