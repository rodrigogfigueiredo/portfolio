import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, Space_Mono, Unbounded } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import "./globals.css";

// Retro-futurist type: a wide display face, a quirky grotesk, a mono for labels, and a soft 70s serif for accents.
const display = Unbounded({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono", display: "swap" });
const serif = Fraunces({ subsets: ["latin"], style: ["italic"], axes: ["SOFT", "WONK"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rodrigofigueiredo.vercel.app"),
  title: { default: "Rodrigo Figueiredo — GenAI Engineer", template: "%s — Rodrigo Figueiredo" },
  description:
    "GenAI Engineer at DEUS working on computer vision and brand detection for Influencer Monitor. Explore my work in generative AI and practical software.",
  applicationName: "Rodrigo Figueiredo — Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rodrigo Figueiredo — GenAI Engineer",
    description: "Computer vision, generative AI, and practical products. Explore Influencer Monitor, ATLaS, GranitOS, and Visol Timesheet.",
  },
};

const themeScript = `(function(){try{var saved=localStorage.getItem('portfolio-theme');var dark=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=saved==='dark'||saved!=='light'&&dark?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}})();`;
const legacyRedirectScript = `if(window.location.hostname==='rodrigo-figueiredo.figueiredo-rodrigo.chatgpt.site'){window.location.replace('https://rodrigofigueiredo.vercel.app'+window.location.pathname+window.location.search+window.location.hash);}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${serif.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: legacyRedirectScript }} /><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body id="top">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
