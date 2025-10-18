"use client";

import { motion } from "framer-motion";
import {
  LucideIcon,
  CheckCircle2,
  ChevronRight,
  Gift,
  IndianRupee,
  Users,
  OctagonAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* -----------------------------------
   DayCard: clean, icon-based, no emojis
------------------------------------ */
interface DayCardProps {
  day: number;
  title: string;
  items: string[];
  value: string;
  icon: LucideIcon;
  delay?: number;
}

export function DayCard({ day, title, items, value, icon: Icon, delay = 0 }: DayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
      className="
        group bg-card border border-border rounded-2xl p-6 sm:p-8
        shadow-[0_4px_20px_-2px_hsl(var(--primary)/0.08)]
        hover:shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.15)]
        transition-all snap-center
        min-w-[85%] sm:min-w-[65%] md:min-w-[48%] lg:min-w-[36%]
      "
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
        </div>
        <div className="flex-1">
          <div className="text-xs sm:text-sm font-bold text-accent mb-1">DAY {day}</div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
            {title}
          </h3>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-foreground/85">
            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-base sm:text-lg">{item}</span>
          </li>
        ))}
      </ul>

      <div className="pt-4 border-t border-border">
        <p className="text-lg font-bold text-accent">{value}</p>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------
   DayCardsCarousel: horizontal swipe, no scrollbar,
   peek of next card, swipe nudge animation
--------------------------------------------------- */
interface DayCardsCarouselProps {
  cards: Array<Omit<DayCardProps, "delay">>;
}

export function DayCardsCarousel({ cards }: DayCardsCarouselProps) {
  return (
    <section className="relative">
      <div
        className="
          overflow-x-auto overflow-y-visible
          snap-x snap-mandatory
          -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8
          py-2 flex gap-4 sm:gap-6 scroll-smooth
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {/* left gradient fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-10 bg-gradient-to-r from-background to-transparent" />
        {cards.map((c, i) => (
          <DayCard key={i} {...c} delay={0.08 * i} />
        ))}
        {/* right gradient fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-10 bg-gradient-to-l from-background to-transparent" />
      </div>

      {/* Swipe nudge for mobile */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="sm:hidden flex items-center gap-1.5 text-muted-foreground text-xs pl-1 mt-2"
      >
        <span>Swipe</span>
        <motion.span
          animate={{ x: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
          className="inline-flex"
        >
          <ChevronRight className="w-4 h-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------
   OfferHighlights: clean, modern offer layout
-------------------------------------------- */
interface OfferHighlightsProps {
  onJoin?: () => void;
  joinHref?: string;
  joinText?: string;
  note?: string;
}

export function OfferHighlights({
  onJoin,
  joinHref,
  joinText = "Join the Community",
  note = "This message goes out to over 1 lakh people — grab your spot now!",
}: OfferHighlightsProps) {
  const JoinButton = (
    <Button
      onClick={onJoin}
      asChild={!!joinHref}
      className="w-full sm:w-auto bg-primary text-primary-foreground hover:opacity-95"
    >
      {joinHref ? <a href={joinHref}>{joinText}</a> : <span>{joinText}</span>}
    </Button>
  );

  return (
    <section className="mt-8 sm:mt-10">
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        {/* Value / Free */}
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-[0_4px_20px_-2px_hsl(var(--primary)/0.08)]">
          <div className="flex items-center gap-3 mb-2">
            <IndianRupee className="w-5 h-5 text-accent" />
            <p className="text-lg font-bold text-accent">TOTAL VALUE = ₹40,000/-</p>
          </div>
          <p className="text-base sm:text-lg font-semibold text-foreground">
            Exclusively for this community — <span className="text-accent">TOTALLY FREE</span>
          </p>
        </div>

        {/* Scarcity / Bonuses / No Replays + Join */}
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-[0_4px_20px_-2px_hsl(var(--primary)/0.08)]">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-primary" />
            <p className="font-semibold text-foreground">Limited to first 500 sign-ups only</p>
          </div>

          <div className="mt-3 flex items-start gap-3">
            <Gift className="w-5 h-5 text-accent mt-0.5" />
            <p className="text-foreground/90">
              <span className="font-semibold">Secret bonuses</span> — exclusively for those who attend live
            </p>
          </div>

          <div className="mt-3 flex items-start gap-3">
            <OctagonAlert className="w-5 h-5 text-destructive mt-0.5" />
            <p className="text-foreground/90">
              <span className="font-semibold">No recordings, no replays.</span>
            </p>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
            {JoinButton}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              {/* using CheckCircle2 here as a tasteful accent instead of party emoji */}
              <CheckCircle2 className="w-4 h-4" />
              <span>{note}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------
   Example usage (plug in where you need it)
-------------------------------------------- */
import { Shield, BarChart3, Timer } from "lucide-react";

export default function ProgramSection() {
  const cards = [
    {
      day: 1,
      title: "5 Wealth Secrets Hidden from the Middle-Class",
      items: [
        "Discover the trap that keeps 95% people poor",
        "Unlock the 3 circles of wealth hidden from the middle class",
        "Install the wealth formula for generational wealth",
      ],
      value: "VALUE = ₹10,000/-",
      icon: Shield,
    },
    {
      day: 2,
      title: "Market & Investing Hacks for ALL Income Levels",
      items: [
        "Kick-start the compounding ladder with almost zero risk",
        "Access the 5 money vehicles of the rich",
        "Use proprietary investing/trading frameworks for passive wealth",
      ],
      value: "VALUE = ₹15,000/-",
      icon: BarChart3,
    },
    {
      day: 3,
      title: "My Wealth O.S. for Guaranteed Financial Freedom",
      items: [
        "Master the only formula that creates financial freedom fast",
        "Implement steps to achieve an early, happy retirement",
        "Free up your life & time to do what you love",
      ],
      value: "VALUE = ₹15,000/-",
      icon: Timer,
    },
  ] as const;

  return (
    <section className="mt-10 sm:mt-14">
      <DayCardsCarousel cards={cards as any} />
      
      <OfferHighlights joinHref="#form" />
    </section>
  );
}
