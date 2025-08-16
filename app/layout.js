export const metadata = {
  title: "Khaja Mujahiddin Mohammed — Data & AI Portfolio",
  description: "Data Scientist & Cloud Engineer — NLP, Computer Vision, MLOps, AWS, Python, Spark"
};

import "./globals.css";
import RouteTransition from "@/components/RouteTransition";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}
