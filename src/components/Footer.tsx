import { Leaf, Instagram, Twitter, Facebook, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About", href: "/about" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
    platform: [
      { label: "Browse Plants", href: "/browse" },
      { label: "For Businesses", href: "/businesses" },
      { label: "Community", href: "/community" },
      { label: "Impact", href: "/impact" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Plant Care Guide", href: "/plant-care" },
      { label: "Shipping Info", href: "/shipping" },
      { label: "Contact Us", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/reroot", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/reroot", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/reroot", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/reroot", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-nature-forest text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="mb-16 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Stay Rooted in Sustainability
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get weekly plant care tips, success stories, and exclusive access to sustainability workshops
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-card/10 border-card/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">ReRoot</span>
            </div>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Connecting plant lovers with businesses to create a sustainable, circular economy for preloved plants.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-card/10 hover:bg-accent rounded-lg flex items-center justify-center transition-nature group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="opacity-90 hover:opacity-100 hover:text-accent transition-nature"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="opacity-90 hover:opacity-100 hover:text-accent transition-nature"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="opacity-90 hover:opacity-100 hover:text-accent transition-nature"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-card/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © 2024 ReRoot. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="opacity-80 hover:opacity-100 transition-nature">
                Privacy Policy
              </a>
              <a href="/terms" className="opacity-80 hover:opacity-100 transition-nature">
                Terms of Service
              </a>
              <a href="/cookies" className="opacity-80 hover:opacity-100 transition-nature">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="h-2 bg-gradient-earth" />
    </footer>
  );
};

export default Footer;