import ProjectCard, { type Project } from '@/components/shared/ProjectCard';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product listings, cart functionality, and payment integration. Built with a focus on performance and scalability.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/project1',
    demoUrl: '#',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management tool that helps teams organize, track, and manage their work. Features include boards, lists, cards, and real-time updates.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'kanban board',
    techStack: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/project2',
    demoUrl: '#',
  },
  {
    id: '3',
    title: 'Personal Portfolio Website',
    description: 'The very website you are looking at! A responsive personal portfolio built with Next.js and Tailwind CSS, showcasing my skills and projects. Includes GenAI features.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio website',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Genkit'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    // demoUrl: '#', // No demo link for itself
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
