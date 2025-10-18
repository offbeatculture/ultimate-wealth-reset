import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Calendar, AlertCircle } from "lucide-react";

const COMMUNITY_URL = "https://YOUR-COMMUNITY-LINK.example";

const ThanksSn = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-card border-2 border-accent/20 rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_-4px_hsl(var(--accent)/0.2)] text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6"
          >
            <CheckCircle className="w-10 h-10 text-accent" />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            🎉 You're In! Your Spot is Reserved.
          </h1>

          <p className="text-lg sm:text-xl text-foreground/80 mb-8">
            Watch your email/WhatsApp for joining details and reminders.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mb-8"
          >
            <Button
              onClick={() => window.open(COMMUNITY_URL, "_blank")}
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.4)] transition-all"
            >
              <Users className="w-5 h-5 mr-2" />
              Join the Community for All Updates
            </Button>
          </motion.div>

          <div className="bg-destructive/10 border-2 border-destructive/30 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-3 justify-center text-destructive">
              <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg font-bold">
                🛑 NO RECORDINGS, NO REPLAYS — be there LIVE to unlock the secret bonuses.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-left bg-secondary/50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              Event Details
            </h2>
            <ul className="space-y-2 text-foreground/80">
              <li>📅 <strong>Dates:</strong> October 23, 24, 25</li>
              <li>🕖 <strong>Time:</strong> 7:00 PM each day</li>
              <li>💻 <strong>Format:</strong> Live Online Session</li>
              <li>🎁 <strong>Bonuses:</strong> Exclusive for live attendees</li>
            </ul>
            <p className="text-sm text-muted-foreground pt-2">
              💡 Tip: Add these dates to your calendar now so you don't miss out!
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default ThanksSn;
