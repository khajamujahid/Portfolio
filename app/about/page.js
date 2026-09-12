import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Experience from "@/components/Experience";

export const metadata = {
  title: "About — Khaja Mujahiddin Mohammed"
};

export default function AboutPage() {
  return (
    <>
      <NavBar revealed />
      <main id="main">
        <About />
        <Experience />
      </main>
    </>
  );
}
