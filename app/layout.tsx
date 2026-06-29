import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Ola Voloshina — Elite Fitness & Nutrition Coaching",
  description:
    "Transform your body and mindset with personalised online coaching. Real plans, real accountability, real results.",
  openGraph: {
    title: "Ola Voloshina — Elite Fitness & Nutrition Coaching",
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
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <body>{children}</body>
    </html>
  );
}
