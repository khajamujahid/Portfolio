export const metadata = {
  title: "Khaja Mujahiddin Mohammed — Senior Software Engineer",
  description: "Senior Software Engineer | Backend & Data Platforms — playful portfolio with live engineering labs."
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
