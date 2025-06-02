import type { Metadata } from 'next';
import BlogSection from "@/components/sections/BlogSection";

export const metadata: Metadata = {
  title: 'Blog | Portfolio Pro',
  description: 'Read my latest articles and thoughts on web development, technology trends, and AI.',
};

export default function BlogPage() {
  return (
    <BlogSection />
  );
}
