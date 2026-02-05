import type { Metadata } from "next";
import { Dancing_Script, Pacifico, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  variable: '--font-romantic',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const pacifico = Pacifico({ 
  subsets: ["latin"],
  variable: '--font-cute',
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "For My Forever — Megha baby 💖",
  description: "A special message for the most special person",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dancingScript.variable} ${pacifico.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
