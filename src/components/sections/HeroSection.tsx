import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-background">
          <Image 
            src="https://placehold.co/200x200.png" 
            alt="Your Name" 
            layout="fill"
            objectFit="cover"
            data-ai-hint="professional portrait"
          />
        </div>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          Your Name
        </h1>
        <p className="font-headline text-xl sm:text-2xl md:text-3xl text-foreground mb-6">
          Professional Title (e.g., Full Stack Developer)
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          A short and engaging introduction about yourself. Highlight your passion and key expertise. Keep it concise and impactful!
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-3 text-lg shadow-md transition-transform hover:scale-105">
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
}
