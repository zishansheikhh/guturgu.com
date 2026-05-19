import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Zap, Lock, EyeOff, Sparkles, Apple, Smartphone, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import WaitlistModal from '@/components/WaitlistModal.jsx';
import { Button } from '@/components/ui/button';
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [{
    icon: Zap,
    title: 'Lightning-Fast Messaging',
    description: 'Seamless calls, instant texting, and real-time communication. Drop voice notes, share high-res media, and vibe without lag.'
  }, {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'Your group chats and late-night texts are locked down. Modern security standards mean your tea stays between you and your friends.'
  }, {
    icon: EyeOff,
    title: 'No Data Tracking',
    description: 'We don\'t sell your data or track your moves. Pure, unfiltered communication without the creepy targeted ads following you around.'
  }, {
    icon: Sparkles,
    title: 'Customizable Experience',
    description: 'Make it yours. Fresh themes, custom chat colors, and an intuitive UI that actually looks good on your screen.'
  }];
  return <>
      <Helmet>
        <title>GuturGu - India's Next-Gen Messaging App</title>
        <meta name="description" content="Experience lightning-fast messaging with a fresh design, advanced UI/UX, and zero compromises. Built for the Gen Z & Gen Alpha of India." />
      </Helmet>

      <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background z-10" />
            <img src="https://images.unsplash.com/photo-1633354931133-27ac1ee5d853" alt="Modern messaging app interface" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
          </div>

          {/* Animated Gradient Orbs using new Gen Z colors */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{
          animationDelay: '1s'
        }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tertiary/15 rounded-full blur-[120px] animate-pulse" style={{
          animationDelay: '2s'
        }} />

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium tracking-wide">Built for India 🇮🇳</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold mb-6 text-balance leading-[1.1]" style={{
              letterSpacing: '-0.03em'
            }}>
                India's Next-Gen <br />
                <span className="gradient-text">Texting App</span>
              </h1>
            </motion.div>

            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience lightning-fast messaging with a fresh design, advanced UI/UX, and zero compromises. Connect, vibe, and share your world seamlessly.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={() => setIsModalOpen(true)} className="gradient-primary text-white hover:opacity-90 text-lg px-10 py-7 rounded-2xl font-bold shadow-2xl shadow-primary/25 transition-all duration-300 hover:scale-105 active:scale-[0.98] group border-0">
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>

            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 1,
            delay: 1
          }} className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>1K+ on waitlist</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span>Lightning fast</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                <span>100% Secure</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-20">
              <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 text-balance" style={{
              letterSpacing: '-0.02em'
            }}>
                Not just another <br />
                <span className="gradient-text">chat app</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We threw out the old playbook. GuturGu is built for how you actually communicate today—fast, expressive, and completely yours.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} delay={index * 0.1} />)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-primary opacity-10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-card/40 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] shadow-2xl">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-balance" style={{
              letterSpacing: '-0.02em'
            }}>
                Ready to upgrade your group chats?
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                Join the wave. Secure your spot on the waitlist and be the first to experience the future of messaging in India.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-white text-black hover:bg-white/90 text-lg px-10 py-7 rounded-2xl font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-[0.98] group min-w-[220px]">
                  <Apple className="mr-3 w-6 h-6" />
                  iOS Waitlist
                </Button>
                <Button size="lg" onClick={() => setIsModalOpen(true)} className="gradient-primary text-white hover:opacity-90 text-lg px-10 py-7 rounded-2xl font-bold shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-[0.98] group min-w-[220px] border-0">
                  <Smartphone className="mr-3 w-6 h-6" />
                  Android Waitlist
                </Button>
              </div>

              <p className="mt-10 text-sm font-medium text-muted-foreground">
                Free forever. No ads. Pure vibes.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>;
};
export default HomePage;