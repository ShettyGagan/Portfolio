"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-card transform transition-all duration-500 hover:scale-110 hover:shadow-2xl">
          <Image
            src="/1714299739440.jpg"
            alt="Gagan Shetty - Full Stack Developer"
            fill
            sizes="(max-width: 768px) 128px, 160px"
            className="object-cover"
            priority
          />
        </div>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 animate-fade-in-down delay-100">
          Gagan Shetty
        </h1>
        <p className="font-headline text-xl sm:text-2xl md:text-3xl text-foreground mb-6 animate-fade-in-down delay-300">
           Full Stack Developer
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-500">
          Crafting innovative digital experiences with a passion for clean code and user-centric design. Let's build something amazing together.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-4 text-lg shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-4 focus:ring-accent/50 animate-fade-in-up delay-700">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        .delay-700 { animation-delay: 0.7s; opacity: 0; }
      `}</style>
    </section>
  );
}
