import type { LucideProps } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillBadgeProps {
  name: string;
  Icon?: React.ComponentType<LucideProps>;
}

export default function SkillBadge({ name, Icon }: SkillBadgeProps) {
  return (
    <Card className="p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
      <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
        {Icon && <Icon className="h-10 w-10 text-accent mb-2" />}
        <span className="text-sm font-medium text-foreground text-center">{name}</span>
      </CardContent>
    </Card>
  );
}
