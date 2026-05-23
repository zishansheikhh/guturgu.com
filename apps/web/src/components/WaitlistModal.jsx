import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WaitlistModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const formData = new URLSearchParams({
        "form-name": "waitlist",
        "bot-field": "",
        email,
      });

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error("Failed to join waitlist");
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Waitlist error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation completes
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
      setError("");
      setIsLoading(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-[100]"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl pointer-events-auto relative overflow-hidden"
            >
              {/* Decorative top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-primary" />

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ? (
                <div className="mt-2">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-balance">
                    Join the Privacy Revolution
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Be the first to experience zero-compromise messaging. Secure
                    your spot on the waitlist today.
                  </p>

                  <form
                    name="waitlist"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="waitlist" />
                    <input type="hidden" name="bot-field" />
                    <div>
                      <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError("");
                        }}
                        disabled={isLoading}
                        placeholder="Enter your email"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50"
                      />
                      {error && (
                        <p className="text-destructive text-sm mt-2">{error}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full gradient-primary text-white hover:opacity-90 text-base py-6 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Securing Spot..." : "Secure My Spot"}
                    </Button>
                  </form>

                  <p className="text-xs text-center text-muted-foreground mt-6">
                    We respect your privacy. No spam, ever.
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">
                    You're on the list!
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Keep an eye on your inbox. We'll notify you as soon as
                    GuturGu is ready for you.
                  </p>
                  <Button
                    onClick={handleClose}
                    variant="outline"
                    className="w-full py-6 rounded-xl font-semibold"
                  >
                    Close
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
