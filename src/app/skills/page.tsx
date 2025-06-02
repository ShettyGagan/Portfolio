import type { Metadata } from 'next';
import SkillsSection from "@/components/sections/SkillsSection";

export const metadata: Metadata = {
  title: 'Technical Skills | Portfolio Pro',
  description: 'A showcase of my technical skills and expertise in various programming languages, frameworks, and tools.',
};

export default function SkillsPage() {
  return (
    <SkillsSection />
  );
}
