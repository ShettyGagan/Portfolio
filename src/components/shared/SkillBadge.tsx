import type { LucideProps } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillBadgeProps {
  name: string;
  Icon?: React.ComponentType<LucideProps>;
}

export default function SkillBadge({ name, Icon }: SkillBadgeProps) {
  return (
    <Card className="p-4 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out bg-card transform hover:-translate-y-1 hover:scale-105 group">
      <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
        {Icon && <Icon className="h-10 w-10 text-accent mb-2 transition-colors duration-300 group-hover:text-primary" />}
        <span className="text-sm font-medium text-foreground text-center transition-colors duration-300 group-hover:text-primary">{name}</span>
      </CardContent>
    </Card>
  );
}
