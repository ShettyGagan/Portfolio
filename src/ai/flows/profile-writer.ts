// src/ai/flows/profile-writer.ts
'use server';
/**
 * @fileOverview A flow for generating suggestions for updating the 'About Me' section of a personal portfolio.
 *
 * - updateAboutMeWithAISuggestions - A function that takes existing portfolio content and online presences as input,
 *   and returns AI-generated suggestions for refining the intro and description in the 'About Me' section.
 * - UpdateAboutMeInput - The input type for the updateAboutMeWithAISuggestions function.
 * - UpdateAboutMeOutput - The return type for the updateAboutMeWithAISuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const UpdateAboutMeInputSchema = z.object({
  currentIntro: z.string().describe('The current intro text in the About Me section.'),
  currentDescription: z.string().describe('The current description text in the About Me section.'),
  onlinePresence: z.string().describe('Links to other online profiles and content, such as LinkedIn, GitHub, blog posts, etc.'),
});
export type UpdateAboutMeInput = z.infer<typeof UpdateAboutMeInputSchema>;

const UpdateAboutMeOutputSchema = z.object({
  suggestedIntro: z.string().describe('An AI-generated suggestion for updating the intro text.'),
  suggestedDescription: z.string().describe('An AI-generated suggestion for updating the description text.'),
});
export type UpdateAboutMeOutput = z.infer<typeof UpdateAboutMeOutputSchema>;

export async function updateAboutMeWithAISuggestions(input: UpdateAboutMeInput): Promise<UpdateAboutMeOutput> {
  return updateAboutMeFlow(input);
}

const updateAboutMePrompt = ai.definePrompt({
  name: 'updateAboutMePrompt',
  input: {schema: UpdateAboutMeInputSchema},
  output: {schema: UpdateAboutMeOutputSchema},
  prompt: `You are a personal branding expert. You will be given the current intro and description from the "About Me" section of a portfolio, as well as links to the person's other online presences.

  Your task is to generate suggestions for updating the intro and description to be more engaging and effective.

  Current Intro: {{{currentIntro}}}
  Current Description: {{{currentDescription}}}
  Online Presence: {{{onlinePresence}}}

  Consider the person's online presence when generating the suggestions. Try to highlight their key skills and accomplishments.

  The suggested intro and description should be concise and easy to read.

  Here are the suggested intro and description:

  { 
    "suggestedIntro": "",
    "suggestedDescription": ""
  }`,
});

const updateAboutMeFlow = ai.defineFlow(
  {
    name: 'updateAboutMeFlow',
    inputSchema: UpdateAboutMeInputSchema,
    outputSchema: UpdateAboutMeOutputSchema,
  },
  async input => {
    const {output} = await updateAboutMePrompt(input);
    return output!;
  }
);
