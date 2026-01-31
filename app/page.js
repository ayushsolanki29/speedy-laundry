import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import ImageGrid from "@/components/ImageGrid";
import CTABanner from "@/components/CTABanner";
import Reviews from "@/components/Reviews";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <ImageGrid />
        <CTABanner />
        <Reviews />
        <ServiceAreas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
