import About from "@/components/About";
import CookieBanner from "@/components/Cookie/Cookie";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <CookieBanner />
      </main>
      <Footer />
    </div>
  );
}
