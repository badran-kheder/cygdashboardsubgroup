import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CYG Partners - Strategic Financial Advisory",
  description:
    "Tailored financial advisory from Dubai and Lebanon, driving growth and lasting value. Strategic, Sell-Side, and Buy-Side advisory services.",
  keywords:
    "financial advisory, strategic consulting, business growth, Dubai, Lebanon, M&A, valuation",
  authors: [{ name: "CYG Partners" }],
  openGraph: {
    title: "CYG Partners - Strategic Financial Advisory",
    description:
      "Tailored financial advisory from Dubai and Lebanon, driving growth and lasting value.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
