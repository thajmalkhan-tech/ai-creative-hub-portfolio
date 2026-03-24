import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });

      if (error) throw error;

      toast.success("Message sent successfully! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-foreground mb-10 text-center">
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div variants={fadeUp} className="space-y-6">
            {[
              { icon: Mail, text: "thajmalkhan123@gmail.com", href: "mailto:thajmalkhan123@gmail.com" },
              { icon: Phone, text: "+91 9087346082", href: "tel:+919087346082" },
            ].map(({ icon: Icon, text, href }) => (
              <motion.div key={text} className="flex items-center gap-3" whileHover={{ x: 4 }}>
                <Icon className="w-5 h-5 text-accent" />
                <a href={href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {text}
                </a>
              </motion.div>
            ))}
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-muted-foreground text-sm">Chennai, India</span>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-semibold text-foreground mb-3">Connect</h4>
              <div className="flex gap-3">
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
                    className="bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.08, y: -2 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <Button type="submit" className="w-full hover:scale-[1.02] transition-transform" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
