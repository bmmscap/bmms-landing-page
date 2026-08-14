import { useEffect, type ReactNode } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { SiteFooter } from "./SiteFooter";

const EFFECTIVE_DATE = "August 14, 2026";
const SUPPORT_EMAIL = "support@bmms.capital";
const BUSINESS_LOCATION = "Hudson Yards, New York, NY, United States";

type PolicyPageProps = {
  title: string;
  description: string;
  eyebrow: string;
  children: ReactNode;
};

function PolicyPage({ title, description, eyebrow, children }: PolicyPageProps) {
  useEffect(() => {
    document.title = `${title} | BMMS Intelligence`;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    meta?.setAttribute("content", description);
  }, [description, title]);

  return (
    <div className="min-h-screen bg-[#FBFBF8] text-[#141516]">
      <a className="skip-link" href="#policy-content">
        Skip to content
      </a>
      <header className="border-b border-[#D5D5CD] bg-[#FBFBF8]">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="/" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
            <img
              src="/brand/bmms-intelligence-wordmark.svg"
              alt="BMMS Intelligence"
              className="h-auto w-[220px] sm:w-[250px]"
            />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5E625F] transition-colors hover:text-[#141516] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Home
          </a>
        </div>
      </header>

      <main id="policy-content" className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <span className="brand-label mb-5 block">
          {eyebrow}
        </span>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
        <p className="mb-4 max-w-3xl text-lg leading-relaxed text-[#5E625F]">{description}</p>
        <p className="mb-14 text-sm font-semibold text-[#858985]">Effective: {EFFECTIVE_DATE}</p>
        <article className="policy-copy">{children}</article>
      </main>

      <SiteFooter />
    </div>
  );
}

