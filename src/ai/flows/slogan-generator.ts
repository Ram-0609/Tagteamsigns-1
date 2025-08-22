'use server';
/**
 * @fileOverview A slogan generator AI agent.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const SloganGeneratorInputSchema = z.object({
  topic: z.string().describe('The topic for which to generate slogans.'),
});
export type SloganGeneratorInput = z.infer<typeof SloganGeneratorInputSchema>;

const SloganGeneratorOutputSchema = z.object({
  slogans: z.array(z.string()).describe('A list of generated slogans.'),
});
export type SloganGeneratorOutput = z.infer<
  typeof SloganGeneratorOutputSchema
>;

const prompt = ai.definePrompt({
  name: 'sloganGeneratorPrompt',
  input: {schema: SloganGeneratorInputSchema},
  output: {schema: SloganGeneratorOutputSchema},
  prompt: `You are an expert marketing agent. Generate 5 creative and catchy slogans for a sign company based on the following topic: {{{topic}}}.`,
});

export async function generateSlogans(
  input: SloganGeneratorInput
): Promise<SloganGeneratorOutput> {
  const {output} = await prompt(input);
  return output!;
}
