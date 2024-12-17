'use client'
import type { Metadata } from "next"; 
import localFont from "next/font/local";
import { useRouter } from 'next/navigation'; // Import useRouter
import "./globals.css";
import FontAwesomeConfig from "./fontawesome";
import Footer from "./components/footer";
import Header from "./components/header";

// Font definitions
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter(); // Initialize router

  // Click handler for Sign in button
  const handleSignInClick = () => {
    router.push('/login'); // Navigate to login page on button click
  };

  return (
    <html lang="en">
      <head>
        <FontAwesomeConfig />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Header onSignInClick={handleSignInClick} /> {/* Pass the click handler */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
