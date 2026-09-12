import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import LiveLabs from "@/components/LiveLabs";

export const metadata = {
  title: "Selected work — Khaja Mujahiddin Mohammed"
};

export default function WorkPage() {
  return (
    <>
      <NavBar revealed />
      <main id="main">
        <Projects />
        <LiveLabs />
      </main>
    </>
  );
}
