import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Behar Kabashi",
  description: "Cookie Policy for Behar Kabashi / Apex Agency web design services.",
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Last updated: May 16, 2026
        </p>

        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files placed on your device when you visit a website.
          They help the website remember information about your visit, making it more
          useful and easier to use on future visits.
        </p>

        <h2>2. How We Use Cookies</h2>
        <p>Our website (beharkabashi.com) uses cookies for the following purposes:</p>
        <ul>
          <li><strong>Essential cookies:</strong> Required for the website to function correctly. These cannot be disabled.</li>
          <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website (e.g., pages visited, time spent). Data is anonymous.</li>
          <li><strong>Preference cookies:</strong> Remember your settings such as dark/light mode.</li>
        </ul>

        <h2>3. Third-Party Cookies</h2>
        <p>We may use third-party services that place their own cookies, including:</p>
        <ul>
          <li><strong>Vercel Analytics:</strong> Anonymous performance and usage data.</li>
          <li><strong>Google Analytics</strong> (if enabled): Aggregated website traffic data.</li>
        </ul>
        <p>
          These third parties have their own privacy policies governing their use of cookies.
        </p>

        <h2>4. Managing Cookies</h2>
        <p>
          You can control and delete cookies through your browser settings. Please note
          that disabling certain cookies may affect the functionality of our website.
          Here are links to cookie management guides for common browsers:
        </p>
        <ul>
          <li>Google Chrome</li>
          <li>Mozilla Firefox</li>
          <li>Safari</li>
          <li>Microsoft Edge</li>
        </ul>

        <h2>5. Your Consent</h2>
        <p>
          By continuing to use our website, you consent to our use of cookies as
          described in this policy. If you do not agree, you may disable cookies
          in your browser settings or stop using the website.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Any changes will be
          posted on this page with an updated date.
        </p>

        <h2>7. Contact Us</h2>
        <p>If you have questions about our use of cookies, contact us at:</p>
        <ul>
          <li>Email: beharkabashi96@hotmail.com</li>
          <li>Website: beharkabashi.com</li>
        </ul>
      </div>
    </main>
  );
}
