import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  metadataBase: new URL("https://wemoren-portf.vercel.app"),
  alternates: {},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
