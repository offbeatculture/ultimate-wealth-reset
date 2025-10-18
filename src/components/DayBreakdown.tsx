"use client";

import { motion } from "framer-motion";
import { TrendingUp, LineChart, Rocket } from "lucide-react";
import { DayCard } from "./DayCard";

export const DayBreakdown = () => {
  const days = [
    {
      day: 1,
      title: "5 Wealth Secrets Hidden from the Middle-Class",
      items: [
        "Discover the Trap that Keeps 95% People Poor",
        "Unlock EXACT 3 Circles of Wealth that are Hidden from the Middle Class",
        "Install The Wealth Formula that will Make You Generationally Wealthy",
      ],
      value: "VALUE = ₹10,000/-",
      icon: TrendingUp,
    },
    {
      day: 2,
      title: "Market & Investing Hacks for ALL Income Levels",
      items: [
        "Kick-Start the Compounding Ladder with almost Zero risk",
        "Access the 5 Money Vehicles of the Rich",
        "Access My Proprietary Investing/Trading frameworks, creating Massive Passive Wealth",
      ],
      value: "VALUE = ₹15,000/-",
      icon: LineChart,
    },
    {
      day: 3,
      title: "My Wealth O.S. for Guaranteed Financial Freedom in 7 Years",
      items: [
        "Master the ONLY Formula that creates Financial Freedom FAST",
        "Implement the Exact Steps to Achieve an Early, Happy Retirement",
        "Free Up Your Life & Time to Do What you Love - Forever",
      ],
      value: "VALUE = ₹15,000/-",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        {/* Top heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What You'll Master in 3 Days
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
            A complete roadmap to financial freedom, delivered in 3 power-packed sessions
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {days.map((day, index) => (
            <DayCard key={day.day} {...day} delay={index * 0.1} />
          ))}
        </div>

        {/* 💰 Total Value Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 text-center px-4 py-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/30 shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.15)] max-w-2xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-accent mb-2 tracking-tight">
            TOTAL VALUE = ₹40,000/-
          </h3>
          <p className="text-sm sm:text-base text-foreground/80 max-w-md mx-auto">
            Get access to <span className="font-semibold text-foreground">all 3 days of wealth training</span> completely{" "}
            <span className="text-accent font-bold">FREE</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
