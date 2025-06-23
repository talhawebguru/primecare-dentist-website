import { Geist, Geist_Mono, Onest } from "next/font/google";
import "./globals.css";
import MouseTrail from "./components/common/MouseTrail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  fallback: ["system-ui", "sans-serif"],
  preload: true,
  adjustFontFallback: true,
  preloadFonts: true,
});

export const metadata = {
  title: "Pearly Smile Dental | Expert Family & Cosmetic Dentistry in Your City",
  description: "Discover brighter, healthier smiles with Pearly Smile Dental. We offer expert general, cosmetic, and family dentistry services in a welcoming and modern environment. Book your appointment today for personalized dental care you can trust!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${onest.variable} scroll-smooth overflow-x-hidden antialiased`}
      >
        <MouseTrail />
        {children}
      </body>
    </html>
  );
}
