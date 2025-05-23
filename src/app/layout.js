import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600"], // Regular, Medium, Semi-Bold
  style: ["normal", "italic"],   // Normal and Italic styles
  subsets: ["latin"],            // Load only Latin characters
  display: "swap",               // Optimize rendering performance
  variable: "--font-cormorant-garamond", // CSS variable
});

// Metadata
export const metadata = {
  title: "Wallpaperwale",
  description: "",
};

// Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable}
          ${cormorantGaramond.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}

