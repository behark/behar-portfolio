import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
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
        // Use local image if available, otherwise use optimized Unsplash image
        // To use local image: add og-image.jpg to public/images/og/
        url: process.env.NEXT_PUBLIC_SITE_URL 
          ? `${process.env.NEXT_PUBLIC_SITE_URL}/images/og/og-image.jpg`
          : process.env.NEXT_PUBLIC_SITE_URL
          ? `${process.env.NEXT_PUBLIC_SITE_URL}/images/og/og-image.jpg`
          : "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&h=630&q=85",
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
      process.env.NEXT_PUBLIC_SITE_URL 
        ? `${process.env.NEXT_PUBLIC_SITE_URL}/images/og/og-image.jpg`
        : "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&h=630&q=85"
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
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
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
