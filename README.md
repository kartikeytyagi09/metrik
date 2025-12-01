## 🚀 Signalist – AI-Powered Real-Time Stock Market Platform

Signalist is my modern, full-stack stock market application built with Next.js, Shadcn, Tailwind, Better Auth, Inngest, and MongoDB.
It delivers a powerful real-time financial dashboard with AI-driven insights, automated workflows, personalized alerts, and an admin panel to manage stocks, news, and users.

## ⚙️ Tech Stack
- Next.js- Full-stack React framework with SSR, SSG, and API routes for highly optimized web applications.

- Shadcn-Composable and fully customizable UI components used to build a clean, consistent interface.

- Tailwind CSS- Utility-first CSS for fast, responsive, custom styling.

-TypeScript- Type-safe development for fewer bugs and more maintainable code.

-Better Auth- Framework-agnostic authentication with email/password, OAuth providers (Google, GitHub, Apple), and MFA support.

-MongoDB- Flexible, JSON-document database powering user data, watchlists, alerts, and stock-related content.

-Inngest- Event-driven workflows and background jobs for alerts, scheduled digests, real-time updates, and AI-powered processes.

-Finnhub API- Real-time market data for stocks, forex, crypto, company fundamentals, and news.

- Nodemailer- Email delivery for alert notifications, updates, and system messages.

- Gemini AI- For summarize email alerts and personalize singup email

## 🔋 Features

📈 Real-Time Stock Dashboard- 

Live stock prices with line and candlestick charts
Historical data visualization
Filter by industry, market cap, or performance

🔍 Smart Search-

Quickly discover stocks using an optimized, intelligent search engine.

⭐ Watchlist & Alerts-

Create and manage personal watchlists
Get instant email notifications

🧠 AI-Powered Insights-

Personalized daily market digests
AI-generated summaries
Automated earnings updates
Sentiment analysis

⚡ Event-Driven Workflows (Inngest)

Automates:

Real-time price syncing

Scheduling alerts

AI reports

Notification pipelines

🔔 Customizable Notifications

Fully personalized user preferences for alerts and triggers.


## 🤸 Quick Start

Follow these steps to run the project locally.

Prerequisites- Git, Node.js, npm

1. Clone the Repository
cd signalist_stock-tracker-app

2. Install Dependencies
npm install

3. Set Up Environment Variables

Create a .env file in the project root and add:

NODE_ENV='development'
NEXT_PUBLIC_BASE_URL=http://localhost:3000

NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

MONGODB_URI=

BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

GEMINI_API_KEY=

NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=


4. Start the Development Server
npm run dev

5. Run Inngest
npx inngest-cli@latest dev

6. Open the App
http://localhost:3000
