import BlogPostCard, { type BlogPost } from '@/components/shared/BlogPostCard';

const blogPostsData: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Server Components in Next.js 13+',
    date: 'October 26, 2023',
    snippet: 'A deep dive into React Server Components (RSCs) and how they are changing web development with Next.js. Explore the benefits, use cases, and patterns for building modern applications.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'code editor',
    link: '#', // Replace with actual link
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS for Rapid UI Development',
    date: 'November 15, 2023',
    snippet: 'Learn how to leverage the power of Tailwind CSS to build beautiful, responsive user interfaces quickly. This post covers utility-first concepts, customization, and best practices.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'website design',
    link: '#', // Replace with actual link
  },
  {
    id: '3',
    title: 'The Rise of Generative AI in Web Development',
    date: 'December 05, 2023',
    snippet: 'Exploring the impact of Generative AI tools like Genkit on the web development workflow. From code generation to content creation, AI is transforming how we build.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'artificial intelligence',
    link: '#', // Replace with actual link
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
          Latest Blog Posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
