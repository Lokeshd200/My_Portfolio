"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      let headerCss = ["bg-white", "!text-black", "shadow-md", "!py-4"];
      const header = document.getElementById("header");
      if (window.scrollY > 50) {
        header?.classList.add(...headerCss);
      } else {
        header?.classList.remove(...headerCss);
      }
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((p) => !p);

  return (
    <header
      id="header"
      className="fixed w-full z-50 bg-transparent text-white transition-all duration-300 p-4  md:p-8"
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="rounded-md overflow-hidden mr-4">
            <Image
              src="/assets/png/personal_logo.png"
              alt="Pratham"
              width={50}
              height={40}
            />
          </div>
          <span className="text-xl font-bold">Pratham Agrawal</span>
        </Link>

        <nav className="hidden md:flex">
          <Link href="#" className="mx-4 hover:text-blue-700">
            Home
          </Link>
          <Link href="#about" className="mx-4 hover:text-blue-700">
            About
          </Link>
          <Link href="#work-experience" className="mx-4 hover:text-blue-700">
            Experience
          </Link>
          <Link href="#projects" className="mx-4 hover:text-blue-700">
            Projects
          </Link>
          <Link
            href="https://blogs.agrawalpratham.in/"
            className="mx-4 hover:text-blue-700"
          >
            Blogs
          </Link>
        </nav>

        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center md:hidden"
        >
          <span
            className={`bg-current block transition-all duration-700 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-current block transition-all duration-700 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-current block transition-all duration-700 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>

      <nav
        className={`md:hidden rounded-xl bg-white text-black transition-all  duration-700 overflow-hidden ${
          isMenuOpen ? "mt-4 max-h-screen" : "mt-0 max-h-0"
        }`}
        onClick={toggleMenu}
      >
        <Link href="#" className="block p-4 hover:bg-gray-100">
          Home
        </Link>
        <Link href="#about" className="block p-4 hover:bg-gray-100">
          About
        </Link>
        <Link href="#work-experience" className="block p-4 hover:bg-gray-100">
          Experience
        </Link>
        <Link href="#projects" className="block p-4 hover:bg-gray-100">
          Projects
        </Link>
        <Link
          href="https://blogs.agrawalpratham.in/"
          className="block p-4 hover:bg-gray-100"
        >
          Blogs
        </Link>
      </nav>
    </header>
  );
}
