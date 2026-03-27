/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Leaf, 
  FlaskConical, 
  Heart, 
  ArrowRight, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Zap, 
  Droplets,
  ShoppingBag,
  Info,
  Clock,
  ThermometerSnowflake,
  RotateCw,
  Activity,
  Globe
} from 'lucide-react';

// --- Components ---

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="relative w-10 h-10 bg-berry-pink rounded-xl flex items-center justify-center shadow-md group-hover:bg-berry-purple transition-colors">
      <Leaf className="text-white w-6 h-6" />
      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-berry-purple rounded-full flex items-center justify-center border-2 border-white group-hover:bg-berry-plum transition-colors">
        <Droplets className="text-white w-3 h-3" />
      </div>
    </div>
    <span className="font-display font-bold text-xl tracking-tight text-berry-plum group-hover:text-berry-purple transition-colors">KOMMU-BERRY</span>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-berry-pink/30 px-6 py-4 flex justify-between items-center">
    <Logo />
    <div className="hidden md:flex gap-8 font-medium text-berry-plum/70">
      <a href="#science" className="hover:text-berry-purple transition-colors">Science</a>
      <a href="#benefits" className="hover:text-berry-purple transition-colors">Benefits</a>
      <a href="#pricing" className="hover:text-berry-purple transition-colors">Shop</a>
      <a href="#faq" className="hover:text-berry-purple transition-colors">FAQ</a>
    </div>
    <button className="bg-berry-purple text-white px-5 py-2 rounded-full font-bold text-sm shadow-md hover:bg-berry-plum transition-all">
      Pre-Order
    </button>
  </nav>
);

const Badge = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full border border-berry-pink/30 shadow-sm">
    <Icon className="w-4 h-4 text-berry-purple" />
    <span className="text-xs font-bold uppercase tracking-wider text-berry-plum/80">{text}</span>
  </div>
);

