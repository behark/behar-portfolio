import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { ToastContainer } from "@/components/Toast";
import { SkipToContent } from "@/components/SkipToContent";
import { PageTransition } from "@/components/PageTransition";
import { StructuredData } from "@/components/StructuredData";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import Script from "next/script";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://yourdomain.com");
const ogImage = process.env.NEXT_PUBLIC_SITE_URL
  ? `${siteUrl}/images/og/og-image.jpg`
  : "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&h=630&q=85";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Behar Kabashi - Web Design Profesional",
  description: "Web design profesional për bizneset lokale në Kosovë. Website-a moderne që sjellin rezultata reale.",
  keywords: ["web design", "website", "biznes", "Kosovë", "profesional", "modern"],
  authors: [{ name: "Behar Kabashi" }],
  openGraph: {
    title: "Behar Kabashi - Web Design Profesional",
    description: "Web design profesional për bizneset lokale në Kosovë",
    type: "website",
    locale: "sq_AL",
    siteName: "Behar Kabashi - Web Design Profesional",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Behar Kabashi - Web Design Profesional",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Behar Kabashi - Web Design Profesional",
    description: "Web design profesional për bizneset lokale në Kosovë. Website-a moderne që sjellin rezultata reale.",
    images: [
      ogImage
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq" suppressHydrationWarning className="light">
      <body className="antialiased">
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    theme = systemTheme;
                  }
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <StructuredData />
        <GoogleAnalytics />
        <SkipToContent />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <PageTransition>
            {children}
          </PageTransition>
          <FloatingWhatsApp />
          <BackToTop />
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
