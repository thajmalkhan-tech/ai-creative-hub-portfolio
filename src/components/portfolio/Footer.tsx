import React from "react";
import { motion } from "framer-motion";

const Footer = React.forwardRef<HTMLElement>((_, ref) => (
  <motion.footer
    ref={ref}
    className="bg-primary text-primary-foreground py-8 px-6 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center gap-6 mb-4">
        {[
          { label: "LinkedIn", href: "https://www.linkedin.com/in/thajmalkhan-video-editor" },
          { label: "GitHub", href: "https://github.com/thajmalkhan-tech" },
          { label: "Instagram", href: "https://www.instagram.com/_thajmal_khan_/" },
        ].map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
            whileHover={{ y: -2, scale: 1.05 }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
      <p className="text-primary-foreground/60 text-sm">
        © 2026 Thajmal Khan. All Rights Reserved.
      </p>
    </div>
  </motion.footer>
));

Footer.displayName = "Footer";

export default Footer;
