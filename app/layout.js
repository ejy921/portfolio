import { Outfit, Ovo, Gloria_Hallelujah } from "next/font/google";
import "./globals.css";
import VelocityCursor from "./components/VelocityCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});
  
const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],weight: ["400"]
});

const gloria = Gloria_Hallelujah({
  variable: "--font-gloria",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Jinny Eo",
  description: "Jinny Eo's Portfolio",
};

export default function RootLayout({ children }) {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/portfolio' : '';
  const backgroundImage = `${basePath}/background.jpg`;

  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${outfit.variable} ${ovo.variable} ${gloria.variable} antialiased leading-8 overflow-x-hidden min-h-screen m-0 p-0`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >

        <VelocityCursor
          size={40}
          color="#c67ff5"
          speed={0.4}
          skewing={3}
        />
        {children}
      </body>
    </html>
  );
}
