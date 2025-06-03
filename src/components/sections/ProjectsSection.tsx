import ProjectCard, { type Project } from '@/components/shared/ProjectCard';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'AgriCure',
    description: 'Agricure is a modern, tech-enabled platform designed to empower farmers and agricultural businesses through digital tools. It provides real-time crop monitoring, weather forecasting, pest detection, and intelligent resource recommendations using IoT and AI. With a user-friendly dashboard, Agricure helps farmers make data-driven decisions to improve productivity, reduce waste, and enhance sustainability.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'plant health',
    techStack: ['React', 'Django', 'Python'],
    githubUrl: 'https://github.com/yourusername/project1',
    // demoUrl: '#',
  },
  {
    id: '2',
    title: 'ROS',
    description: 'Restaurant One Solution is a full-stack web application built to streamline restaurant operations. It offers a centralized system for order management, table reservations, inventory tracking, staff scheduling, and customer feedback. Designed for both dine-in and online orders, it enhances customer experience and helps restaurant managers optimize daily workflows.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'Ros',
    techStack: ['Knime', 'Python'],
    githubUrl: 'https://github.com/yourusername/project2',
    // demoUrl: '#',
  },
  {
    id: '3',
    title: 'Global Digital Bank',
    description: 'GDB (Global Digital Bank) is a secure, cloud-based digital banking platform that provides seamless financial services for users across the globe. Built with a focus on accessibility, performance, and security, GDB enables users to create accounts, manage funds, perform real-time transactions, and track financial activities through a modern and intuitive interface. It mimics real-world banking features with a digital-first approach.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'bank',
    techStack: ['Python'],
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
