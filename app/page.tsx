import Hero from "@/components/Hero";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Himali Curtain | Premium Curtains & Interior Solutions",
  description:
    "Himali Curtain offers premium curtains, blinds, and interior solutions with modern designs, custom fittings, and quality fabrics for homes and offices.",
  keywords: [
    "Himali Curtain",
    "Curtains Sri Lanka",
    "Modern Curtains",
    "Custom Curtains",
    "Blinds",
    "Interior Design",
    "Window Curtains",
    "Luxury Curtains",
  ],
  openGraph: {
    title: "Himali Curtain | Premium Curtains & Interior Solutions",
    description:
      "Premium curtains, blinds, and stylish interior solutions for homes and offices.",
    url: "https://himali-curtain.vercel.app/",
    siteName: "Himali Curtain",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Himali Curtain",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Hero />
      <About />
      <Clients />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}