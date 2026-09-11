import ReadingProgress from "@/components/ReadingProgress";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Projects from "@/components/Projects";
import LiveLabs from "@/components/LiveLabs";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ReadingProgress />
      <NavBar />
      <main id="main">
        <Hero />
        <Manifesto />
        <Projects />
        <LiveLabs />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Khaja Mujahiddin Mohammed</span>
        <span>Code · Curiosity · Consequence</span>
      </footer>
    </>
  );
}
