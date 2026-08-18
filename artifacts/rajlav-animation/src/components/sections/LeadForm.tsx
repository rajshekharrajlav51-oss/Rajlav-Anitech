import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WHATSAPP_NUMBER = "916205834086";
const CALENDLY_URL = "https://calendly.com/anitech_rajlav/new-meeting";
const REDIRECT_DELAY_MS = 1800;

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  company: z.string().optional(),
  need: z.string().min(1, "Please select what you need"),
  message: z.string().min(10, "Tell us a little about your project"),
});

type FormData = z.infer<typeof schema>;

function buildWhatsAppMessage(data: FormData) {
  return [
    "Hi Rajlav Technologies,",
    "",
    "I would like to discuss a project enquiry.",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Company: ${data.company || "Not provided"}`,
    `What I need: ${data.need}`,
    `Message: ${data.message}`,
  ].join("\n");
}

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [need, setNeed] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setRedirecting(true);

    const message = buildWhatsAppMessage(data);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    window.setTimeout(() => {
      setSubmitted(true);
      window.location.href = CALENDLY_URL;
    }, REDIRECT_DELAY_MS);
  };

  const isBusy = isSubmitting || redirecting;

  return (
    <section id="lead-form" className="py-16 sm:py-20 lg:py-32 bg-card border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[min(500px,90vw)] h-[320px] sm:h-[500px] bg-accent/5 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] bg-primary/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.24em] mb-4">LET'S TALK</p>
            <h2 className="text-[clamp(1.9rem,7vw,3.25rem)] font-extrabold tracking-tighter text-white mb-4">
              Have an Idea? Let's Discuss It.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-7">
              Share a few details about your project, business challenge or idea. Our team will get back to you to understand what you need and discuss the best way forward.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 px-8 rounded-3xl bg-background border border-primary/30 shadow-[0_0_60px_-15px_rgba(251,191,36,0.35)]"
            >
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Redirecting You Now</h3>
              <p className="text-gray-400 text-lg max-w-md mx-auto">
                Your details have been prepared for WhatsApp and your booking page is opening.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit(onSubmit)}
              className="p-5 sm:p-8 md:p-12 rounded-3xl bg-background border border-card-border shadow-[0_0_60px_-20px_rgba(251,191,36,0.25)] space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white font-medium">Name</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  className="h-12 bg-card border-card-border text-white placeholder:text-gray-500 focus:border-primary/50"
                  {...register("name")}
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@yourcompany.com"
                  className="h-12 bg-card border-card-border text-white placeholder:text-gray-500 focus:border-primary/50"
                  {...register("email")}
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white font-medium">Phone</Label>
                <Input
                  id="phone"
                  placeholder="+91 98765 43210"
                  className="h-12 bg-card border-card-border text-white placeholder:text-gray-500 focus:border-primary/50"
                  {...register("phone")}
                />
                {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-white font-medium">Company</Label>
                <Input
                  id="company"
                  placeholder="Company name"
                  className="h-12 bg-card border-card-border text-white placeholder:text-gray-500 focus:border-primary/50"
                  {...register("company")}
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white font-medium">What do you need?</Label>
                <Select
                  onValueChange={(val) => {
                    setNeed(val);
                    setValue("need", val, { shouldValidate: true });
                  }}
                  value={need}
                >
                  <SelectTrigger className="h-12 bg-card border-card-border text-white [&>span]:text-white data-[placeholder]:text-gray-500 focus:border-primary/50">
                    <SelectValue placeholder="What do you want to build?" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-card-border text-white">
                    <SelectItem value="Custom Software">Custom Software</SelectItem>
                    <SelectItem value="AI Solution / Automation">AI Solution / Automation</SelectItem>
                    <SelectItem value="Website / Web App">Website / Web App</SelectItem>
                    <SelectItem value="Mobile App">Mobile App</SelectItem>
                    <SelectItem value="SaaS Platform">SaaS Platform</SelectItem>
                    <SelectItem value="Business Automation">Business Automation</SelectItem>
                  </SelectContent>
                </Select>
                {errors.need && (
                  <p className="text-red-400 text-sm">{errors.need.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white font-medium">Message</Label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project, business challenge or idea"
                  rows={5}
                  className="w-full rounded-md border border-card-border bg-card px-3 py-3 text-white placeholder:text-gray-500 focus:border-primary/50 focus:outline-none"
                  {...register("message")}
                />
                {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isBusy}
                className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_-5px_rgba(251,191,36,0.45)] hover:shadow-[0_0_50px_-5px_rgba(251,191,36,0.6)] transition-all disabled:opacity-80"
              >
                {redirecting ? "Preparing your enquiry..." : isSubmitting ? "Sending..." : "Send Project Enquiry"}
                {!isBusy && <ArrowRight className="ml-2 w-5 h-5" />}
              </Button>

              {redirecting && (
                <p className="text-center text-sm text-primary">
                  Opening WhatsApp and taking you to the booking page...
                </p>
              )}
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
