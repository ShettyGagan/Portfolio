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
import { useState, useTransition } from "react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name must be at most 50 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be at most 500 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername' },
  { name: 'Email', icon: Mail, url: 'mailto:youremail@example.com' },
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
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form data submitted:", data);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      reset(); // Reset form fields
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send me a message</CardTitle>
              <CardDescription>I'd love to hear from you!</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-headline">Name</Label>
                  <Input id="name" {...register("name")} placeholder="Your Name" className={errors.name ? "border-destructive" : ""} />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="font-headline">Email</Label>
                  <Input id="email" type="email" {...register("email")} placeholder="your.email@example.com" className={errors.email ? "border-destructive" : ""} />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="message" className="font-headline">Message</Label>
                  <Textarea id="message" {...register("message")} placeholder="Your message..." rows={5} className={errors.message ? "border-destructive" : ""} />
                  {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isPending}>
                  {isPending ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl text-foreground mb-4">Connect with me</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <Button key={link.name} asChild variant="outline" className=" items-center">
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon className="mr-2 h-5 w-5" />
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
