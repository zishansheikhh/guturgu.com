import React from "react";
import { Twitter, Github, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Link
                to="/"
                className="flex items-center gap-3"
                aria-label="GuturGu home"
              >
                <img
                  src="/guturgu_logo.png"
                  alt="GuturGu logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
                <span className="text-2xl font-bold gradient-text">
                  GuturGu
                </span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Secure, private messaging for the next generation. Your
              conversations, your control.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/guturguapp"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/zishansheikhh/guturgu"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@guturgu.com"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            &copy; 2026 GuturGu. Built for privacy, designed for you.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
