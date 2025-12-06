import type { Metadata } from "next";
import { Inter, Poppins, PT_Serif_Caption, Sarina } from "next/font/google"; // 1. Import Poppins
import "./globals.css";

// 2. Configure Poppins
// IMPORTANT: You must list all the weights you use in your design
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], 
  display: "swap",
});
const sarina = Sarina({
  variable: "--font-Sarina",
  subsets: ["latin"],
  weight: "400", 
  display: "swap",
});
const PTSerifCaption = PT_Serif_Caption({
  variable: "--font-Sarina",
  subsets: ["latin"],
  weight: "400", 
  display: "swap",
})
const inter = Inter({
    variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], 
  display: "swap",
})
export const metadata: Metadata = {
  title: "NGO Foundation",
  description: "NGO Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Add the variable to the body */}
      <body className={`${poppins.variable} ${sarina.variable} ${PTSerifCaption.variable} ${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}