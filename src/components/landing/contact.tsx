
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Mail, Phone } from 'lucide-react';

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
    
    return new Promise((resolve) => {
      setTimeout(() => {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. We'll get back to you soon.",
        });
        form.reset();
        resolve(true);
      }, 2500);
    });
  }

  return (
    <section id="contact" className="w-full bg-background py-10 md:py-16 overflow-hidden">
      <div
        ref={ref}
        className="container mx-auto max-w-[1200px] px-6 md:px-12"
      >
        <div className={`jump-in-animate text-center ${isOnScreen ? 'jump-in-animate-in' : ''}`}>
            <h2 className="font-headline text-3xl font-bold uppercase tracking-tight md:text-4xl">
              Get In Touch
            </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-16">
          <div className={`contact-form-animate ${isOnScreen ? 'contact-form-animate-in' : ''} rounded-lg border bg-card p-6 shadow-sm`} style={{ transitionDelay: '100ms' }}>
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
                   <AnimatedSubmitButton />
                </div>
              </form>
            </Form>
          </div>
          <div className={`contact-form-animate ${isOnScreen ? 'contact-form-animate-in' : ''} mt-8 md:mt-0 text-left`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl font-bold font-headline text-primary">We can't wait to hear from you</h3>
             <div className="my-4">
              <Image 
                src="https://static.wixstatic.com/media/282ef0_32249e088a5348a486e41416e788b17a~mv2.png/v1/fill/w_200,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TAGTEAMSIGNS%20COMMERCIAL_Logo2.png" 
                alt="TagTeamSigns Commercial Logo"
                data-ai-hint="company logo" 
                width={200}
                height={100}
                />
            </div>
            <div className="space-y-4 text-foreground">
               <a href="mailto:signs@tagteamsigns.com" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Mail className="h-5 w-5" />
                <span>signs@tagteamsigns.com</span>
              </a>
              <a href="tel:623-875-8077" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Phone className="h-5 w-5" />
                <span>623-875-8077</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
