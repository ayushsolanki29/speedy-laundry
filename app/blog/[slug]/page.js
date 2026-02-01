import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPost from "@/components/blog/BlogPost";

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <BlogPost slug={slug} />
      </main>
      <Footer />
    </div>
  );
}
