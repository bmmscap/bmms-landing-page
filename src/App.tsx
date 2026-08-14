/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { getPolicyPage } from "./PolicyPages";
import { SiteFooter } from "./SiteFooter";

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
  const policyPage = getPolicyPage(window.location.pathname);

  if (policyPage) {
    return policyPage;
  }

  const navLinks = [
    { name: "What We Do", href: "#what-we-do" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Who We Work With", href: "#who-we-work-with" },
    { name: "Founder", href: "#founder" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBF8] text-[#141516] selection:bg-[#141516] selection:text-[#FBFBF8]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#D5D5CD] bg-[#FBFBF8]/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" aria-label="BMMS Intelligence home" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
            <img
              src="/brand/bmms-intelligence-wordmark.svg"
              alt="BMMS Intelligence"
              className="h-auto w-[220px] sm:w-[250px]"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#5E625F] transition-colors hover:text-[#141516] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6 border-b border-[#D5D5CD] bg-[#FBFBF8] px-6 py-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-semibold text-[#5E625F] transition-colors hover:text-[#141516]"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="brand-hero border-b border-[#D5D5CD] pb-16 pt-24 md:pb-20 md:pt-32">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="brand-label mb-8 block">
                BMMS Capital LLC / Intelligence and AI systems
              </span>
              <h1 className="mb-8 max-w-5xl text-5xl font-bold leading-[0.94] tracking-[-0.055em] md:text-7xl lg:text-8xl">
                Know sooner.<br />Act smarter.
              </h1>
              <p className="mb-8 max-w-3xl text-2xl font-semibold leading-tight md:text-3xl">
                Turn trusted information and AI into practical, governed capability.
              </p>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#5E625F] md:text-xl">
                BMMS Intelligence helps firms move from AI interest to useful work. We design clear workflows,
                place evidence and human review where they matter, and make accountability visible.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="brand-button-primary"
                >
                  Book a working session
                </a>
                <a
                  href="#what-we-do"
                  className="brand-button-secondary"
                >
                  See how we work
                </a>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="brand-rail mt-20">
              {[
                ["01", "Intelligence"],
                ["02", "Control"],
                ["03", "Judgment"],
                ["04", "Action"],
              ].map(([number, label], index) => (
                <div key={label} className={index === 3 ? "brand-rail-item brand-rail-item-signal" : "brand-rail-item"}>
                  <span>{number}</span>
                  <strong>{label}</strong>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What We Do */}
        <section id="what-we-do" className="border-b border-[#D5D5CD] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="brand-label mb-6 block">
                What we do
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 max-w-3xl">
                We help firms make AI part of real work.
              </h2>
              <p className="mb-16 max-w-3xl text-lg leading-relaxed text-[#5E625F] md:text-xl">
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
                <motion.div key={i} variants={fadeIn} className="brand-proof group">
                  <span className="brand-proof-number">0{i + 1}</span>
                  <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-[#5E625F]">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-[#5E625F]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="border-b border-[#D5D5CD] bg-[#F3F3EE] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="brand-label mb-6 block">
                How it works
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
                Start with one workflow worth improving.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeIn}>
                <p className="text-lg leading-relaxed text-[#5E625F] md:text-xl">
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
                    className="flex gap-4 border-t border-[#D5D5CD] pt-5 text-lg text-[#5E625F]"
                  >
                    <span className="font-bold text-[#D84B3E]">—</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="border-b border-[#D5D5CD] bg-[#101214] py-28 text-[#FBFBF8]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="brand-label mb-8 block">Our point of view</span>
              <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-12 max-w-5xl">
                "The firms that get the most from AI will not be the ones that talk about it the most. They will be the ones that know where it fits and how to use it well."
              </blockquote>
              <p className="max-w-2xl text-lg text-[#D5D5CD] md:text-xl">
                BMMS Intelligence helps clients build that bridge: from interest to action, from experiments to workflows, and from scattered effort to real capability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Work With */}
        <section id="who-we-work-with" className="border-b border-[#D5D5CD] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="brand-label mb-6 block">
                Who we work with
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 max-w-3xl">
                Built for firms doing complex, high-trust work.
              </h2>
              <p className="mb-16 max-w-3xl text-lg leading-relaxed text-[#5E625F] md:text-xl">
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
                <motion.div key={i} variants={fadeIn} className="brand-proof group">
                  <span className="brand-proof-number">0{i + 1}</span>
                  <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-[#5E625F]">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-[#5E625F]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Founder */}
        <section id="founder" className="border-b border-[#D5D5CD] bg-[#F3F3EE] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="brand-label mb-6 block">
                Founder
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
                Brian A. Martucci
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16">
              <motion.div {...fadeIn}>
                <p className="text-lg leading-relaxed text-[#5E625F]">
                  Brian A. Martucci is a strategic AI advisor and operating executive with more than 30 years of leadership experience in complex business environments.
                </p>
              </motion.div>
              <motion.div {...fadeIn}>
                <p className="text-lg leading-relaxed text-[#5E625F]">
                  He works with firms to turn AI from an idea into a usable part of the business, with clear decisions, clear workflows, and clear accountability.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-b border-[#D5D5CD] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="brand-label mb-6 block">
                Contact
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
                Start with one clear use case.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-16">
              <motion.div {...fadeIn} className="md:col-span-3">
                <p className="mb-6 text-lg leading-relaxed text-[#5E625F] md:text-xl">
                  Engagements begin with a focused working session. We identify one workflow, define the constraints,
                  and map a practical path forward.
                </p>
                <p className="text-lg leading-relaxed text-[#5E625F] md:text-xl">
                  The goal is not a long strategy deck. It is a clear next step your team can use.
                </p>
              </motion.div>
              <motion.div {...fadeIn} className="md:col-span-2 space-y-8">
                <div>
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-widest text-[#858985]">Email</h4>
                  <p className="text-xl font-medium">support@bmms.capital</p>
                </div>
                <a
                  href="mailto:support@bmms.capital?subject=Working%20Session%20Request"
                  className="group inline-flex items-center gap-2 text-lg font-bold text-[#D84B3E]"
                >
                  Get in touch
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter showBackToTop />
    </div>
  );
}
