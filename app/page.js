'use client'
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
    <Navbar />
    <About />
    <Experience />
    <Projects />
    <Footer />
    </> 
  );
}
