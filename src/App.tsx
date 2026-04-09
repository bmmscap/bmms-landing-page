/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Mail, ChevronUp, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const navLinks = [
    { name: "What We Do", href: "#what-we-do" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Who We Work With", href: "#who-we-work-with" },
    { name: "Founder", href: "#founder" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight">
            BMMS Capital
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-zinc-200 px-6 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-zinc-600 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="pt-24 pb-20 md:pt-32 md:pb-28 border-b border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-zinc-500 mb-6 block">
                AI strategy and workflow design
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8 max-w-4xl">
                Where capital meets capability
              </h1>
              <p className="text-2xl md:text-3xl font-medium leading-tight mb-8 max-w-3xl">
                Because the next advantage is not just what a firm has, but what it can do.
              </p>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-10 max-w-2xl">
                BMMS Capital helps firms turn AI from early interest into real working capability. We design clear workflows,
                set the right review points, and help teams put AI to work in ways that are useful, manageable, and easy to understand.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold text-sm hover:bg-zinc-800 transition-colors"
                >
                  Book a working session
                </a>
                <a
                  href="#what-we-do"
                  className="inline-flex items-center justify-center px-8 py-4 border border-black text-black font-bold text-sm hover:bg-zinc-50 transition-colors"
                >
                  See how we work
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Do */}
        <section id="what-we-do" className="py-24 border-b border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-zinc-500 mb-6 block">
                What we do
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 max-w-3xl">
                We help firms make AI part of real work.
              </h2>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-16 max-w-3xl">
                The goal is simple: move beyond demos and pilot projects. We help firms choose a workflow that matters,
                shape it around the way people already work, and build the structure needed to use AI with confidence.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-12"
            >
              {[
                {
                  title: "Set the direction",
                  desc: "We help leadership teams decide where AI can create value, where it should not be used, and what success should look like."
                },
                {
                  title: "Design the workflow",
                  desc: "We map the process, define where AI helps, and make sure the work still has clear ownership and review."
                },
                {
                  title: "Make it usable",
                  desc: "We put the right controls, documentation, and decision points in place so the workflow can be used in the real world."
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="group">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-zinc-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 border-b border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-zinc-500 mb-6 block">
                How it works
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
                Start with one workflow worth improving.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeIn}>
                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                  We begin with one high-value process. From there, we identify where AI can help, what needs human review,
                  and what the team needs in order to trust the output.
                </p>
              </motion.div>
              <motion.ul 
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  "Choose a workflow with clear business value",
                  "Define roles, review points, and expected output",
                  "Build a process that fits the team and the work",
                  "Refine based on use, feedback, and results"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    variants={fadeIn}
                    className="flex gap-4 text-lg text-zinc-600"
                  >
                    <span className="text-black font-bold">—</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-32 border-b border-zinc-200 bg-zinc-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-12 max-w-5xl">
                "The firms that get the most from AI will not be the ones that talk about it the most. They will be the ones that know where it fits and how to use it well."
              </blockquote>
              <p className="text-lg md:text-xl text-zinc-600 max-w-2xl">
                BMMS Capital helps clients build that bridge: from interest to action, from experiments to workflows, and from scattered effort to real capability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Work With */}
        <section id="who-we-work-with" className="py-24 border-b border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-zinc-500 mb-6 block">
                Who we work with
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 max-w-3xl">
                Built for firms doing complex, high-trust work.
              </h2>
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-16 max-w-3xl">
                We work with teams that need AI to be practical, clear, and well managed — especially in legal, finance, media, and other areas where accuracy, trust, and judgment matter.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-12"
            >
              {[
                {
                  title: "Legal",
                  desc: "For firms that need strong review, clear accountability, and client confidence."
                },
                {
                  title: "Finance",
                  desc: "For teams that want AI to support research, communication, and decisions without adding confusion."
                },
                {
                  title: "Media",
                  desc: "For businesses that want faster workflows without weakening standards or oversight."
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="group">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-zinc-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Founder */}
        <section id="founder" className="py-24 border-b border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-zinc-500 mb-6 block">
                Founder
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
                Brian A. Martucci
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16">
              <motion.div {...fadeIn}>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Brian A. Martucci is a strategic AI advisor and operating executive with more than 30 years of leadership experience in complex business environments.
                </p>
              </motion.div>
              <motion.div {...fadeIn}>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  He works with firms to turn AI from an idea into a usable part of the business, with clear decisions, clear workflows, and clear accountability.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 border-b border-zinc-200">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-zinc-500 mb-6 block">
                Contact
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
                Start with one clear use case.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-16">
              <motion.div {...fadeIn} className="md:col-span-3">
                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6">
                  Engagements begin with a focused working session. We identify one workflow, define the constraints,
                  and map a practical path forward.
                </p>
                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                  The goal is not a long strategy deck. It is a clear next step your team can use.
                </p>
              </motion.div>
              <motion.div {...fadeIn} className="md:col-span-2 space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Email</h4>
                  <p className="text-xl font-medium">hello@bmmscapital.com</p>
                </div>
                <a
                  href="mailto:hello@bmmscapital.com"
                  className="inline-flex items-center gap-2 text-lg font-bold group"
                >
                  Get in touch
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-zinc-500">
          <div>
            © {currentYear} BMMS Capital
          </div>
          <a 
            href="#top" 
            className="flex items-center gap-2 hover:text-black transition-colors"
          >
            Back to top
            <ChevronUp size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}
