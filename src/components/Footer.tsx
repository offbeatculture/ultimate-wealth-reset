import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-t border-border"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <a href="https://sk.wealthchallenge.in/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy & Terms
            </a>
          </div>

          

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Offbeat Culture Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
