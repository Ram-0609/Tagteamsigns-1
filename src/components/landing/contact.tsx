
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
import { useOnScreen } from "@/hooks/use-on-screen";
import AnimatedSubmitButton from "./AnimatedSubmitButton";

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
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
    
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      form.reset();
    }, 2500);
  }

  return (
    <section id="contact" className="w-full bg-background py-10 md:py-16 overflow-hidden">
      <div
        ref={ref}
        className="container mx-auto max-w-[1200px] px-6 md:px-12"
      >
        <div className="text-center">
          <div className={`jump-in-animate ${isOnScreen ? 'jump-in-animate-in' : ''}`}>
            <h2 className="font-headline text-3xl font-bold uppercase tracking-tight md:text-4xl">
              Get In Touch
            </h2>
          </div>
          <div className={`contact-form-animate ${isOnScreen ? 'contact-form-animate-in' : ''} mx-auto mt-8 max-w-2xl rounded-lg border bg-card p-6 shadow-sm`} style={{ transitionDelay: '100ms' }}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel className="font-semibold uppercase">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel className="font-semibold uppercase">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel className="font-semibold uppercase">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project" rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end pt-2">
                   <AnimatedSubmitButton 
                      isSubmitting={form.formState.isSubmitting} 
                      onClick={form.handleSubmit(onSubmit)}
                    />
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
