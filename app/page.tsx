import Works from "./components/Works";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="max-w-[1223px] mx-auto">
      <Header />
      <Hero />
      <Works />
      <Timeline />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
