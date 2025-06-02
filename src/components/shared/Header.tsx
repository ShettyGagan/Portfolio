import Link from 'next/link';
import { CodeXml } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
            <CodeXml className="h-8 w-8" />
            <span className="font-headline text-2xl font-semibold">Portfolio Pro</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-headline text-foreground hover:text-primary transition-colors text-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Mobile menu button can be added here if needed */}
        </div>
      </div>
    </header>
  );
}
