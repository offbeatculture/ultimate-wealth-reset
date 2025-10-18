import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header = ({ onCtaClick }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl font-bold text-primary">
              Ultimate Wealth Reset
            </h1>
          </div>
          <Button
            onClick={onCtaClick}
            className="bg-gradient-to-r from-accent to-accent/90 hover:shadow-[0_4px_20px_-2px_hsl(var(--accent)/0.4)] transition-all"
            size="sm"
          >
            Grab Your Free Spot
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
