import About from "@/components/About";
import CookieBanner from "@/components/Cookie/Cookie";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pratham Agrawal",
    url: "https://agrawalpratham.in",
    sameAs: [
      "https://www.linkedin.com/in/agrawalpratham/",
      "https://github.com/agrawal-pratham",
      "https://www.instagram.com/agrawal___pratham/",
      "https://twitter.com/agrawal_2002",
      "http://blogs.agrawalpratham.in/",
      "https://solutions.agrawalpratham.in/",
    ],
    jobTitle: "Full Stack Web Developer",
    description:
      "Pratham Agrawal, a Full Stack Web Developer with expertise in building dynamic web applications and platforms. Explore my professional journey, projects, and skills in technologies like Next.js, ReactJS, Node.js, Firebase, AWS, and more. Discover how I lead the development of restaurant discovery platforms, LMS portals, and versatile web applications.",
    image: "https://agrawalpratham.in/assets/png/og_img.png",
  };

  return (
    <div>
      <Head>
        <title>Pratham Agrawal | Full Stack Web Developer</title>
        <meta name="description" content="Pratham Agrawal's portfolio" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d3f4f7" />
        <meta name="msapplication-TileColor" content="#d3f4f7" />
        <meta name="theme-color" content="#d3f4f7" />
        <meta
          name="description"
          content="Pratham Agrawal, a Full Stack Web Developer with expertise in building dynamic web applications and platforms. Explore my professional journey, projects, and skills in technologies like Next.js, ReactJS, Node.js, Firebase, AWS, and more. Discover how I lead the development of restaurant discovery platforms, LMS portals, and versatile web applications."
        />
        <meta
          name="google-site-verification"
          content="xLgsNqKuFWO2leEq61qdWwQyEJutNxKKEZQX2alS95U"
        />
        <meta
          name="keywords"
          content="Pratham Agrawal, Full Stack Web Developer, Web Development, Next.js, ReactJS, Node.js, Firebase, AWS, Restaurant Discovery Platform, Learning Management System, LMS, Web Applications, UI Design, Software Engineer, Krishworks Technology and Research Labs Pvt. Ltd."
        />
        <meta name="author" content="Pratham Agrawal" />
        <link rel="canonical" href="https://agrawalpratham.in/" />
        <meta
          property="og:title"
          content="Pratham Agrawal | Full Stack Web Developer"
        />
        <meta
          property="og:description"
          content="Pratham Agrawal, a Full Stack Web Developer with expertise in building dynamic web applications and platforms. Explore my professional journey, projects, and skills in technologies like Next.js, ReactJS, Node.js, Firebase, AWS, and more. Discover how I lead the development of restaurant discovery platforms, LMS portals, and versatile web applications."
        />
        <meta
          property="og:image"
          content="https://agrawalpratham.in/assets/png/og_img.png"
        />
        <meta property="og:url" content="https://agrawalpratham.in/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@agrawal_2002" />
        <meta name="twitter:creator" content="@agrawal_2002" />
        <meta
          name="twitter:title"
          content="Pratham Agrawal | Full Stack Web Developer"
        />
        <meta
          name="twitter:description"
          content="Pratham Agrawal, a Full Stack Web Developer with expertise in building dynamic web applications and platforms. Explore my professional journey, projects, and skills in technologies like Next.js, ReactJS, Node.js, Firebase, AWS, and more. Discover how I lead the development of restaurant discovery platforms, LMS portals, and versatile web applications."
        />
        <meta
          name="twitter:image"
          content="https://agrawalpratham.in/assets/png/og_img.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <CookieBanner />
      </main>
      <Footer />
    </div>
  );
}
