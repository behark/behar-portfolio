import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Behar Kabashi",
  description: "Terms of Service for Behar Kabashi Web Design services.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Last updated: February 13, 2026
        </p>

        <h2>1. Overview</h2>
        <p>
          These Terms of Service govern your use of the website beharkabashi.com
          and the web design services provided by Behar Kabashi (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;).
        </p>

        <h2>2. Services</h2>
        <p>
          We provide professional web design and development services for
          businesses. Our services include:
        </p>
        <ul>
          <li>Free demo website creation for prospective clients</li>
          <li>Custom website design and development</li>
          <li>Website hosting and deployment</li>
          <li>Ongoing website maintenance and support</li>
        </ul>

        <h2>3. Demo Websites</h2>
        <p>
          Demo websites are provided free of charge as a preview of our services.
          Demo websites remain our property until a paid agreement is established.
          We reserve the right to remove demo websites at any time.
        </p>

        <h2>4. Paid Services</h2>
        <p>
          Pricing for paid services will be agreed upon before work begins. Payment
          terms will be outlined in a separate agreement. All prices are in EUR
          unless otherwise stated.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          Upon full payment, the client receives full ownership of the website
          design and content created for them. We retain the right to showcase
          completed work in our portfolio unless otherwise agreed.
        </p>

        <h2>6. Client Responsibilities</h2>
        <p>Clients are responsible for:</p>
        <ul>
          <li>Providing accurate business information</li>
          <li>Reviewing and approving website content</li>
          <li>Timely communication and feedback</li>
          <li>Ensuring they have rights to any content they provide</li>
        </ul>

        <h2>7. Limitation of Liability</h2>
        <p>
          Our services are provided &quot;as is&quot;. We are not liable for any indirect,
          incidental, or consequential damages arising from the use of our
          services or websites we create.
        </p>

        <h2>8. Communication</h2>
        <p>
          By engaging with our services, you consent to receiving communications
          via email, WhatsApp, or phone. You may opt out of marketing
          communications at any time by replying &quot;STOP&quot; or contacting us directly.
        </p>

        <h2>9. Termination</h2>
        <p>
          Either party may terminate the service agreement with written notice.
          Upon termination, any outstanding payments remain due.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms of Service at any time.
          Continued use of our services constitutes acceptance of updated terms.
        </p>

        <h2>11. Contact</h2>
        <p>
          For questions about these terms, contact us at:
        </p>
        <ul>
          <li>Email: beharkabashi96@hotmail.com</li>
          <li>Website: beharkabashi.com</li>
        </ul>
      </div>
    </main>
  );
}
