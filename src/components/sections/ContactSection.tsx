// src/components/sections/ContactSection.tsx
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name must be at most 50 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be at most 500 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/ShettyGagan' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/gagan-shetty-679144293' }, // Corrected URL
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername' }, // Replace with actual
  { name: 'Email', icon: Mail, url: 'mailto:youremail@example.com' }, // Replace with actual
];

export default function ContactSection() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    startTransition(async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500)); // Slightly longer for effect
      console.log("Form data submitted:", data);
      toast({
        title: "Message Sent! 🎉",
        description: "Thanks for reaching out. I'll get back to you as soon as possible.",
        variant: "default", // Explicitly set, can be 'destructive' for errors
      });
      reset(); // Reset form fields
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background"> {/* Changed bg to background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center mb-16"> {/* Increased margin-bottom */}
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg"> {/* Added rounded-lg */}
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Send me a message</CardTitle>
              <CardDescription>I'd love to hear from you! Fill out the form below.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-headline text-foreground/80">Name</Label>
                  <Input id="name" {...register("name")} placeholder="Your Name" className={`mt-1 focus:ring-accent focus:border-accent ${errors.name ? "border-destructive ring-destructive" : "border-input"}`} />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="font-headline text-foreground/80">Email</Label>
                  <Input id="email" type="email" {...register("email")} placeholder="your.email@example.com" className={`mt-1 focus:ring-accent focus:border-accent ${errors.email ? "border-destructive ring-destructive" : "border-input"}`} />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="message" className="font-headline text-foreground/80">Message</Label>
                  <Textarea id="message" {...register("message")} placeholder="Your message..." rows={5} className={`mt-1 focus:ring-accent focus:border-accent ${errors.message ? "border-destructive ring-destructive" : "border-input"}`} />
                  {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/80 text-accent-foreground py-3 text-base rounded-md shadow-md hover:shadow-lg" disabled={isPending}>
                  {isPending ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <><Send className="mr-2 h-5 w-5" /> Send Message</>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 pt-4 md:pt-0"> {/* Added padding top for alignment */}
            <div>
              <h3 className="font-headline text-2xl text-primary mb-4">Connect with me</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed"> {/* Added leading-relaxed */}
                Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <Button key={link.name} asChild variant="outline" className="items-center border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 ease-in-out group">
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      {link.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
