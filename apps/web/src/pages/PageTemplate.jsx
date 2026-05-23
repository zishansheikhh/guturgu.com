import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const PageTemplate = ({ title, metaDescription, eyebrow, children }) => {
  return (
    <>
      <Helmet>
        <title>{title} | GuturGu</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground">
        <Header />

        <main className="relative overflow-hidden pt-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background to-background" />
            <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent" />
          </div>

          <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-12 text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                <span className="text-sm font-medium tracking-wide text-muted-foreground">
                  {eyebrow}
                </span>
              </div>
              <h1
                className="text-4xl sm:text-6xl font-extrabold text-balance"
                style={{ letterSpacing: "-0.02em" }}
              >
                {title}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl p-6 sm:p-10"
            >
              {children}
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PageTemplate;
