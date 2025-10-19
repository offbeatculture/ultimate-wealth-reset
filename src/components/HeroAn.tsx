"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
/** PNG hero (transparent background supported) */
import heroImage from "@/assets/Shankar Hero Image. with title.png";

/** 🔗 Replace with your real n8n endpoint */
const WEBHOOK_URL = "https://offbeatn8n.coachswastik.com/webhook/uwr-an";

export const HeroSectionAn = () => {
  // ----- form state -----
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    consent: true, // pre-checked on load
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.whatsapp.trim())
      newErrors.whatsapp = "WhatsApp number is required";
    else if (!/^[+]?[\d\s-]{10,}$/.test(formData.whatsapp))
      newErrors.whatsapp = "Invalid phone number format";

    if (!formData.consent)
      newErrors.consent = "You must agree to receive updates";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          whatsapp: formData.whatsapp.trim(),
          consent: formData.consent,
          source: "ultimate-wealth-reset",
          timestamp: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      window.location.href = "/ty-an";
    } catch (err) {
      console.error(err);
      toast.error("Hmm, something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-black text-white pt-12 sm:pt-16 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Top: centered headline & subheadline with tighter spacing and bigger text */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          >
            The Ultimate Wealth Reset
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-2.5 text-md sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            A 3-Day Intensive to Design, Build & Multiply True Financial Freedom
          </motion.p>
        </div>

        {/* Two-column content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: hero image (BIGGER on mobile now) */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="w-full"
          >
            <div
              className="
                relative rounded-2xl overflow-hidden 
                shadow-[0_8px_30px_-6px_rgba(0,0,0,.6)]
                bg-gradient-to-b from-zinc-950/60 to-zinc-900/20
                min-h-[300px] sm:min-h-[520px] lg:min-h-[560px]  /* ⬅️ bigger on mobile */
              "
            >
              {/* On mobile/SM use explicit heights; on LG fill container */}
              <div className="w-full h-full">
                <img
                  src={heroImage}
                  alt="The Ultimate Wealth Reset — masterclass portrait"
                  className="w-full h-full object-contain p-2 sm:p-6 lg:p-6"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  /* Larger intrinsic size hint for mobile */
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 640px"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: bordered form */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="w-full max-w-md mx-auto flex flex-col"
          >
            {/* Small heading rule (kept) */}
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[2px] grow bg-[hsl(175_75%_48%)]/70" />
              <p className="text-lg font-semibold tracking-wide text-gray-200">
                3 Days Workshop
              </p>
              <span className="h-[2px] grow bg-[hsl(175_75%_48%)]/70" />
            </div>

            {/* Bordered Form Card */}
            <div className="rounded-xl border border-zinc-800 
    bg-gradient-to-br from-zinc-800/70 to-black/40 
    backdrop-blur-xl p-4 sm:p-2 lg:p-6 flex-1 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.4)]">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Date & Time (bold text only at top of form) */}
                <div className="space-y-0.5" id="form">
                  <p className="text-white font-bold text-sm sm:text-base leading-snug">
                    Date &amp; Time : 23, 24, 25 October 2025 7:00 PM
                  </p>
                </div>

                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-200">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className="mt-2 h-12 text-base bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[hsl(175_75%_48%)]"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-red-500 mt-1" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-200">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className="mt-2 h-12 text-base bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[hsl(175_75%_48%)]"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-red-500 mt-1" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-200">
                    WhatsApp Number *
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="e.g., +91 98xxxxxxx"
                    value={formData.whatsapp}
                    onChange={(e) => {
                      setFormData({ ...formData, whatsapp: e.target.value });
                      if (errors.whatsapp) setErrors({ ...errors, whatsapp: "" });
                    }}
                    className="mt-2 h-12 text-base bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[hsl(175_75%_48%)]"
                    aria-invalid={!!errors.whatsapp}
                    aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
                    required
                  />
                  {errors.whatsapp && (
                    <p id="whatsapp-error" className="text-sm text-red-500 mt-1" role="alert">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                {/* Consent (pre-checked) */}
                <div className="flex items-start gap-3 pt-1">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => {
                      setFormData({ ...formData, consent: Boolean(checked) });
                      if (errors.consent) setErrors({ ...errors, consent: "" });
                    }}
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? "consent-error" : undefined}
                  />
                  <div className="flex-1">
                    <Label htmlFor="consent" className="text-sm font-normal cursor-pointer text-gray-300">
                      I agree to receive WhatsApp/Email updates about this event. *
                    </Label>
                    {errors.consent && (
                      <p id="consent-error" className="text-sm text-red-500 mt-1" role="alert">
                        {errors.consent}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-bold bg-[hsl(160_60%_72%)] text-zinc-900 hover:shadow-[0_8px_30px_-6px_hsl(160_60%_72%/0.55)]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Booking your spot...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Secure Your FREE Seat
                      </>
                    )}
                  </Button>
                </motion.div>

                <p className="text-xs text-gray-500 text-center">
                  We’ll only use your details for event communication. No spam. Unsubscribe anytime.
                </p>
              </form>
            </div>

            {/* Optional urgency label */}
            <p className="text-center text-sm mt-3">
              Only <span className="text-[hsl(0_78%_56%)] font-semibold">10 Seats Left</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
