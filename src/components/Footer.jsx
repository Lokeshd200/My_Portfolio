import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: "/assets/png/linkedin-ico.png",
    url: "https://www.linkedin.com/in/lokesh-mellakanti/",
  },
  {
    name: "GitHub",
    icon: "/assets/png/github-ico.png",
    url: "https://github.com/Lokeshd200",
  },
];

export default function Footer() {
  return (
    <footer className="bg-custom-gradient text-white py-6 px-4 sm:px-10 sm:py-12 md:px-16">
      <div className="mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 hidden md:block">
              Social
            </h2>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={32}
                    height={32}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Mellakanti Lokesh</h2>
            <p className="text-gray-200">
              Full Stack Web Developer passionate about creating interactive web
              applications and experiences. Reach out to me for innovative web
              solutions.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-200">
          © Copyright 2024. Made by{" "}
          <Link
            href="https://agrawalpratham.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-white"
          >
            Mellakanti Lokesh
          </Link>
        </div>
      </div>
    </footer>
  );
}
