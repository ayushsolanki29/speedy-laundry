import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogPosts from "@/components/blog/BlogPosts";
import SEOContent from "@/components/blog/SEOContent";
import CustomerEducation from "@/components/blog/CustomerEducation";
import BrandAuthority from "@/components/blog/BrandAuthority";

export default function Blog() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <BlogHero />
        <BlogPosts />
        <SEOContent />
        <CustomerEducation />
        <BrandAuthority />
      </main>
      <Footer />
    </div>
  );
}
