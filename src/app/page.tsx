import HeroSection from "@/components/sections/HeroSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Portfolio Pro',
  description: 'Welcome to my personal portfolio website. Discover my projects, skills, and blog.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* You can add other introductory content or calls to action here if desired */}
    </>
  );
}
