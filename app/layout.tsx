import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Himali Curtain | Quality you deserve",
  description: "Bespoke curtains and interior solutions in Sri Lanka.",
  verification: {
    google: "DEn18IkFo7isUNWsWEdZ6dRa24kfs5xAVau0TKyRVtQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased`}
      >
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
