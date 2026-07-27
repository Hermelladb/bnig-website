import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blue Nile Innovation Group",
  description: "Investment readiness advisory for Africa's most ambitious businesses.",
  openGraph: {
    title: "Blue Nile Innovation Group",
    description: "Investment readiness advisory for Africa's most ambitious businesses.",
    url: "https://bluenileinnovation.com",
    siteName: "Blue Nile Innovation Group",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
