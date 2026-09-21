import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./global.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Abbieverse | Abigail Gathoni",
  description: "Abbieverse is Abigail's portfolio website showcasing her works and projects as software developer and a BSc Mathematics and Computer Sciencestudent at JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="en">
      <body className={'${poppins.variable} ${jetbrainsMono.variable} antialiased'}>
        {children}
      </body>
    </html>
  );
}