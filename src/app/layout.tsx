import type { Metadata } from "next";
import { Cormorant, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUX | Luxury RIB Charter Sardinia",
  description: "Exclusive RIB charter experience in La Maddalena Archipelago, Costa Smeralda and Bonifacio. Premium boat rentals with local experts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
