import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const monaSans = localFont({
  src: "./fonts/Mona-Sans.woff2",
  variable: "--font-mona-sans",
  display: "swap",
});

const hubotSans = localFont({
  src: "./fonts/Hubot-Sans.woff2",
  variable: "--font-hubot-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Keynote",
  description: "The future of AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${monaSans.variable} ${hubotSans.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
