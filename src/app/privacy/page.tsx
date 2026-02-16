import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Behar Kabashi",
  description: "Privacy Policy for Behar Kabashi Web Design services.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Last updated: February 13, 2026
        </p>

        <h2>1. Introduction</h2>
        <p>
          Behar Kabashi (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website
          beharkabashi.com. This Privacy Policy explains how we collect, use, and
          protect your personal information when you use our website and services.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ul>
          <li><strong>Contact Information:</strong> Name, email address, phone number, and business name when you contact us or request a demo website.</li>
          <li><strong>Business Information:</strong> Publicly available business data such as business name, address, phone number, and Google reviews rating.</li>
          <li><strong>Usage Data:</strong> Anonymous analytics data about how you interact with our website, including pages visited and time spent.</li>
          <li><strong>Communication Data:</strong> Messages sent through WhatsApp or our contact form.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Create and deliver demo websites for your business</li>
          <li>Communicate with you about our services</li>
          <li>Improve our website and services</li>
          <li>Send you relevant business offers (with your consent)</li>
        </ul>

        <h2>4. Data Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties.
          We may share data with trusted service providers (such as Vercel for hosting
          and WhatsApp for messaging) solely to deliver our services.
        </p>

        <h2>5. Data Storage and Security</h2>
        <p>
          Your data is stored securely using industry-standard practices. We use
          encrypted connections (HTTPS) and secure cloud hosting. We retain your
          data only as long as necessary to provide our services.
        </p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing communications at any time</li>
        </ul>

        <h2>7. Cookies</h2>
        <p>
          Our website may use cookies and similar technologies for analytics
          purposes. You can control cookies through your browser settings.
        </p>

        <h2>8. WhatsApp Communication</h2>
        <p>
          If we contact you via WhatsApp, you can opt out at any time by replying
          &quot;STOP&quot;. We will immediately cease all WhatsApp communications.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated date.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at:
        </p>
        <ul>
          <li>Email: beharkabashi96@hotmail.com</li>
          <li>Website: beharkabashi.com</li>
        </ul>
      </div>
    </main>
  );
}
