import type { Metadata } from 'next';
import AboutMeSection from "@/components/sections/AboutMeSection";

export const metadata: Metadata = {
  title: 'About Me | Portfolio Pro',
  description: 'Learn more about my background, passions, and what drives me. Also, get AI suggestions to refine your own profile!',
};

export default function AboutPage() {
  return (
    <AboutMeSection />
  );
}
