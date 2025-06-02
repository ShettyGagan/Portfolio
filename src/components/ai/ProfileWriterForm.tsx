// src/components/ai/ProfileWriterForm.tsx
"use client";

import { useState, useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { updateAboutMeWithAISuggestions, UpdateAboutMeInput, UpdateAboutMeOutput } from "@/ai/flows/profile-writer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from "lucide-react";

const formSchema = z.object({
  currentIntro: z.string().min(10, "Intro must be at least 10 characters.").max(300, "Intro must be at most 300 characters."),
  currentDescription: z.string().min(50, "Description must be at least 50 characters.").max(1000, "Description must be at most 1000 characters."),
  onlinePresence: z.string().url("Please enter a valid URL for online presence (e.g., LinkedIn, GitHub).").or(z.literal("")),
});

type ProfileWriterFormValues = z.infer<typeof formSchema>;

interface ProfileWriterFormProps {
  initialIntro?: string;
  initialDescription?: string;
  onSuggestions?: (suggestions: UpdateAboutMeOutput) => void;
}

export default function ProfileWriterForm({ initialIntro = "", initialDescription = "", onSuggestions }: ProfileWriterFormProps) {
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<UpdateAboutMeOutput | null>(null);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm<ProfileWriterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentIntro: initialIntro,
      currentDescription: initialDescription,
      onlinePresence: "",
    },
  });

  const onSubmit: SubmitHandler<ProfileWriterFormValues> = (data) => {
    startTransition(async () => {
      try {
        const result = await updateAboutMeWithAISuggestions(data as UpdateAboutMeInput);
        setSuggestions(result);
        if (onSuggestions) {
          onSuggestions(result);
        }
        toast({
          title: "Suggestions Generated!",
          description: "AI has provided new ideas for your profile.",
        });
      } catch (error) {
        console.error("Error generating suggestions:", error);
        toast({
          title: "Error",
          description: "Failed to generate suggestions. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
          <Sparkles className="text-accent" /> AI Profile Assistant
        </CardTitle>
        <CardDescription>
          Get AI-powered suggestions to enhance your 'About Me' section.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="currentIntro" className="font-headline">Current Intro</Label>
            <Textarea
              id="currentIntro"
              {...register("currentIntro")}
              placeholder="Your current short introduction."
              rows={3}
              className={errors.currentIntro ? "border-destructive" : ""}
            />
            {errors.currentIntro && <p className="text-sm text-destructive">{errors.currentIntro.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentDescription" className="font-headline">Current Description</Label>
            <Textarea
              id="currentDescription"
              {...register("currentDescription")}
              placeholder="Your current detailed description."
              rows={6}
              className={errors.currentDescription ? "border-destructive" : ""}
            />
            {errors.currentDescription && <p className="text-sm text-destructive">{errors.currentDescription.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="onlinePresence" className="font-headline">Online Presence (Optional)</Label>
            <Input
              id="onlinePresence"
              type="url"
              {...register("onlinePresence")}
              placeholder="e.g., https://linkedin.com/in/yourprofile, https://github.com/yourusername"
              className={errors.onlinePresence ? "border-destructive" : ""}
            />
             {errors.onlinePresence && <p className="text-sm text-destructive">{errors.onlinePresence.message}</p>}
            <p className="text-xs text-muted-foreground">Provide links to your LinkedIn, GitHub, personal blog, etc.</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isPending} className="w-full bg-primary hover:bg-primary/90">
            {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            Generate Suggestions
          </Button>
        </CardFooter>
      </form>

      {suggestions && (
        <div className="p-6 border-t mt-6">
          <h3 className="font-headline text-xl font-semibold mb-4 text-primary">AI Suggestions:</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-headline font-medium text-md mb-1">Suggested Intro:</h4>
              <p className="text-sm bg-secondary p-3 rounded-md text-secondary-foreground">{suggestions.suggestedIntro}</p>
            </div>
            <div>
              <h4 className="font-headline font-medium text-md mb-1">Suggested Description:</h4>
              <p className="text-sm bg-secondary p-3 rounded-md text-secondary-foreground whitespace-pre-wrap">{suggestions.suggestedDescription}</p>
            </div>
             <Button onClick={() => setSuggestions(null)} variant="outline" className="mt-4">Clear Suggestions</Button>
          </div>
        </div>
      )}
    </Card>
  );
}
