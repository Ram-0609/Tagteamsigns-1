
'use server';
/**
 * @fileOverview A chatbot flow for TagTeamSigns.
 *
 * - chat - A function that handles the chatbot conversation.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatInputSchema = z.string();
const ChatOutputSchema = z.string();

export async function chat(input: z.infer<typeof ChatInputSchema>): Promise<z.infer<typeof ChatOutputSchema>> {
  return chatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatPrompt',
  input: { schema: ChatInputSchema },
  output: { schema: ChatOutputSchema },
  prompt: `You are a friendly and helpful virtual assistant for a company called TagTeamSigns. Your goal is to answer user questions about the company's services and encourage them to get in touch for a free estimate.

Keep your answers concise and to the point.

The company specializes in:
- Commercial Building Signs
- Storefront Signs
- Monument Signs
- Pan Channel Letters (including reversed)
- LED Illumination
- Sign Cabinets
- Sign Service and Repair
- National Accounts
- Permit Processing

The company is licensed, bonded, and insured (ROC#240355).

If the user asks a question you don't know the answer to, or if they ask about something unrelated to signs, politely steer the conversation back to the company's services or suggest they contact the company directly for more detailed information.

The contact information is:
- Phone: 623-875-8077
- Email: signs@tagteamsigns.com

Always end your responses by encouraging the user to call or email for a free estimate.

User question: {{{prompt}}}`
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (prompt) => {
    const { output } = await ai.generate({ prompt });
    return output!;
  }
);
