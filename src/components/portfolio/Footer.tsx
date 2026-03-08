const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-8 px-6 text-center">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center gap-6 mb-4">
        {[
          { label: "LinkedIn", href: "https://www.linkedin.com/in/thajmalkhan-video-editor" },
          { label: "GitHub", href: "https://github.com/thajmalkhan-tech" },
          { label: "Instagram", href: "https://www.instagram.com/_thajmal_khan_/" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="text-primary-foreground/60 text-sm">
        © 2026 Thajmal Khan. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
