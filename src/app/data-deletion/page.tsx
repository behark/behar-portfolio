import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion - Behar Kabashi",
  description: "Request deletion of your personal data from Behar Kabashi services.",
};

export default function DataDeletion() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h1 className="text-3xl font-bold mb-8">Data Deletion Request</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Last updated: February 13, 2026
        </p>

        <h2>How to Request Data Deletion</h2>
        <p>
          You have the right to request the deletion of your personal data from
          our systems. We take your privacy seriously and will process all
          deletion requests promptly.
        </p>

        <h2>What Data We May Hold</h2>
        <ul>
          <li>Your name and business name</li>
          <li>Phone number and email address</li>
          <li>Business address and Google reviews information</li>
          <li>Any demo website we created for your business</li>
          <li>WhatsApp conversation history</li>
        </ul>

        <h2>How to Submit a Request</h2>
        <p>To request deletion of your data, please contact us through one of these methods:</p>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
          <p className="font-semibold mb-2">Option 1: Email</p>
          <p>Send an email to <strong>beharkabashi96@hotmail.com</strong> with the subject line &quot;Data Deletion Request&quot; and include your name and phone number so we can identify your records.</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
          <p className="font-semibold mb-2">Option 2: WhatsApp</p>
          <p>Send us a WhatsApp message requesting data deletion. We will confirm receipt and process your request.</p>
        </div>

        <h2>What Happens After Your Request</h2>
        <ol>
          <li>We will confirm receipt of your request within 48 hours</li>
          <li>We will identify and delete all personal data associated with you</li>
          <li>Any demo website created for your business will be taken down</li>
          <li>We will confirm completion of the deletion within 30 days</li>
        </ol>

        <h2>Data We Cannot Delete</h2>
        <p>
          We may retain certain data if required by law or for legitimate business
          purposes (such as financial records for tax compliance). In such cases,
          we will inform you of the specific data retained and the reason.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about data deletion, contact us at:
        </p>
        <ul>
          <li>Email: beharkabashi96@hotmail.com</li>
          <li>Website: beharkabashi.com</li>
        </ul>
      </div>
    </main>
  );
}
