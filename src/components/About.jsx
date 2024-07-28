import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const skills = [
  {
    name: "HTML",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },

  {
    name: "CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },

  {
    name: "Javascript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },

  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },

  {
    name: "AWS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },

  {
    name: "Babel",
    icon: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
  },

  {
    name: "Redis",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
  },

  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },

  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },

  { name: "Material ", icon: "https://mui.com/static/logo.png" },

  {
    name: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
  },

  {
    name: "Rust",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
  },

  {
    name: "NodeJS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },

  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },

  {
    name: "Firebase",
    icon: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
  },

  {
    name: "Git",
    icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },

  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },

  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },

  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },

  {
    name: "Bash",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
  },

  {
    name: "GCP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
];

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      id="about"
      className="px-4 py-10 sm:px-10 md:px-16 min-h-screen  bg-gray-100"
    >
      <div className="mx-auto px-4">
        <Fade cascade triggerOnce direction="down">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-8 relative text-center after_style">
            About Me
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl mb-8 sm:md-16 text-center text-gray-600 max-w-2xl mx-auto">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </h3>
        </Fade>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`duration-500 ${
              isExpanded
                ? ""
                : "line-clamp-[14] sm:line-clamp-[18] md:line-clamp-[28] overflow-hidden"
            }`}
          >
            <Slide cascade triggerOnce>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold md:mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 mb-4 pt-2">
                I'm a <strong>Full Stack Web Developer</strong> with over two
                years of experience in the field. I am passionate about
                designing and developing websites that are not only visually
                appealing but also highly functional.
                <br />
              </p>
              <p className="text-gray-600 mb-4">
                During my experience, I have spearheaded the development of
                various dynamic platforms including a restaurant discovery
                platform akin to Zomato for the Israeli market, a sophisticated
                Learning Management System (LMS) portal, and versatile web
                applications with dual interfaces. Technologies used in these
                projects include Next.js, ReactJS, Node.js, Firebase, AWS, and
                Google Cloud Platform.
              </p>
              <p className="text-gray-600 mb-4">
                In addition to my technical skills, I am a team player who
                thrives in collaborative environments. I am always open to
                learning new technologies and staying up-to-date with the latest
                web development trends. Currently, I am exploring Rust to
                further expand my technical expertise.
              </p>
              <a href="#contact" className="btn btn--med btn--theme mt-4">
                Contact
              </a>
            </Slide>
          </div>
          <p
            onClick={toggleExpand}
            className="text-gray-500 hidden xs:block sm:hidden underline -mt-10"
          >
            {isExpanded ? "Collaspe" : "Read More"}
          </p>
          <div>
            <Fade triggerOnce>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
                My Skills
              </h3>
            </Fade>
            <div className="flex flex-wrap justify-start gap-1.5 sm:gap-2.5 md:gap-3 ">
              <Fade direction="up" big triggerOnce cascade damping={0.1}>
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col min-w-20 items-center p-2 bg-white rounded-lg shadow"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      width={30}
                      height={30}
                    />
                    <span className="mt-2 text-sm">{skill.name}</span>
                  </div>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
