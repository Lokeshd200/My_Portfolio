import Image from "next/image";
import Link from "next/link";
import { Fade, Zoom } from "react-awesome-reveal";

const projects = [
  {
    id: "1",
    title: "nxtTrendz (Shopping)",
    image: "/assets/png/shopping.png",
    description:
      "The NxtTrendz Shopping Website is an e-commerce platform for purchasing clothes and gadgets. The frontend is built using React, JavaScript, and Bootstrap to provide a responsive and user-friendly interface. Backend communication is handled through REST APIs, with Axios used for making API calls to fetch and display product data dynamically. The platform enables users to browse products, view details, and add items to their cart seamlessly. The project focuses on creating an efficient and visually appealing shopping experience for users.",
    technologies: ["React.js", "Bootstrap CSS", "Javascript", "Jsx","RESTApi","axios"],
    codeLink: "https://github.com/Lokeshd200/nxtTrendz_shopping",
  },
  {
    id: "2",
    title: "AppStore",
    image: "/assets/png/appstore.png",
    description:
      "The AppStore Project is a web platform designed to browse and search for applications. It is built using React with class components for managing state and lifecycle methods. Bootstrap was used for responsive and visually appealing design. The project includes features like searching for apps, filtering by categories, and displaying app details. By leveraging React class components, the application efficiently handles data and interactions, providing a smooth and interactive user experience.",
    technologies: ["React Js", "HTML", "CSS", "Javascript"],
    codeLink: "https://github.com/Lokeshd200/AppStore",
  },
  {
    id: "3",
    title: "Task-Manager",
    image: "/assets/png/task.png",
    description:
      "The Task Manager Project is a web-based application designed to manage tasks efficiently. It was built using React (with functional components), JavaScript, and Bootstrap for styling and responsive design. Key features include adding tasks, filtering tasks by status, searching tasks using a search bar, and inline editing or deletion of tasks using a dynamic task table. It also integrates with a placeholder API using Axios to fetch task data and follows the REST API structure. Additional libraries like React-Tabulator and React-Toastify were used for an interactive user experience and notifications.",
    technologies: ["React Js", "Node Js", "tailwind css", "Javascript","axios","RESTApi's"],
    codeLink: "https://github.com/Lokeshd200/tasl-list-manager",
  },
  {
    id: "4",
    title: "Cash-Withdrawal",
    image: "/assets/png/pay.png",
    description:
      "The Cash Withdrawal Project is a frontend app built with React, JavaScript, and Bootstrap. It simulates a banking feature where users can withdraw money by clicking on predefined withdrawal amounts. The account balance updates dynamically using React state management. The application showcases event handling and interactive UI updates. Styling and responsiveness are achieved with CSS and Bootstrap.",
    technologies: ["React Js", "HTML", "CSS", "Javascript"],
    codeLink: "https://github.com/Lokeshd200/CashWithdrawal",
  },
  {
    id: "5",
    title: "Logi Page",
    image: "/assets/png/login.png",
    description:
      "The Login Page is a frontend application built using React and JavaScript. It includes a form where users can input their credentials, such as username and password. React's state management is used to handle form data and input validation. The form's submission triggers an authentication process, which can be extended to work with APIs for user verification. Styling is achieved using CSS or Bootstrap for responsiveness and clean design.",
    technologies: ["React Js", "HTML", "CSS", "Javascript"],
    codeLink: "https://github.com/Lokeshd200/login-details",
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