const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">{title}</h2>
    {subtitle && <p className="text-lg text-berry-plum/60 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-berry-pink/20 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-berry-purple transition-colors"
      >
        <span className="font-bold text-lg pr-8">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-berry-plum/70 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-berry-cream">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden bg-berry-light-pink/30">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-berry-pink/20 rounded-full blur-3xl -z-10" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-berry-purple/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex gap-3 mb-6 flex-wrap">
              <Badge icon={Leaf} text="100% Natural" />
              <Badge icon={RotateCw} text="Fermented" />
              <Badge icon={Zap} text="Antioxidant-Rich" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.1]">
              A Smarter Way to Drink Your <span className="text-berry-purple">Antioxidants</span>
            </h1>
            <p className="text-xl text-berry-plum/70 mb-10 max-w-lg leading-relaxed">
              Mulberry-powered kombucha enriched with natural resveratrol to support women’s health and cellular vitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                Try KOMMU-BERRY <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary">See the Science</button>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm font-medium text-berry-plum/50">
              <p>Joined by 2,400+ health-conscious women</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative z-10 w-full max-w-md aspect-[3/4] glass-card overflow-hidden flex flex-col items-center justify-center p-8 bg-gradient-to-br from-berry-pink/20 to-berry-purple/10">
              {/* Product Placeholder */}
              <div className="w-full h-full relative rounded-2xl overflow-hidden group flex items-center justify-center bg-white/40 border-2 border-dashed border-berry-pink/40">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-berry-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-10 h-10 text-berry-purple" />
                  </div>
                  <p className="font-display font-bold text-3xl text-berry-plum">KOMMU-BERRY</p>
                  <p className="text-xs uppercase tracking-widest opacity-60 font-bold text-berry-plum">Premium Infusion</p>
                </div>
              </div>
              
              {/* Subtle Ribbon Overlay */}
              <div className="absolute top-12 right-12 opacity-60">
                <Heart className="w-16 h-16 text-berry-pink fill-berry-pink animate-pulse" />
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-berry-pink/20 z-20"
            >
              <p className="text-xs font-bold text-berry-purple uppercase">Resveratrol Boost</p>
              <p className="text-2xl font-bold text-berry-plum">2.5x Higher</p>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-berry-plum text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-berry-pink font-bold uppercase tracking-widest text-sm mb-4 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl mb-8">Modern life is demanding. Your health shouldn't be.</h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              With rising health concerns and the high cost of reactive care, women are looking for accessible, natural ways to support their long-term wellness. Prevention isn't just a goal—it's a daily ritual.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-3xl font-bold text-berry-pink mb-2">1 in 8</p>
                <p className="text-sm text-white/60">Women face breast health challenges in their lifetime.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-3xl font-bold text-berry-pink mb-2">90%</p>
                <p className="text-sm text-white/60">Of wellness is built through daily lifestyle choices.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-3xl font-bold text-berry-pink mb-2">Zero</p>
                <p className="text-sm text-white/60">Compromise on taste or scientific integrity.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Functional by Nature, Optimized by Science" 
            subtitle="Every bottle of KOMMU-BERRY is a powerhouse of bioavailable nutrients designed for your body."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Rich in Antioxidants", desc: "Combat oxidative stress with high-potency polyphenols from fermented mulberry leaves.", img: "fresh-mulberries-1" },
              { icon: FlaskConical, title: "Natural Resveratrol", desc: "Our unique fermentation process increases resveratrol content by up to 250%.", img: "science-wellness" },
              { icon: Heart, title: "Supports Cellular Health", desc: "Designed to support healthy cell function and long-term vitality for women.", img: "feminine-wellness" },
              { icon: Droplets, title: "Better Absorption", desc: "Fermentation breaks down nutrients for maximum bioavailability and gut health.", img: "kombucha-glass-1" },
              { icon: ShieldCheck, title: "Safe & Controlled", desc: "Maintained at an optimal pH (3.0-3.5) for safety and refreshing tartness.", img: "quality-control" },
              { icon: ShoppingBag, title: "Daily Wellness Ritual", desc: "A simple, delicious habit that fits perfectly into your busy lifestyle.", img: "morning-ritual" }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass-card hover:border-berry-purple/40 transition-all group overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-berry-pink/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-berry-purple group-hover:text-white transition-all">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl mb-3">{benefit.title}</h3>
                  <p className="text-berry-plum/60 leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-berry-plum/40 italic">
            *Not medicine. Designed to support a healthier lifestyle.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="science" className="py-24 px-6 bg-berry-light-pink">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionHeading 
              title="The 21-Day Transformation" 
              subtitle="From local mulberry leaves to a functional powerhouse. Here is how we craft your KOMMU-BERRY."
            />
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-berry-pink/30 -translate-y-1/2 -z-10" />
            
            {[
              { step: "01", title: "Mulberry Harvest", desc: "Premium Morus nigra leaves selected for high nutrient density." },
              { step: "02", title: "Natural Infusion", desc: "Leaves are steeped with organic sugar to create the base." },
              { step: "03", title: "SCOBY Fermentation", desc: "The magic happens over 14-21 days, unlocking resveratrol." },
              { step: "04", title: "Functional Drink", desc: "Bottled at peak potency for maximum antioxidant activity." }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-full border-4 border-berry-pink flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                  <span className="font-display font-bold text-berry-purple">{item.step}</span>
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-berry-plum/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto glass-card p-8 md:p-16 relative overflow-hidden bg-berry-light-pink/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-berry-purple/5 rounded-full -mr-32 -mt-32" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                centered={false}
                title="Backed by Innovation" 
                subtitle="Our research-driven approach ensures you get the most out of every sip."
              />
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-berry-purple/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-4 h-4 text-berry-purple" />
                  </div>
                  <div>
                    <p className="font-bold">2.5x Resveratrol Increase</p>
                    <p className="text-sm text-berry-plum/60">Fermentation naturally enhances the key functional compound.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-berry-purple/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-4 h-4 text-berry-purple" />
                  </div>
                  <div>
                    <p className="font-bold">Peak Potency at Day 14</p>
                    <p className="text-sm text-berry-plum/60">Antioxidant activity reaches its optimal level (7%) for your body.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-berry-purple/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-4 h-4 text-berry-purple" />
                  </div>
                  <div>
                    <p className="font-bold">Safe pH Range</p>
                    <p className="text-sm text-berry-plum/60">Maintained at 3.0-3.5 to ensure stability and food safety.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-berry-plum rounded-3xl p-8 text-white">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-berry-pink font-bold mb-1">Research Data</p>
                  <p className="text-xl font-bold">Antioxidant Activity</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-berry-pink">7%</p>
                  <p className="text-[10px] uppercase opacity-60 tracking-tighter">Peak at Day 14</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '40%' }}
                    viewport={{ once: true }}
                    className="h-full bg-berry-pink" 
                  />
                </div>
                <div className="flex justify-between text-[10px] opacity-60">
                  <span>Day 0</span>
                  <span>Day 7</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    className="h-full bg-berry-pink shadow-[0_0_10px_rgba(248,187,208,0.5)]" 
                  />
                </div>
                <div className="flex justify-between text-[10px] opacity-60">
                  <span>Day 14 (Optimal)</span>
                </div>
              </div>
              
              <p className="mt-8 text-xs text-white/50 leading-relaxed">
                *Based on student research-backed innovation and local laboratory testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mulberry Section */}
      <section id="why-mulberry" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Why Mulberry?" 
            subtitle="Discover the unique properties of Morus Nigra that make KOMMU-BERRY a functional powerhouse."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Morus Nigra Power", desc: "Our black mulberry leaves are selected for their exceptionally high concentration of polyphenols." },
              { icon: FlaskConical, title: "Natural Resveratrol", desc: "One of the few plants naturally containing this longevity compound, further enhanced by our fermentation." },
              { icon: Zap, title: "Antioxidant Synergy", desc: "A natural blend of Vitamin C, Anthocyanins, and Quercetin working together for your health." },
              { icon: Activity, title: "Blood Sugar Support", desc: "Mulberry leaves have been used for centuries to help maintain healthy glucose levels naturally." },
              { icon: ShieldCheck, title: "Anti-Inflammatory", desc: "Supports the body's natural response to inflammation, promoting overall cellular wellness." },
              { icon: Globe, title: "Ethically Sourced", desc: "We use local, organic leaves to ensure maximum freshness, potency, and a lower carbon footprint." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass-card hover:border-berry-purple/40 transition-all group overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-berry-pink/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-berry-purple group-hover:text-white transition-all">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl mb-3">{benefit.title}</h3>
                  <p className="text-berry-plum/60 leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-6 bg-berry-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="What Our Community Says" 
            subtitle="Join thousands of women who have made KOMMU-BERRY their daily wellness ritual."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", role: "Yoga Instructor", text: "I love the tart, refreshing taste. Knowing it's packed with resveratrol makes it my favorite post-practice ritual." },
              { name: "Dr. Elena M.", role: "Nutritionist", text: "The science behind mulberry leaf fermentation is fascinating. It's a brilliant way to make functional nutrients accessible." },
              { name: "Maya R.", role: "Graphic Designer", text: "Finally, a health drink that feels premium and actually has data to back it up. My daily 4 PM pick-me-up!" }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-berry-pink/10">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 text-berry-purple fill-berry-purple" />)}
                </div>
                <p className="text-berry-plum/70 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-berry-pink/30" />
                  <div>
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-berry-plum/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-24 px-6 bg-berry-light-pink/20">
        <div className="max-w-4xl mx-auto glass-card p-12 text-center bg-white/60">
          <SectionHeading title="Your Daily Ritual" />
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-berry-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-berry-purple" />
              </div>
              <p className="font-bold mb-1">Drink Daily</p>
              <p className="text-sm text-berry-plum/60">Morning or after meals for best absorption.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-berry-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThermometerSnowflake className="w-6 h-6 text-berry-purple" />
              </div>
              <p className="font-bold mb-1">Chill First</p>
              <p className="text-sm text-berry-plum/60">Best served cold for a refreshing experience.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-berry-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCw className="w-6 h-6 text-berry-purple" />
              </div>
              <p className="font-bold mb-1">Shake Lightly</p>
              <p className="text-sm text-berry-plum/60">Mix the natural sediment for full benefits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-berry-plum/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Choose Your Wellness Journey" 
            subtitle="Start small or commit to your health with our bundle options."
          />
          
          <div className="grid md:grid-cols-3 gap-8 items-end">
            {/* Single Bottle */}
            <div className="p-8 bg-white rounded-3xl border border-berry-pink/20 shadow-sm">
              <p className="text-sm font-bold text-berry-plum/50 uppercase mb-4">The Taster</p>
              <h3 className="text-2xl mb-2">Single Bottle</h3>
              <p className="text-4xl font-bold mb-6">$5.99</p>
              <ul className="space-y-3 mb-8 text-sm text-berry-plum/70">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-berry-purple" /> 250ml Glass Bottle</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-berry-purple" /> Freshly Fermented</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-berry-purple" /> Local Delivery</li>
              </ul>
              <button className="w-full py-3 rounded-full border-2 border-berry-pink font-bold text-berry-purple hover:bg-berry-pink/10 transition-all">
                Add to Cart
              </button>
            </div>
            
            {/* Weekly Pack */}
            <div className="p-8 bg-white rounded-3xl border-2 border-berry-purple shadow-xl relative scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-berry-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                Most Popular
              </div>
              <p className="text-sm font-bold text-berry-purple uppercase mb-4">The Ritual</p>
              <h3 className="text-2xl mb-2">Weekly Pack</h3>
              <p className="text-4xl font-bold mb-2">$34.99</p>
              <p className="text-xs text-berry-purple font-bold mb-6">Save 15%</p>
              <ul className="space-y-3 mb-8 text-sm text-berry-plum/70">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-berry-purple" /> 7 Bottles (Full Week)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-berry-purple" /> Free Insulated Bag</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-berry-purple" /> Priority Pre-order</li>
              </ul>
              <button className="w-full btn-primary py-3">
                Get Weekly Pack
              </button>
            </div>
            
            {/* Monthly Bundle */}
            <div className="p-8 bg-white rounded-3xl border border-berry-pink/20 shadow-sm">
              <p className="text-sm font-bold text-berry-plum/50 uppercase mb-4">The Commitment</p>
              <h3 className="text-2xl mb-2">Monthly Bundle</h3>
              <p className="text-4xl font-bold mb-2">$119.99</p>
              <p className="text-xs text-green-600 font-bold mb-6">Best Value - Save 30%</p>
              <ul className="space-y-3 mb-8 text-sm text-berry-plum/70">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-berry-purple" /> 28 Bottles</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-berry-purple" /> Monthly Subscription</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-berry-purple" /> Free Shipping</li>
              </ul>
              <button className="w-full py-3 rounded-full border-2 border-berry-pink font-bold text-berry-purple hover:bg-berry-pink/10 transition-all">
                Subscribe & Save
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-berry-purple font-bold flex items-center justify-center gap-2">
              <Info className="w-4 h-4" /> Limited batch fermentation. Only 500 bottles available this week.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-berry-light-pink/50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" subtitle="Everything you need to know about your new wellness ritual." />
          <div className="glass-card p-8 bg-white/90">
            <FAQItem 
              question="Is KOMMU-BERRY safe to drink daily?" 
              answer="Yes! KOMMU-BERRY is designed as a functional beverage for daily consumption. It's 100% natural and fermented under controlled conditions. However, if you have specific health conditions or are pregnant, we always recommend consulting with your doctor."
            />
            <FAQItem 
              question="Does it cure or treat cancer?" 
              answer="No. KOMMU-BERRY is a functional wellness drink designed to support a healthy lifestyle. It is rich in antioxidants and resveratrol, which are known to support cellular health, but it is not a medicine or a treatment for any disease."
            />
            <FAQItem 
              question="Is it halal?" 
              answer="Our fermentation process is carefully monitored to ensure it meets standard food safety guidelines. While kombucha contains trace amounts of alcohol as a natural byproduct of fermentation (usually <0.5%), many consider it permissible. We are currently in the process of official certification."
            />
            <FAQItem 
              question="What is the shelf life?" 
              answer="Because it is a live, fermented product, KOMMU-BERRY should be kept refrigerated. It stays fresh and potent for up to 3 months when chilled."
            />
            <FAQItem 
              question="What does it taste like?" 
              answer="Expect a refreshing, slightly tart, and effervescent profile. The mulberry leaves give it a unique earthy undertone, balanced by the natural berry sweetness and the 'zing' of kombucha."
            />
            <FAQItem 
              question="When is the best time to drink it?" 
              answer="Most of our community enjoys KOMMU-BERRY in the morning to kickstart their day or as a refreshing afternoon pick-me-up. It's also great after a meal to support digestion."
            />
            <FAQItem 
              question="Where are the mulberry leaves sourced?" 
              answer="We source our Morus nigra leaves from local, organic farms that prioritize sustainable agricultural practices, ensuring the highest nutrient density for our fermentation process."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-berry-purple -z-10" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-berry-pink rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-berry-white rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl mb-8">Start Your Daily Wellness Ritual Today</h2>
          <p className="text-xl text-white/70 mb-12">
            Join the movement toward proactive, natural health support. Your body will thank you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-berry-purple px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all">
              Buy Now
            </button>
            <button className="bg-berry-plum text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-berry-plum/80 transition-all">
              Join Waitlist
            </button>
          </div>
          <p className="mt-8 text-sm text-white/40">
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-berry-pink/20 text-center">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <p className="text-sm text-berry-plum/50 mb-4">© 2026 KOMMU-BERRY. Inspired by local research & innovation.</p>
        <div className="flex justify-center gap-6 text-xs font-bold uppercase tracking-widest text-berry-plum/40">
          <a href="#" className="hover:text-berry-purple">Privacy</a>
          <a href="#" className="hover:text-berry-purple">Terms</a>
          <a href="#" className="hover:text-berry-purple">Contact</a>
        </div>
      </footer>

      {/* Sticky CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
          >
            <button className="w-full btn-primary py-4 shadow-2xl flex items-center justify-center gap-2">
              Try KOMMU-BERRY <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
