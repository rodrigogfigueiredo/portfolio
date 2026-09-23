import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rodrigo-figueiredo.figueiredo-rodrigo.chatgpt.site"),
  title: { default: "Rodrigo Figueiredo — AI Engineer", template: "%s — Rodrigo Figueiredo" },
  description:
    "Rodrigo Figueiredo is an AI Engineer who turns human problems into useful systems. Explore ATLaS, GranitOS, and Visol Timesheet.",
  applicationName: "Rodrigo Figueiredo — Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rodrigo Figueiredo — AI Engineer",
    description: "Human problems, useful systems. AI engineering and practical products built with curiosity.",
  },
};

const themeScript = `(function(){try{var saved=localStorage.getItem('portfolio-theme');var dark=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=saved==='dark'||saved!=='light'&&dark?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body id="top">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
