// src/components/shared/Header.tsx
"use client"; // Required for usePathname

import Link from 'next/link';
import { CodeXml } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

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
                className={cn(
                  "font-headline text-foreground hover:text-primary transition-colors text-lg pb-1",
                  pathname === item.href ? "text-primary font-semibold border-b-2 border-primary" : "border-b-2 border-transparent"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Mobile menu button can be added here */}
          {/* Example: <Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="md:hidden"><Menu /></Button></SheetTrigger><SheetContent>...</SheetContent></Sheet> */}
        </div>
      </div>
    </header>
  );
}
