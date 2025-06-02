import type { Metadata } from 'next';
import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: 'My Projects | Portfolio Pro',
  description: 'Explore a selection of projects I have worked on, showcasing my skills in web development and technology.',
};

export default function ProjectsPage() {
  return (
    <ProjectsSection />
  );
}
