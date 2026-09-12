import NavBar from "@/components/NavBar";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact — Khaja Mujahiddin Mohammed"
};

export default function ContactPage() {
  return (
    <>
      <NavBar revealed />
      <main id="main">
        <Contact />
      </main>
    </>
  );
}
