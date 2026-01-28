# Behar Portfolio: Project Overview

This document provides a comprehensive overview of the Behar Portfolio project, a modern, feature-rich web application built with Next.js and TypeScript. It details the project's purpose, technical architecture, features, and operational procedures.

**Project Location Path:** `/home/behar/Desktop/behar-portfolio/`

## 1. About The Project

The "Behar Portfolio" is a professional portfolio website for Behar Kabashi, a web design professional. The primary goal of this application is to showcase Behar's skills, services, and past work to attract and engage potential clients, particularly local businesses in Kosovo.

The website is designed to be a high-performance, visually appealing, and user-friendly marketing tool. It highlights the benefits of professional web design, builds credibility through social proof and testimonials, and provides clear calls-to-action for visitors to get in touch.

## 2. Core Features

The application is packed with modern features designed to enhance user experience, engagement, and lead generation.

*   **Responsive Design**: Fully responsive layout that ensures a seamless experience across all devices, from mobile phones to desktops.
*   **Dark/Light Mode**: A theme-switching functionality allows users to toggle between light and dark modes, with their preference saved for future visits.
*   **Page Transitions**: Smooth, animated transitions between pages for a more fluid and engaging navigation experience.
*   **SEO Optimized**:
    *   **Dynamic Metadata**: Each page has custom title, description, and keyword metadata for better search engine ranking.
    *   **Structured Data (JSON-LD)**: Includes structured data for rich snippets in search results.
    *   **Robots.txt & Sitemap.ts**: Programmatically generated `sitemap.xml` and `robots.txt` for optimal search engine crawling.
*   **Interactive UI Components**:
    *   **Animated Counters**: The `Stats` section uses counters that animate from zero to the target number to draw user attention to key metrics.
    *   **Scroll-to-Reveal Animations**: Subtle animations that trigger as users scroll down the page, making the content feel more dynamic.
    *   **Micro-interactions**: Small, thoughtful animations and feedback on user actions like button clicks and hovers.
*   **User Engagement & Conversion**:
    *   **Floating WhatsApp Button**: A persistent, floating button that allows users to start a conversation on WhatsApp at any time.
    *   **Contact Form**: A dedicated contact page with a form for inquiries.
    *   **Clear Calls-to-Action**: Strategically placed buttons and links to guide users towards making contact or viewing the portfolio.
*   **Content Sections**:
    *   **Hero Section**: A compelling introduction with a strong headline.
    *   **Benefits Section**: Outlines the advantages of the services offered.
    *   **Social Proof**: Displays logos of clients or partners to build trust.
    *   **Statistics**: Showcases key achievements and metrics.
    *   **Testimonials**: Features quotes and feedback from satisfied clients.
    *   **Pricing Table**: Clearly presents different service packages.
    *   **FAQ**: An accordion-style FAQ section to answer common questions.
*   **Accessibility**:
    *   **Skip-to-Content Link**: Allows keyboard users to bypass navigation and jump directly to the main content.
    *   **Semantic HTML**: Proper use of HTML5 tags for better screen reader support.
*   **Analytics**: Integrated Google Analytics to track user behavior and site performance.

## 3. Technical Stack

The project leverages a modern, robust technology stack for development, performance, and scalability.

*   **Framework**: **Next.js 16.1.1** - A React framework for building server-rendered and statically generated web applications.
*   **Language**: **TypeScript 5** - A typed superset of JavaScript that enhances code quality and maintainability.
*   **UI Library**: **React 19.2.3** - A JavaScript library for building user interfaces.
*   **Styling**: **Tailwind CSS 4** - A utility-first CSS framework for rapid UI development.
*   **Theming**: `next-themes` for handling dark and light mode.
*   **Icons**: `react-icons` for a comprehensive library of SVG icons.
*   **Linting**: **ESLint 9** - For identifying and fixing problems in JavaScript/TypeScript code.
*   **Package Manager**: `npm`

## 4. Project Structure

The project follows the standard Next.js App Router structure.

```
/home/behar/Desktop/behar-portfolio/
├── src/
│   ├── app/                # Main application folder (App Router)
│   │   ├── about/          # Route for /about
│   │   ├── contact/        # Route for /contact
│   │   ├── portfolio/      # Route for /portfolio
│   │   ├── layout.tsx      # Root layout for the entire application
│   │   ├── page.tsx        # Homepage content
│   │   ├── globals.css     # Global styles
│   │   ├── sitemap.ts      # Sitemap generation logic
│   │   └── ...
│   ├── components/         # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   └── lib/                # Utility functions and libraries (if any)
├── public/                 # Static assets (images, fonts, etc.)
├── .env.local.example      # Example environment variables
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Project dependencies and scripts
```

## 5. Getting Started

Instructions for setting up and running the project locally.

### Prerequisites

*   Node.js (v20 or later recommended)
*   npm (usually comes with Node.js)

### Installation

1.  **Clone the repository** (if applicable).
2.  **Navigate to the project directory**:
    ```bash
    cd /home/behar/Desktop/behar-portfolio
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Set up environment variables**:
    Create a `.env.local` file in the root directory by copying the `.env.local.example` file. Fill in the required environment variables (e.g., `NEXT_PUBLIC_SITE_URL`, `GA_TRACKING_ID`).

### Running the Development Server

To run the application in development mode with hot-reloading:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This command compiles the TypeScript code, bundles the assets, and generates static pages in the `.next/` directory.

### Starting the Production Server

To run the production build locally:

```bash
npm run start
```

## 6. Available Pages and Routes

*   `/`: **Homepage** - The main landing page.
*   `/about`: **About Page** - A page describing Behar and his mission.
*   `/portfolio`: **Portfolio Page** - A gallery of past projects.
*   `/contact`: **Contact Page** - A page with contact information and a form.

## 7. Key Components Breakdown

A look at some of the most important components:

*   **`layout.tsx`**: The root component that wraps all pages. It defines the main HTML structure, includes the font setup, and integrates global components like `ThemeProvider`, `FloatingWhatsApp`, and `GoogleAnalytics`.
*   **`Navbar.tsx`**: The main navigation bar, which is responsive and includes links to all major pages.
*   **`Hero.tsx`**: The first thing users see on the homepage, designed to make a strong first impression.
*   **`Footer.tsx`**: The site's footer, containing contact details, social links, and copyright information.
*   **`PageTransition.tsx`**: Wraps the page content in `layout.tsx` to provide smooth animations when navigating between routes.
*   **`ThemeProvider.tsx`**: A context provider that manages the application's theme (light/dark).
*   **`ContactPageContent.tsx`**: The specific layout and form logic for the contact page.
*   **`PortfolioPageContent.tsx`**: The component responsible for displaying the portfolio items.
