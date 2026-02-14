import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorksNew from "@/components/HowItWorksNew";
import ImageGrid from "@/components/ImageGrid";
import CTABanner from "@/components/CTABanner";
import Reviews from "@/components/Reviews";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorksNew />
        <ImageGrid />
        <ServiceAreas />
        <CTABanner />
        <Reviews />
        <FAQ />
        <Contact />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
