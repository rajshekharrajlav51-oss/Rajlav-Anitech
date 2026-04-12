import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";
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
  whatsapp: z.string().min(10, "Enter a valid WhatsApp number"),
  email: z.string().email("Enter a valid email"),
  budget: z.string().min(1, "Please select a budget"),
  videoType: z.string().min(1, "Please select a video type"),
});

type FormData = z.infer<typeof schema>;

function buildWhatsAppMessage(data: FormData) {
  return [
    "Hi Rajlav Animation,",
    "",
    "I would like to book a video strategy session.",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.whatsapp}`,
    `Email: ${data.email}`,
    `Budget: ${data.budget}`,
    `Video Type: ${data.videoType}`,
  ].join("\n");
}

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [budget, setBudget] = useState("");
  const [videoType, setVideoType] = useState("");

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
    <section id="lead-form" className="py-32 bg-card border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-4">
              Get Your Free Video Strategy Session
            </h2>
            <p className="text-xl text-gray-400">
              We&apos;ll create a custom script idea for your SaaS. Then we&apos;ll take you straight to booking.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 px-8 rounded-3xl bg-background border border-primary/30 shadow-[0_0_60px_-15px_rgba(124,58,237,0.4)]"
            >
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(124,58,237,0.4)]">
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
              className="p-8 md:p-12 rounded-3xl bg-background border border-card-border shadow-[0_0_60px_-20px_rgba(124,58,237,0.3)] space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white font-medium">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  className="h-12 bg-card border-card-border text-white placeholder:text-gray-500 focus:border-primary/50"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-white font-medium">WhatsApp Number</Label>
                <Input
                  id="whatsapp"
                  placeholder="+91 98765 43210"
                  className="h-12 bg-card border-card-border text-white placeholder:text-gray-500 focus:border-primary/50"
                  {...register("whatsapp")}
                />
                {errors.whatsapp && (
                  <p className="text-red-400 text-sm">{errors.whatsapp.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@yourcompany.com"
                  className="h-12 bg-card border-card-border text-white placeholder:text-gray-500 focus:border-primary/50"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-white font-medium">Budget Range</Label>
                <Select
                  onValueChange={(val) => {
                    setBudget(val);
                    setValue("budget", val, { shouldValidate: true });
                  }}
                  value={budget}
                >
                  <SelectTrigger className="h-12 bg-card border-card-border text-white [&>span]:text-white data-[placeholder]:text-gray-500 focus:border-primary/50">
                    <SelectValue placeholder="Select your budget" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-card-border text-white">
                    <SelectItem value="Under ₹25,000">Under ₹25,000</SelectItem>
                    <SelectItem value="₹25,000 - ₹65,000">₹25,000 - ₹65,000</SelectItem>
                    <SelectItem value="₹65,000+">₹65,000+</SelectItem>
                  </SelectContent>
                </Select>
                {errors.budget && (
                  <p className="text-red-400 text-sm">{errors.budget.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-white font-medium">Type of Video</Label>
                <Select
                  onValueChange={(val) => {
                    setVideoType(val);
                    setValue("videoType", val, { shouldValidate: true });
                  }}
                  value={videoType}
                >
                  <SelectTrigger className="h-12 bg-card border-card-border text-white [&>span]:text-white data-[placeholder]:text-gray-500 focus:border-primary/50">
                    <SelectValue placeholder="What video do you need?" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-card-border text-white">
                    <SelectItem value="Explainer Video">Explainer Video</SelectItem>
                    <SelectItem value="SaaS Demo Video">SaaS Demo Video</SelectItem>
                    <SelectItem value="Onboarding Video">Onboarding Video</SelectItem>
                    <SelectItem value="Social Media Ads">Social Media Ads</SelectItem>
                    <SelectItem value="2D / 3D Animation">2D / 3D Animation</SelectItem>
                  </SelectContent>
                </Select>
                {errors.videoType && (
                  <p className="text-red-400 text-sm">{errors.videoType.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isBusy}
                className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_-5px_rgba(124,58,237,0.5)] hover:shadow-[0_0_50px_-5px_rgba(124,58,237,0.7)] transition-all disabled:opacity-80"
              >
                {redirecting ? "Redirecting to booking..." : isSubmitting ? "Sending..." : "Send My Free Script Idea"}
                {!isBusy && <ArrowRight className="ml-2 w-5 h-5" />}
              </Button>

              {redirecting && (
                <p className="text-center text-sm text-primary">
                  Opening WhatsApp and taking you to the booking page...
                </p>
              )}

              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <Lock className="w-4 h-4" />
                <span>100% private. We never spam. Your info is safe with us.</span>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
