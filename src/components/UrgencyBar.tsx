"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  Users,
  Gift,
  IndianRupee,
  OctagonAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const UrgencyBar = () => {
  const handleScrollToForm = () => {
    const form = document.querySelector("#form");
    if (form) form.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-y border-accent/25"
    >
      <div className="container mx-auto space-y-6 max-w-4xl">
        {/* TOP: Value + FREE Tag */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2">
          
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/40 bg-emerald-400/15">
              <span className="text-sm sm:text-base font-semibold text-emerald-300">
                Exclusively for this community — FREE
              </span>
            </div>
          </div>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center justify-center gap-2 text-white text-sm sm:text-base"
          >
            <AlertCircle className="w-5 h-5 text-accent" />
            <span>
              This message goes to 1,00,000+ people —{" "}
              <strong>Grab your spot now</strong>
            </span>
          </motion.div>
        </div>

        {/* BULLET POINTS */}
        <ul className="space-y-4 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
          <li className="flex items-start gap-3">
            <Users className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
            <span>
              <strong className="text-white">Limited Access:</strong> Only the
              first 500 sign-ups are accepted.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <Gift className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
            <span>
              <strong className="text-white">Exclusive Bonuses:</strong> Secret
              rewards for those who attend live.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <OctagonAlert className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <span>
              <strong className="text-white">One-Time Experience:</strong> No
              recordings. No replays. Be there live.
            </span>
          </li>
        </ul>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Seats are filling fast. Secure your access before the limit is
            reached.
          </p>
          <Button
            onClick={handleScrollToForm}
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:opacity-95 text-sm sm:text-base font-semibold"
          >
            Register for Free
          </Button>
        </div>
      </div>
    </motion.section>
  );
};
