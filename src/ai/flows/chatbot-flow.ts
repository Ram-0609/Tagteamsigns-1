
'use server';

/**
 * @fileOverview A chatbot AI agent for the SignCraft Studio website.
 *
 * - chat - A function that handles the chatbot conversation.
 * - ChatInput - The input type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const HistoryItemSchema = z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
});

const ChatInputSchema = z.object({
  history: z.array(HistoryItemSchema).describe("The chat history."),
  message: z.string().describe('The latest user message.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export async function chat(input: ChatInput): Promise<string> {
  return chatFlow(input);
}

const systemPrompt = `You are a friendly and helpful AI assistant for TAGTEAMSIGNS, a full-service sign company.
Your name is "TAGTEAMSIGNS Assistant".

The company specializes in:
- Storefront Signs
- Commercial Signs
- Monument Signs
- Service & Permitting

Key offerings include:
- Pan Channel Letters
- Reversed Pan Channel Letters
- LED Illumination
- Monument & Pole Signs
- Sign Cabinets
- Sign Service and Repair
- National Accounts
- Permit Processing
- Licensed, Bonded and Insured (ROC#240355)

The company has over 20 years in the industry.

Answer the user's questions based on the information above.
If the user asks about something you don't know, respond with: "I’m not sure about that, but I can connect you with our team for more information."
If the user asks for contact information, guide them to the contact form on the website.
If the user wants to see work examples, direct them to the "Work" section of the website.
`;

const chatFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const { history, message } = input;
    
    const { output } = await ai.generate({
      prompt: message,
      history: history.map(h => ({...h, content: [{text: h.content}]})),
      system: systemPrompt,
      output: {
        format: 'text',
      }
    });

    return output!;
  }
);