function ContactBlock({ subject }: { subject: string }) {
  const href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;

  return (
    <div className="policy-contact">
      <Mail aria-hidden="true" size={20} />
      <div>
        <strong>Email BMMS Capital LLC</strong>
        <a href={href}>{SUPPORT_EMAIL}</a>
        <span className="policy-address">{BUSINESS_LOCATION}</span>
      </div>
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <PolicyPage
      title="Privacy Policy"
      eyebrow="Privacy"
      description="This policy explains how BMMS Capital LLC collects, uses, discloses, and protects information through this website and BMMS products or services that link to this policy."
    >
      <h2>1. Scope</h2>
      <p>
        This Privacy Policy applies to bmms.capital, related BMMS Capital LLC websites, and BMMS
        applications, AI agents, and services that link to it (collectively, the “Services”). A
        customer agreement, product notice, or organization-specific policy may provide additional
        information for a particular Service.
      </p>

      <h2>2. Information we may process</h2>
      <p>Depending on how you interact with BMMS, we may process:</p>
      <ul>
        <li>
          <strong>Contact and business information</strong>, such as your name, work email,
          organization, role, and information you include in an inquiry or support request.
        </li>
        <li>
          <strong>Service content</strong>, such as prompts, uploaded material, feedback, and output
          when you use a BMMS application or AI-enabled workflow, subject to the applicable product
          configuration and customer agreement.
        </li>
        <li>
          <strong>Technical and security information</strong>, such as IP address, browser and device
          information, timestamps, requested URLs, error records, and other data needed to deliver,
          secure, and troubleshoot the Services.
        </li>
        <li>
          <strong>Marketplace and account information</strong> that Microsoft or another authorized
          channel makes available to fulfill, administer, or support a subscription or request.
        </li>
      </ul>
      <p>
        Do not send passwords, authentication secrets, payment-card data, Social Security numbers,
        health information, or other sensitive personal information unless a BMMS product expressly
        requires it and an approved agreement and secure process cover that use.
      </p>

      <h2>3. How we use information</h2>
      <p>We may use information to:</p>
      <ul>
        <li>respond to inquiries and provide, configure, maintain, and support the Services;</li>
        <li>authenticate users, manage authorized access, and administer subscriptions;</li>
        <li>protect against misuse, fraud, security threats, and service disruption;</li>
        <li>diagnose errors, evaluate quality, and improve approved workflows and documentation;</li>
        <li>comply with law, enforce agreements, and establish or defend legal claims; and</li>
        <li>communicate material service, policy, or security updates.</li>
      </ul>
      <p>
        BMMS does not sell personal information obtained through the Services or use it for
        third-party targeted advertising.
      </p>

      <h2>4. AI-enabled Services and human review</h2>
      <p>
        Some BMMS Services use generative AI. Product documentation or a customer agreement may
        describe additional processing, retention, and administrator controls. Users should submit
        only information they are authorized to use. BMMS designs its AI-enabled Services to support
        people, not to replace appropriate human review of material decisions and outputs.
      </p>

      <h2>5. Microsoft and other service providers</h2>
      <p>
        BMMS may use Microsoft 365, Microsoft Azure, Microsoft Marketplace, Vercel, and other
        authorized providers to host, distribute, secure, support, or operate the Services. Those
        providers may process information under their applicable agreements and privacy terms. If
        your organization provides access to a BMMS Service, that organization may control identity,
        access, retention, audit, and other settings.
      </p>

      <h2>6. Disclosure of information</h2>
      <p>BMMS may disclose information:</p>
      <ul>
        <li>to authorized users, administrators, and customer representatives;</li>
        <li>to vendors and professional advisers that support the Services under appropriate duties;</li>
        <li>when required by law or a valid legal process;</li>
        <li>to protect rights, safety, security, and service integrity; or</li>
        <li>in connection with a corporate transaction, subject to applicable safeguards.</li>
      </ul>

      <h2 id="cookies">7. Cookies and similar technologies</h2>
      <p>
        This public website does not currently use advertising cookies or nonessential analytics
        cookies. Hosting and security providers may process essential request data or maintain
        similar technical information to deliver and protect the site. If BMMS introduces
        nonessential cookies, this notice will be updated and cookie choices will be provided where
        required by law.
      </p>

      <h2>8. Retention</h2>
      <p>
        BMMS retains information only as long as reasonably necessary for the purpose for which it
        was collected, including contractual, security, audit, dispute, and legal requirements.
        Product data may be governed by customer-configured Microsoft retention controls or a
        product-specific agreement.
      </p>

      <h2>9. Security</h2>
      <p>
        BMMS uses administrative, technical, and organizational measures designed to protect
        information against unauthorized access, use, alteration, loss, or disclosure. No service
        can guarantee absolute security. Users must follow their organization’s access,
        confidentiality, records-management, and acceptable-use requirements.
      </p>

      <h2>10. Your privacy rights</h2>
      <p>
        Depending on your location, you may have rights to request access, correction, deletion,
        restriction, portability, or objection concerning personal information. BMMS may verify your
        identity and authority before fulfilling a request. If another organization controls the
        relevant information, BMMS may direct you to that organization or coordinate with it.
      </p>

      <h2>11. Children’s privacy</h2>
      <p>
        The Services are intended for business users and are not directed to children. BMMS does not
        knowingly collect personal information from children through this website.
      </p>

      <h2>12. Changes and contact</h2>
      <p>
        BMMS may update this policy as its Services, practices, or legal obligations change. The
        effective date above identifies the current version. BMMS Capital LLC’s public business
        location is Hudson Yards, New York, NY, United States. Contact BMMS with a privacy question
        or request using “Privacy Request” in the subject line.
      </p>
      <ContactBlock subject="Privacy Request" />
    </PolicyPage>
  );
}

