import type { Metadata } from "next";
import { Dancing_Script, Pacifico } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  variable: '--font-romantic',
  weight: ['400', '500', '600', '700']
});

const pacifico = Pacifico({ 
  subsets: ["latin"],
  variable: '--font-cute',
  weight: '400'
});

export const metadata: Metadata = {
  title: "For My Forever — Shivangi baby 💖",
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
      <body className={`${dancingScript.variable} ${pacifico.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
