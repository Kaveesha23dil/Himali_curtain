import AboutHero from "@/components/AboutHero";
import OurHistory from "@/components/OurHistory";
import CoreValues from "@/components/CoreValues";
import AboutStats from "@/components/AboutStats";
import WorkshopGallery from "@/components/WorkshopGallery";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf6]">
      <AboutHero />
      <OurHistory />
      <AboutStats />
      <WorkshopGallery />
      <CoreValues />
      <Footer />
    </main>
  );
}
