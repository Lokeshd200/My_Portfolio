import Image from "next/image";
import Link from "next/link";
import { Fade, Zoom } from "react-awesome-reveal";

const projects = [
  {
    id: "1",
    title: "Tech Solutions",
    image: "/assets/png/tech_solution.png",
    description:
      "A comprehensive portfolio website for service-based companies developed using Next.js. Utilizes libraries such as React-Awesome-Reveal, react-icons, react-count-up, react-syntax-highlighter, and react-typed.",
    technologies: ["Next.js", "Tailwind CSS", "Javascript", "Firebase"],
    liveLink: "https://solutions.agrawalpratham.in",
    codeLink: "https://github.com/agrawal-pratham/Tech-Solutions",
  },
  {
    id: "2",
    title: "Zostel Clone",
    image: "/assets/png/zostel_clone.png",
    description:
      "Trip planner with best places to visit and hotels for stay. Executed in under 1 week with a team of 3. Responsible for leading the team. LongStay and BookNow page of website.",
    technologies: ["React Js", "HTML", "CSS", "Javascript"],
    codeLink: "https://github.com/agrawal-pratham/Project_Zostel",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-4 py-10 sm:px-10 md:px-16 min-h-screen  bg-gray-100"
    >
      <div className="mx-auto px-4">
        <Fade cascade triggerOnce direction="down">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-8 relative text-center after_style">
            Projects
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl sm:md-16 mb-12 text-center text-gray-600 max-w-2xl mx-auto">
            Explore a selection of my recent work, showcasing my skills in full
            stack development.
          </h3>
        </Fade>
        <div className="">
          {projects.map((project, index) => (
            <div
              className="grid grid-cols-1.5fr-1fr gap-10  mb-44 md:grid-cols-2 md:gap-8 md:mb-32"
              key={project.id}
            >
              <Zoom triggerOnce>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="w-full object-cover rounded-lg duration-200 hover:scale-105"
                  />
                </div>
              </Zoom>
              <div className="flex flex-col items-start">
                <Fade cascade triggerOnce direction="left">
                  <h3 className="font-bold text-xl mb-4 md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </p>
                  <p className="text-gray-500 text-base mb-12 max-w-[60rem] md:text-lg">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    {project.liveLink && (
                      <Link
                        onClick={() => {
                          sendGAEvent({
                            event: "buttonClicked",
                            value: `Live Link - ${project.title}`,
                          });
                        }}
                        href={project.liveLink}
                        target="_blank"
                        className="btn btn--med btn--theme"
                      >
                        Live Link
                      </Link>
                    )}
                    <Link
                      onClick={() => {
                        sendGAEvent({
                          event: "buttonClicked",
                          value: `Code Link - ${project.title}`,
                        });
                      }}
                      href={project.codeLink}
                      target="_blank"
                      className="btn btn--med btn--theme-inv"
                    >
                      Code Link
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
