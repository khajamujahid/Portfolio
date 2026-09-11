export const metadata = {
  title: "Khaja Mujahiddin Mohammed — Senior Software Engineer",
  description: "Senior Software Engineer | Backend & Data Platforms — FastAPI, Spring Boot, Kafka, AWS, Kubernetes, and grounded AI systems."
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