export function TermsOfUse() {
  return (
    <PolicyPage
      title="Terms of Use"
      eyebrow="Legal"
      description="These Terms govern use of the BMMS Capital LLC website and BMMS products or services that link to them, unless more specific terms apply."
    >
      <h2>1. Acceptance and scope</h2>
      <p>
        By accessing this website or using a BMMS product or service that links to these Terms, you
        agree to these Terms. If you use a Service for an organization, you represent that you are
        authorized to do so and must also follow that organization’s policies.
      </p>
      <p>
        A product-specific end user license agreement (“EULA”), order form, statement of work,
        subscription agreement, Microsoft Standard Contract or amendment, or other written agreement
        may apply to a particular BMMS offer. If those terms conflict with these general Terms, the
        more specific terms control for that offer.
      </p>

      <h2>2. Permitted use</h2>
      <p>
        You may use the website for lawful informational and business purposes. You may use a BMMS
        application only within the scope of the applicable license, subscription, documentation,
        and organizational authorization. Rights not expressly granted are reserved.
      </p>

      <h2>3. Acceptable use</h2>
      <p>You must not:</p>
      <ul>
        <li>use the Services unlawfully or infringe the rights of another person or organization;</li>
        <li>submit content you are not authorized to use, process, or disclose;</li>
        <li>bypass access controls, disrupt the Services, introduce malicious code, or probe for vulnerabilities without written authorization;</li>
        <li>use unverified output to make a consequential decision about an individual;</li>
        <li>misrepresent AI-generated material as independently verified human analysis; or</li>
        <li>use the Services to facilitate fraud, harassment, discrimination, impersonation, or harm.</li>
      </ul>

      <h2>4. AI outputs and human review</h2>
      <p>
        AI-generated output may be incomplete, inaccurate, biased, stale, or inappropriate for a
        particular purpose. You are responsible for reviewing material facts, citations,
        calculations, permissions, and legal or compliance implications before relying on or sharing
        output. Unless expressly stated in a signed agreement, a BMMS Service does not independently
        approve transactions, contact third parties, make commitments, or make final decisions for a
        user or organization.
      </p>

      <h2>5. No professional advice</h2>
      <p>
        The Services and their outputs do not constitute legal, investment, tax, accounting,
        employment, insurance, medical, or other regulated professional advice. Obtain advice from a
        qualified professional for your circumstances. See the <a href="/legal">Legal Disclaimer</a>
        for additional information.
      </p>

      <h2>6. User content and confidentiality</h2>
      <p>
        You retain any rights you have in content you submit. You represent that you have the rights
        and permissions necessary to submit that content and request the intended processing. You
        remain responsible for applying appropriate confidentiality, privilege, classification,
        retention, and distribution controls to inputs and outputs.
      </p>

      <h2>7. BMMS intellectual property</h2>
      <p>
        The Services, software, workflows, documentation, designs, and BMMS-provided materials are
        owned by BMMS or its licensors and are protected by applicable intellectual-property laws.
        These Terms do not grant a right to copy, modify, distribute, sell, sublicense, reverse
        engineer, or create derivative works except as expressly permitted by law or a written
        agreement.
      </p>

      <h2>8. Privacy</h2>
      <p>
        The <a href="/privacy">Privacy Policy</a> explains BMMS’s handling of information. Microsoft
        and other service providers may separately process information under their applicable
        agreements and privacy terms.
      </p>

      <h2>9. Third-party services and links</h2>
      <p>
        A Service may rely on or link to Microsoft and other third-party services or content. BMMS
        does not control third-party content and does not guarantee its accuracy, availability,
        security, or continued accessibility. Separate third-party terms may apply.
      </p>

      <h2>10. Availability, changes, and support</h2>
      <p>
        BMMS may update, restrict, suspend, or discontinue a Service as permitted by the applicable
        agreement. Features and third-party dependencies may change. Unless a written agreement says
        otherwise, BMMS does not guarantee uninterrupted availability or a specific response time.
        Support information is available on the <a href="/support">Support page</a>.
      </p>

      <h2>11. Disclaimers</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE WEBSITE, SERVICES, AND OUTPUTS ARE PROVIDED “AS IS”
        AND “AS AVAILABLE.” BMMS DISCLAIMS IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR
        A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, AND UNINTERRUPTED AVAILABILITY. BMMS
        DOES NOT WARRANT THAT AI OUTPUT WILL BE ERROR-FREE OR PRODUCE A PARTICULAR BUSINESS RESULT.
      </p>

      <h2>12. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, BMMS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL,
        SPECIAL, EXEMPLARY, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOSS OF DATA, PROFITS, REVENUE,
        GOODWILL, OR BUSINESS OPPORTUNITY ARISING FROM THE WEBSITE OR SERVICES. PRODUCT-SPECIFIC TERMS
        MAY INCLUDE ADDITIONAL LIMITS, CAPS, OR REMEDIES. NOTHING IN THESE TERMS EXCLUDES LIABILITY
        THAT CANNOT LAWFULLY BE EXCLUDED.
      </p>

      <h2>13. Suspension and termination</h2>
      <p>
        BMMS or the organization that authorized access may suspend or terminate access for security,
        legal, operational, policy, nonpayment, or misuse concerns, subject to the applicable
        agreement. Provisions that by their nature should survive will remain in effect.
      </p>

      <h2>14. Changes and contact</h2>
      <p>
        BMMS may update these Terms. The effective date above identifies the current version. Material
        changes will be communicated when required by law or an applicable agreement. Questions about
        these Terms may be sent to BMMS.
      </p>
      <ContactBlock subject="Terms of Use Question" />
    </PolicyPage>
  );
}

