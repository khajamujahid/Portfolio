export const metadata = {
  title: "Khaja Mujahiddin Mohammed — Senior Data Engineer",
  description: "Senior Data Engineer & Lakehouse Architect — PySpark, Azure, AWS, NLP, and Machine Learning."
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
