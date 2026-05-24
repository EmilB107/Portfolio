import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Emil Bragais",
  description: "Personal portfolio of John Emil Bragais — Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.className} bg-slate-900`}>
        <CursorGlow />
        {children}
        <ScrollIndicator />
        <Analytics />
      </body>
    </html>
  );
}
