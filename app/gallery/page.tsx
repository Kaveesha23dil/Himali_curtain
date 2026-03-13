import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Project Gallery | Himali Curtain",
  description: "Explore our recent interior design and curtain installation projects across Sri Lanka.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf6]">
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </main>
  );
}
