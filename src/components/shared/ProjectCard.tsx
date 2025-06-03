import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageHint?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col h-full group transform hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 md:h-56 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={project.imageHint || "technology project"}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-2 text-primary group-hover:text-accent transition-colors duration-300">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm mb-4 h-20 overflow-y-auto">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2">
        {project.githubUrl && (
          <Button asChild variant="outline" size="sm" className="flex-1 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {project.demoUrl && (
          <Button asChild variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1 transition-all duration-300 transform hover:scale-105">
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
