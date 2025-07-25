import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "@/components/Footer";
import { getImagePath } from "./utils/imagePath";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "| Jason Kong | Portfolio",
  description: "My portfolio",
  icons: {
    icon: getImagePath('/favicon.ico'),
    shortcut: getImagePath('/favicon-16x16.png'),
    apple: getImagePath('/apple-touch-icon.png'),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-t from-blue-20 to-indigo-200 transition-colors dark:bg-gradient-to-t dark:from-slate-600 dark:to-stone-900 dark:text-white`}
      ></body> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:text-white`}
      >
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <ThemeProvider>
          <NavBar />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
