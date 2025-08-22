'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  generateSlogans,
  SloganGeneratorOutput,
} from '@/ai/flows/slogan-generator';
import { Wand2 } from 'lucide-react';
import { useOnScreen } from '@/hooks/use-on-screen';

export default function SloganGenerator() {
  const [topic, setTopic] = useState('');
  const [slogans, setSlogans] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [ref, isOnScreen] = useOnScreen({ threshold: 0.2 });

  const handleGenerate = async () => {
    if (!topic) return;
    setLoading(true);
    setSlogans([]);
    try {
      const result: SloganGeneratorOutput = await generateSlogans({ topic });
      setSlogans(result.slogans);
    } catch (error) {
      console.error('Error generating slogans:', error);
      setSlogans(['Sorry, something went wrong. Please try again.']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="slogan-generator" className="w-full bg-secondary py-20 text-secondary-foreground md:py-28 overflow-hidden">
      <div
        ref={ref}
        className={`container mx-auto max-w-[1200px] px-6 md:px-12 scroll-animate ${isOnScreen ? 'scroll-animate-in' : ''}`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 h-1 w-16 bg-primary mx-auto"></div>
          <h2 className="mb-4 font-headline text-5xl font-bold uppercase tracking-tight md:text-6xl">
            AI Slogan Generator
          </h2>
          <p className="mb-8 text-lg text-secondary-foreground/80">
            Need inspiration? Enter a keyword and let our AI generate catchy slogans for your signs!
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., 'modern storefronts'"
              className="bg-background text-foreground"
            />
            <Button onClick={handleGenerate} disabled={loading}>
              <Wand2 className="mr-2 h-4 w-4" />
              {loading ? 'Generating...' : 'Generate'}
            </Button>
          </div>

          {slogans.length > 0 && (
            <div className="mt-8 rounded-lg border border-border bg-background p-6 text-left shadow-sm">
              <ul className="list-disc list-inside space-y-2 text-foreground">
                {slogans.map((slogan, index) => (
                  <li key={index}>{slogan}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
