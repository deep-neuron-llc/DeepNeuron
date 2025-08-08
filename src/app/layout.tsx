import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/app/ui/globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deep Neuron - Coming Soon | Revolutionary AI Neural Network Platform",
  description: "The future of AI is almost here. Join the waitlist for Deep Neuron, the most advanced neural network platform ever created. Coming 2025.",
  keywords: ["AI", "neural networks", "machine learning", "deep learning", "artificial intelligence", "coming soon", "waitlist"],
  authors: [{ name: "Deep Neuron Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
