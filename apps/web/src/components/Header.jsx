import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
            <span className="text-2xl font-bold gradient-text">GuturGu</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#features"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="/#download"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Download
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
