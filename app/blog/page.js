'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogPosts from "@/components/blog/BlogPosts";
import CTABanner from "@/components/CTABanner";

import { useState } from "react";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <BlogHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <BlogPosts searchQuery={searchQuery} />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
