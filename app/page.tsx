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
    "curtains sri lanka",
    "modern curtains sri lanka",
    "luxury curtains sri lanka",
    "window curtains sri lanka",
    "custom curtains sri lanka",
    "blackout curtains sri lanka",
    "living room curtains sri lanka",
    "bedroom curtains sri lanka",
    "curtain shop sri lanka",
    "curtain designs sri lanka",
    "premium curtains sri lanka",
    "home curtains sri lanka",
    "curtain installation sri lanka",
    "stylish curtains sri lanka",
    "best curtain shop sri lanka",
    "curtain suppliers sri lanka",
    "modern curtain design",
    "luxury curtain design",
    "window curtain design",
    "curtain fabric sri lanka",
    "sheer curtains sri lanka",
    "office curtains sri lanka",
    "hotel curtains sri lanka",
    "minimal curtain design",
    "elegant curtains sri lanka",
    "custom made curtains",
    "designer curtains sri lanka",
    "interior curtains sri lanka",
    "home decor sri lanka",
    "interior design sri lanka",
    "curtain accessories sri lanka",
    "window blinds sri lanka",
    "roller blinds sri lanka",
    "roman blinds sri lanka",
    "vertical blinds sri lanka",
    "wooden curtain rods",
    "premium home decor",
    "curtain shop horana",
    "curtains horana",
    "modern curtains horana",
    "luxury curtains horana",
    "window curtains horana",
    "custom curtains horana",
    "curtain design horana",
    "curtain shop kalutara",
    "curtains kalutara",
    "curtain shop panadura",
    "curtains panadura",
    "living room curtain design",
    "bedroom curtain design",
    "hall curtain design",
    "luxury living room curtains",
    "modern home curtains",
    "black curtains sri lanka",
    "grey curtains sri lanka",
    "purple curtains sri lanka",
    "green curtains sri lanka",
    "leaf pattern curtains",
    "floral curtains sri lanka",
    "dual tone curtains",
    "velvet curtains sri lanka",
    "latest curtain designs",
    "affordable curtains sri lanka",
    "high quality curtains",
    "curtain experts sri lanka",
    "best curtains for living room",
    "best blackout curtains",
    "curtain ideas sri lanka",
    "modern interior curtains",
    "premium curtain installation",
    "curtain services sri lanka",
    "custom window treatments",
    "buy curtains sri lanka",
    "curtain price sri lanka",
    "curtain offers sri lanka",
    "free curtain measurement",
    "curtain fitting service",
    "smart home curtains",
    "minimal home decor sri lanka",
    "luxury home interior",
    "window decor sri lanka",
    "house decoration sri lanka",
    "modern luxury curtains",
    "elegant window curtains",
    "best home curtains",
    "trendy curtain designs",
    "beautiful curtain ideas",
    "new curtain collection",
    "curtain trends sri lanka",
    "modern fabric curtains",
    "decorative curtains sri lanka",
    "premium blackout curtains",
    "curtain showroom sri lanka",
    "best curtain designs sri lanka",
    "home styling sri lanka",
    "curtain solutions sri lanka",
    "modern curtain shop",
    "curtain business sri lanka",
    "curtain makers sri lanka",
    "window styling sri lanka",
    "luxury interior curtains",
    "premium curtain fabrics",
    "modern room curtains",
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
