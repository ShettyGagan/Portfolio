import type { Metadata } from 'next';
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: 'Contact Me | Portfolio Pro',
  description: 'Get in touch with me for collaborations, questions, or just to say hi. I am always open to new opportunities.',
};

export default function ContactPage() {
  return (
    <ContactSection />
  );
}
