import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  snippet: string;
  imageUrl: string;
  link: string;
  imageHint?: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={post.imageHint || "blog article"}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-2 text-primary">{post.title}</CardTitle>
        <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
        <CardDescription className="text-muted-foreground text-sm mb-4 h-24 overflow-y-auto">
          {post.snippet}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="text-accent p-0 hover:text-accent/90">
          <Link href={post.link} target="_blank" rel="noopener noreferrer">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
