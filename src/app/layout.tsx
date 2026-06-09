import type { Metadata, Viewport } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Khanza Azalina - Visual Communication Designer",
  description: "Premium portfolio showcasing illustration, graphic design, 3D art, and video editing.",
  keywords: ["portfolio", "design", "illustration", "graphic design", "3D art", "video editing"],
  authors: [{ name: "Khanza Azalina" }],
  openGraph: {
    title: "Khanza Azalina - Visual Communication Designer",
    description: "Premium portfolio showcasing illustration, graphic design, 3D art, and video editing.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-autumn-50 text-autumn-brown">{children}</body>
    </html>
  );
}
