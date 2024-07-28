import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pratham Agrawal - Portfolio</title>
        <meta name="description" content="Pratham Agrawal's portfolio" />
        <link rel="icon" href="/assets/png/personal_logo.png" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
