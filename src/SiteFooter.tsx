import { ChevronUp } from "lucide-react";

export const policyLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Support", href: "/support" },
  { label: "Legal Disclaimer", href: "/legal" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Cookie Notice", href: "/privacy#cookies" },
];

type SiteFooterProps = {
  showBackToTop?: boolean;
};

export function SiteFooter({ showBackToTop = false }: SiteFooterProps) {
  return (
    <footer className="border-t border-[#D5D5CD] bg-[#FBFBF8] py-10">
      <div className="mx-auto max-w-6xl px-6">
        <img
          src="/brand/bmms-intelligence-wordmark.svg"
          alt="BMMS Intelligence"
          className="mb-7 h-auto w-[220px]"
        />
        <nav
          aria-label="Legal and support"
          className="mb-8 flex flex-wrap gap-x-6 gap-y-3 text-sm"
        >
          {policyLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-semibold text-[#5E625F] transition-colors hover:text-[#141516] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-5 text-sm text-[#5E625F] sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div>© {new Date().getFullYear()} BMMS Capital LLC. All rights reserved.</div>
            <div className="mt-1 text-xs text-[#858985]">BMMS Intelligence is a DBA of BMMS Capital LLC.</div>
            <div className="mt-1 text-xs text-[#858985]">Hudson Yards, New York, NY, United States</div>
          </div>
          {showBackToTop ? (
            <a
              href="#top"
              className="flex items-center gap-2 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Back to top
              <ChevronUp aria-hidden="true" size={16} />
            </a>
          ) : (
            <a
              href="/"
              className="font-medium transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Return to BMMS Intelligence
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
