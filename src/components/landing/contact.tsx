"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSubmitButton } from "./animated-submit-button";
import { useOnScreen } from "@/hooks/use-on-screen";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const { toast } = useToast();
  const [ref, isOnScreen] = useOnScreen({ threshold: 0.2 });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    // form.reset(); // Commented out to allow seeing the animation reset
  }

  return (
    <section id="contact" className="w-full bg-background py-10 md:py-16">
      <div
        ref={ref}
        className="container mx-auto max-w-[1200px] px-6 md:px-12"
      >
        <div className="text-center">
          <div className={`mb-8 text-center scroll-animate ${isOnScreen ? 'scroll-animate-in' : ''}`}>
            <h2 className="font-headline text-3xl font-bold uppercase tracking-tight md:text-4xl">
              Get In Touch
            </h2>
          </div>
          <div className={`mx-auto max-w-2xl rounded-lg border bg-card p-6 shadow-sm scroll-animate ${isOnScreen ? 'scroll-animate-in' : ''}`} style={{ transitionDelay: '100ms' }}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold uppercase">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" required {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold uppercase">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" required {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold uppercase">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project" rows={5} required {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end pt-2">
                   <AnimatedSubmitButton />
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
