/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { getPolicyPage } from "./PolicyPages";
import { SiteFooter } from "./SiteFooter";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const fadeIn = {
    initial: reduceMotion ? false : "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: {
      hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: reduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
      }
    }
  };
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } }
  };
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
      <a className="skip-link" href="#top">Skip to content</a>
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b border-[#D5D5CD] bg-[#FBFBF8]/95 backdrop-blur-md"
        onKeyDown={(event) => {
          if (event.key === "Escape" && isMenuOpen) {
            setIsMenuOpen(false);
            menuButtonRef.current?.focus();
          }
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" aria-label="BMMS Intelligence home" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
            <img
              src="/brand/bmms-intelligence-wordmark.svg"
              alt="BMMS Intelligence"
              className="h-auto w-[220px] sm:w-[250px]"
            />
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-8">
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
            ref={menuButtonRef}
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 lg:hidden"
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
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="flex max-h-[calc(100dvh-5rem)] flex-col gap-6 overflow-y-auto border-b border-[#D5D5CD] bg-[#FBFBF8] px-6 py-8 lg:hidden"
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

      <main id="top" tabIndex={-1}>
        {/* Hero */}
        <section className="brand-hero border-b border-[#D5D5CD] pb-16 pt-24 md:pb-20 md:pt-32">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="brand-label mb-8 block">
                BMMS Capital LLC / Intelligence and AI systems
              </span>
              <h1 className="mb-8 max-w-5xl text-[clamp(2rem,10vw,3rem)] font-bold leading-[0.94] tracking-[-0.055em] md:text-7xl lg:text-8xl">
                Firm boundaries.<br />Fluid intelligence.
              </h1>
              <p className="mb-8 max-w-3xl text-2xl font-semibold leading-tight md:text-3xl">
                Accelerate enterprise AI innovation within clear governance boundaries.
              </p>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#5E625F] md:text-xl">
                BMMS Intelligence helps organizations improve AI workflows continuously within agreed controls.
                The aim: faster learning, more useful intelligence, and a clear path to approval when the boundaries need to change.
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
        <section id="what-we-do" tabIndex={-1} className="border-b border-[#D5D5CD] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="brand-label mb-6 block">
                What we do
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 max-w-3xl">
                Make continuous improvement part of the operating model.
              </h2>
              <p className="mb-16 max-w-3xl text-lg leading-relaxed text-[#5E625F] md:text-xl">
                AI capability evolves quickly. Enterprise accountability must keep pace. We help leadership teams define
                what can improve within agreed controls, what requires approval, and how to assess business value as the work evolves.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-12"
            >
              {[
                {
                  title: "Define the envelope",
                  desc: "Agree the permitted data, access, actions, review requirements, and owners. Establish what success looks like before expanding the workflow."
                },
                {
                  title: "Improve within it",
                  desc: "Refine interfaces, prompts, synthesis, and intelligence products within those boundaries. Use evidence and feedback to assess quality and usefulness."
                },
                {
                  title: "Expand deliberately",
                  desc: "When a change affects identity, permissions, sensitive data, security, or consequential actions, bring it through the agreed approval process before release."
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn.variants} className="brand-proof group">
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
        <section id="how-it-works" tabIndex={-1} className="border-b border-[#D5D5CD] bg-[#F3F3EE] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="brand-label mb-6 block">
                How it works
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
                Start with value. Define the boundaries. Keep improving.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeIn}>
                <p className="text-lg leading-relaxed text-[#5E625F] md:text-xl">
                  We begin with one high-value process and the controls it needs. Then we separate improvements within
                  the agreed envelope from changes to the envelope itself, with clear ownership and evidence at each step.
                </p>
              </motion.div>
              <motion.ul 
                variants={staggerContainer}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  "Choose a workflow with clear business value",
                  "Agree data, access, actions, and human review",
                  "Evaluate improvements within those controls",
                  "Approve boundary changes before release"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    variants={fadeIn.variants}
                    className="flex gap-4 border-t border-[#D5D5CD] pt-5 text-lg text-[#5E625F]"
                  >
                    <span className="font-bold text-[#D84B3E]">—</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="mt-16 grid gap-12 md:grid-cols-2">
              {[
                {
                  title: "Within the envelope",
                  desc: "Interfaces, prompts, synthesis methods, taxonomies, and intelligence products can evolve continuously when they stay within agreed data, access, and action limits and meet review and quality requirements."
                },
                {
                  title: "Changing the envelope",
                  desc: "Changes to identity, permissions, sensitive-data boundaries, security architecture, or consequential external actions require deliberate approval. If an improvement crosses those limits, it follows this path too."
                }
              ].map((item) => (
                <motion.div key={item.title} {...fadeIn} className="brand-proof">
                  <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                  <p className="leading-relaxed text-[#5E625F]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="brand-inverse border-b border-[#D5D5CD] bg-[#101214] py-28 text-[#FBFBF8]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="brand-label mb-8 block">Our point of view</span>
              <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-12 max-w-5xl">
                “Move fast inside the governed envelope. Slow down when we change the envelope.”
              </blockquote>
              <p className="max-w-2xl text-lg text-[#D5D5CD] md:text-xl">
                This is the operating principle behind our approach. Clear boundaries give teams room to learn and improve,
                while keeping changes to enterprise controls deliberate and accountable. The commercial opportunity is a shorter
                path from feedback to useful capability, with governance focused on the decisions that need it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Work With */}
        <section id="who-we-work-with" tabIndex={-1} className="border-b border-[#D5D5CD] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <span className="brand-label mb-6 block">
                Who we work with
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 max-w-3xl">
                For organizations doing complex, high-trust work.
              </h2>
              <p className="mb-16 max-w-3xl text-lg leading-relaxed text-[#5E625F] md:text-xl">
                We work with teams that need AI to be practical, clear, and well managed — especially in legal, finance, media, and other areas where accuracy, trust, and judgment matter.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
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
                <motion.div key={i} variants={fadeIn.variants} className="brand-proof group">
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
        <section id="founder" tabIndex={-1} className="border-b border-[#D5D5CD] bg-[#F3F3EE] py-24">
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
        <section id="contact" tabIndex={-1} className="border-b border-[#D5D5CD] py-24">
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
                  Engagements begin with a focused working session. We identify one valuable workflow, map its governance
                  boundaries, and define what your team can improve within them.
                </p>
                <p className="text-lg leading-relaxed text-[#5E625F] md:text-xl">
                  Leave with a practical next step: clear owners, review requirements, and a way to assess value.
                </p>
              </motion.div>
              <motion.div {...fadeIn} className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-[#6B706C]">Email</h3>
                  <p className="text-xl font-medium">support@bmms.capital</p>
                </div>
                <a
                  href="mailto:support@bmms.capital?subject=Working%20Session%20Request"
                  className="brand-contact-link group inline-flex items-center gap-2 text-lg font-bold"
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
