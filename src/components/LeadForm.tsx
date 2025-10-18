import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const WEBHOOK_URL = "https://YOUR-N8N-HOSTING.com/webhook/REPLACE_ME";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    } else if (!/^[+]?[\d\s-]{10,}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Invalid phone number format";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to receive updates";
    }

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
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          whatsapp: formData.whatsapp.trim(),
          consent: formData.consent,
          source: "ultimate-wealth-reset",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      // Redirect to thank you page on success
      window.location.href = "/thanks";
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Hmm, something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="form" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border-2 border-accent/20 rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_-4px_hsl(var(--accent)/0.2)]"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Reserve Your Free Seat Now
            </h2>
            <p className="text-lg text-accent font-semibold">
              (First 500 Only)
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-base font-medium">
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
                className="mt-2 h-12 text-base"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-destructive mt-1" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-base font-medium">
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
                className="mt-2 h-12 text-base"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-destructive mt-1" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="whatsapp" className="text-base font-medium">
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
                className="mt-2 h-12 text-base"
                aria-invalid={!!errors.whatsapp}
                aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
              />
              {errors.whatsapp && (
                <p id="whatsapp-error" className="text-sm text-destructive mt-1" role="alert">
                  {errors.whatsapp}
                </p>
              )}
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => {
                  setFormData({ ...formData, consent: checked as boolean });
                  if (errors.consent) setErrors({ ...errors, consent: "" });
                }}
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? "consent-error" : undefined}
              />
              <div className="flex-1">
                <Label htmlFor="consent" className="text-sm font-normal cursor-pointer">
                  I agree to receive WhatsApp/Email updates about this event. *
                </Label>
                {errors.consent && (
                  <p id="consent-error" className="text-sm text-destructive mt-1" role="alert">
                    {errors.consent}
                  </p>
                )}
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-accent to-accent/90 hover:shadow-[0_8px_30px_-4px_hsl(var(--accent)/0.5)] transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Booking your spot...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Grab My Free Spot
                  </>
                )}
              </Button>
            </motion.div>

            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              We'll only use your details for event communication. No spam. Unsubscribe anytime.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
