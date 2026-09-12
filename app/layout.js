import { Syne, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import Cursor from "@/components/Cursor";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap"
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata = {
  title: "Khaja Mujahiddin Mohammed — Senior Software Engineer",
  description:
    "Portfolio of Khaja Mujahiddin Mohammed — senior software engineer for backend and data platforms. Python, Java, TypeScript, Kafka, AWS, Kubernetes, RAG. Based in New Haven, CT.",
  authors: [{ name: "Khaja Mujahiddin Mohammed" }],
  openGraph: {
    title: "Khaja Mujahiddin Mohammed",
    description: "Senior Software Engineer · Backend & Data Platforms",
    type: "website"
  }
};

const themeBoot = `
(function () {
  try {
    var stored = localStorage.getItem("km-theme");
    var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <a className="km-skip" href="#main">
          Skip to content
        </a>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
