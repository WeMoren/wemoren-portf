import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WeMoren Portfolio",
  description: "Uwem Umoren(WeMoren) | Frontend Developer",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="google .cc152943571c8c2f"
        />
        <title>Uwem Umoren | WeMoren Portfolio</title>
        <meta
          name="description"
          content="Hi! I'm Uwem Umoren (WeMoren), a frontend web developer. Check out my projects, portfolio, and tutorials."
        />
        <meta name="author" content="Uwem Umoren (WeMoren)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favico/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favico/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favico/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favico/site.webmanifest" />
        {/* Social Preview (Open Graph) */}
        <meta property="og:title" content="Uwem Umoren | WeMoren Portfolio" />
        <meta
          property="og:description"
          content="Hi! I'm Uwem Umoren (WeMoren), a frontend web developer. Explore my projects and tutorials."
        />
        <meta property="og:image" content="/favico/social-preview.png" />{" "}
        {/* make a social image */}
        <meta property="og:url" content="https://wemoren-portf.vercel.app" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Uwem Umoren | WeMoren Portfolio" />
        <meta
          name="twitter:description"
          content="Hi! I'm Uwem Umoren (WeMoren), a frontend web developer. Explore my projects and tutorials."
        />
        <meta name="twitter:image" content="/favico/social-preview.png" />
        <link
          rel="icon"
          type="image/ico"
          sizes="48x48"
          href="/public/favicon.ico"
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
