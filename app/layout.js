import { Outfit, Ovo } from "next/font/google";

import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});
  
const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],weight: ["400"]
});

export const metadata = {
  title: "Jinny Eo",
  description: "Jinny Eo's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden bg-[url('/background.jpg')] bg-cover bg-fixed bg-center bg-no-repeat min-h-screen m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
