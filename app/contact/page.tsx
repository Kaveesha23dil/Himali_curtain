"use client";

import ContactHero from "@/components/ContactHero";
import ContactInfoCard from "@/components/ContactInfoCard";
import ContactFormSection from "@/components/ContactFormSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf6]">
      <ContactHero />
      <ContactInfoCard />
      <ContactFormSection />
      <MapSection />
      <Footer />
    </main>
  );
}
