import SkillBadge from '@/components/shared/SkillBadge';
import { Code, Database, Server, Smartphone, Cog, Cpu, Bot } from 'lucide-react'; // Using 'Bot' for AI/ML

const skillsData = [
  { name: 'React', Icon: Code },
  { name: 'Next.js', Icon: Code },
  { name: 'Node.js', Icon: Server },
  { name: 'Python', Icon: Code },
  { name: 'JavaScript', Icon: Code },
  { name: 'TypeScript', Icon: Code },
  { name: 'HTML5', Icon: Code },
  { name: 'CSS3', Icon: Code },
  { name: 'Tailwind CSS', Icon: Code },
  { name: 'SQL Databases', Icon: Database },
  { name: 'NoSQL (MongoDB)', Icon: Database },
  { name: 'REST APIs', Icon: Cog },
  { name: 'GraphQL', Icon: Cog },
  { name: 'Docker', Icon: Cog },
  { name: 'Git & GitHub', Icon: Cog },
  { name: 'GenAI / LLMs', Icon: Bot },
  { name: 'Firebase', Icon: Server },
  { name: 'Mobile Development', Icon: Smartphone },
  { name: 'System Design', Icon: Cpu }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} Icon={skill.Icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