export function SupportPage() {
  return (
    <PolicyPage
      title="Support"
      eyebrow="Customer care"
      description="Public support information for BMMS Capital LLC services, software, AI agents, and Microsoft Marketplace offers."
    >
      <h2>Contact support</h2>
      <p>
        Email BMMS Capital with “Support Request” in the subject line. This channel supports BMMS
        website, product, access, configuration, licensing, documentation, and service questions.
      </p>
      <ContactBlock subject="Support Request" />

      <h2>What to include</h2>
      <p>To help BMMS investigate efficiently, include:</p>
      <ul>
        <li>the BMMS product, agent, offer, or page involved;</li>
        <li>your organization and the email address associated with your access;</li>
        <li>a concise description of what you expected and what happened;</li>
        <li>the date, time, and time zone of the issue;</li>
        <li>the full error message and steps that reproduce the issue; and</li>
        <li>screenshots with confidential or personal information removed where possible.</li>
      </ul>
      <p>
        Do not email passwords, authentication codes, private keys, payment-card information, or
        unnecessary confidential or sensitive personal information.
      </p>

      <h2>Support coverage</h2>
      <p>
        The support mailbox is monitored on U.S. business days. BMMS aims to acknowledge requests
        within two business days. A signed customer agreement or product support plan may provide
        different coverage, priority levels, or response commitments and will control where
        applicable.
      </p>

      <h2>Security and privacy reports</h2>
      <p>
        For a suspected security issue, use “Security Report” in the subject line. For a privacy
        question or individual-rights request, use “Privacy Request.” Include enough information for
        BMMS to assess the issue, but do not include active credentials or exploit sensitive data in
        the initial email.
      </p>

      <h2>Microsoft Marketplace and Microsoft account issues</h2>
      <p>
        BMMS supports the operation and use of BMMS offers. Microsoft controls Marketplace billing
        infrastructure, Microsoft account access, and some subscription administration. If the issue
        concerns Microsoft’s platform rather than a BMMS product, BMMS may direct you to
        <a href="https://support.microsoft.com/contactus" rel="noreferrer" target="_blank">
          Microsoft Support
        </a>.
      </p>

      <h2>Service status and updates</h2>
      <p>
        BMMS will communicate material service incidents or required actions through the affected
        customer’s designated contact or the relevant service channel. Contact support if you need a
        current status for a BMMS Service.
      </p>
    </PolicyPage>
  );
}

