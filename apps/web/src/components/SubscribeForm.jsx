import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const SubscribeForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const isLoading = status === "loading";
  const isSubmitted = status === "success";

  const handleSubmit = async () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const endpoint = import.meta.env.VITE_APPS_SCRIPT_URL;

      if (!endpoint) {
        throw new Error("Subscription endpoint is not configured.");
      }

      const url = `${endpoint}?email=${encodeURIComponent(email)}`;

      await fetch(url, { mode: "no-cors" });

      setEmail("");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold mb-3">You're on the list!</h2>
        <p className="text-muted-foreground mb-8">
          Keep an eye on your inbox. We'll notify you as soon as GuturGu is
          ready for you.
        </p>
        <Button
          onClick={onClose}
          variant="outline"
          className="w-full py-6 rounded-xl font-semibold"
        >
          Close
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="mt-2">
      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-lg">
        <Sparkles className="w-6 h-6 text-white" />
      </div>

      <h2 className="text-2xl font-bold mb-3 text-balance">
        Join the Privacy Revolution
      </h2>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        Be the first to experience zero-compromise messaging. Secure your spot
        on the waitlist today.
      </p>

      <div className="space-y-4">
        <div>
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            disabled={isLoading}
            placeholder="Enter your email"
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50"
          />
          {error && <p className="text-destructive text-sm mt-2">{error}</p>}
        </div>

        <Button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full gradient-primary text-white hover:opacity-90 text-base py-6 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-0 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Securing Spot..." : "Secure My Spot"}
        </Button>
      </div>

      <p className="text-xs text-center text-muted-foreground mt-6">
        We respect your privacy. No spam, ever.
      </p>
    </div>
  );
};

export default SubscribeForm;