export function LegalDisclaimer() {
  return (
    <PolicyPage
      title="Legal Disclaimer"
      eyebrow="Important information"
      description="Important limitations on information, AI-generated output, and professional advice provided through BMMS Capital LLC services."
    >
      <h2>No professional advice</h2>
      <p>
        Information provided on this website or through a BMMS Service is for general business and
        informational purposes. BMMS does not provide legal, investment, tax, accounting, medical,
        insurance, or other regulated professional advice through the website or AI-generated output.
        Use qualified advisers for advice specific to your circumstances.
      </p>

      <h2>AI-generated output requires human review</h2>
      <p>
        AI-generated output may contain errors, omissions, unsupported conclusions, outdated
        information, or bias. Citations may not support every interpretation. A qualified person must
        independently review material facts, sources, calculations, permissions, risks, and legal or
        compliance implications before output is relied upon, shared, published, or used for action.
      </p>

      <h2>No attorney-client or fiduciary relationship</h2>
      <p>
        Accessing this website, contacting BMMS, or using a BMMS Service does not create an
        attorney-client, accountant-client, investment-advisory, fiduciary, or other professional
        relationship. A relationship arises only under an applicable written agreement.
      </p>

      <h2>Business and investment information</h2>
      <p>
        References to companies, markets, opportunities, forecasts, or expected outcomes are not an
        offer, solicitation, recommendation, or guarantee. Business and investment decisions involve
        risk, and past or modeled performance does not guarantee future results.
      </p>

      <h2>Third-party information</h2>
      <p>
        BMMS may reference public filings, websites, news, or other third-party sources. BMMS does
        not control those sources and does not guarantee their accuracy, completeness, security, or
        continued availability. A link or citation does not imply endorsement.
      </p>

      <h2>Contact</h2>
      <p>Send a question about this disclaimer to BMMS Capital.</p>
      <ContactBlock subject="Legal Disclaimer Question" />
    </PolicyPage>
  );
}

export function AccessibilityStatement() {
  return (
    <PolicyPage
      title="Accessibility Statement"
      eyebrow="Accessibility"
      description="BMMS Capital is committed to making its public website and digital services usable by people with disabilities."
    >
      <h2>Our commitment</h2>
      <p>
        BMMS aims to align its public digital experiences with the Web Content Accessibility
        Guidelines (WCAG) 2.2 Level AA where reasonably practicable. Accessibility is considered in
        design, content, development, and ongoing maintenance.
      </p>

      <h2>Measures we take</h2>
      <ul>
        <li>use semantic headings, landmarks, and descriptive links;</li>
        <li>support keyboard navigation and visible keyboard focus;</li>
        <li>maintain readable contrast, scalable text, and responsive layouts;</li>
        <li>label interactive controls for assistive technologies; and</li>
        <li>review accessibility when material website changes are released.</li>
      </ul>

      <h2>Known limitations</h2>
      <p>
        Some third-party content or services linked from BMMS may be outside BMMS’s control. BMMS
        continues to improve its own content and will work to provide a reasonable alternative when a
        reported barrier prevents access to information or a service.
      </p>

      <h2>Feedback and assistance</h2>
      <p>
        If you encounter an accessibility barrier, need information in another format, or want help
        using a BMMS Service, email BMMS with “Accessibility Request” in the subject line. Please
        identify the page or Service, describe the barrier, and state the format or assistance you
        need. BMMS will review the request and respond as promptly as reasonably possible.
      </p>
      <ContactBlock subject="Accessibility Request" />
    </PolicyPage>
  );
}

export function NotFoundPage() {
  return (
    <PolicyPage
      title="Page not found"
      eyebrow="404"
      description="The page you requested is not available."
    >
      <p>
        Return to the <a href="/">BMMS Capital home page</a> or visit <a href="/support">Support</a>.
      </p>
    </PolicyPage>
  );
}

export function getPolicyPage(pathname: string) {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

  switch (normalizedPath) {
    case "/privacy":
      return <PrivacyPolicy />;
    case "/terms":
      return <TermsOfUse />;
    case "/support":
      return <SupportPage />;
    case "/legal":
    case "/disclaimer":
      return <LegalDisclaimer />;
    case "/accessibility":
      return <AccessibilityStatement />;
    case "/":
      return null;
    default:
      return <NotFoundPage />;
  }
}
