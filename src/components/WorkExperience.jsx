import Image from "next/image";
import { Fade, JackInTheBox } from "react-awesome-reveal";

export default function WorkExperience() {
  return (
    <section
      id="work-experience"
      className="px-4 py-10 sm:px-10 md:px-16 min-h-screen bg-white"
    >
      <div className="mx-auto px-4">
        <Fade cascade triggerOnce direction="down">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-8 relative text-center after_style">
            Work Experience
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl sm:md-16 text-center text-gray-600 max-w-2xl mx-auto">
            Discover my professional journey and the various roles I've
            undertaken.
          </h3>
        </Fade>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="mt-16">
            <Fade cascade triggerOnce direction="left" damping={0.3}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                System Software Engineer
              </h3>
              <h4 className="text-base sm:text-lg md:text-xl text-gray-600">
                Krishworks Technology and Research Labs Pvt. Ltd.
              </h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4">
                Jun 2022 - Present
              </p>
              {/* 
- Developed a dynamic restaurant discovery platform for the Israeli market, resulting in a 30% improvement in website performance and a 10% increase in customer engagement
- Successfully led the conversion of the application from React.js to Next.js, demonstrating effective time-management and leadership skills
- Managed the end-to-end development of an advanced LMS portal for Jamaican teenage students, with a focus on mental health and personal development
- Enhanced user interface designs to improve usability and accessibility of the LMS portal
- Utilized ReactJS, Firebase, and AWS for secure data management in the LMS portal
- Implemented real-time analytics to track user progress, engagement, and performance
- Integrated payment services such as Razorpay and WiPay into the LMS portal
- Organized and conducted client meetings to gather and document project requirements
- Developed comprehensive plans to ensure seamless project progression
- Demonstrated exemplary proficiency in software development with a consistent track record of delivering high-quality results
 */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                Developed a dynamic restaurant discovery platform for the
                Israeli market, enhancing website performance by 30% and
                increasing customer engagement by 10%. Led the conversion of
                application from React.js to Next.js, showcasing effective
                time-management and leadership skills.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                Managed end-to-end development of an advanced LMS portal for
                Jamaican teenage students, emphasizing mental health and
                personal development. Improved user interface designs to enhance
                usability and accessibility. Utilized ReactJS, Firebase, and AWS
                for secure data management.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8">
                Implemented real-time analytics and integrated payment services
                such as Razorpay and WiPay.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "ReactJS",
                  "Node.js",
                  "Firebase",
                  "Python",
                  "AWS",
                  "Google Cloud Platform",
                  "Razorpay",
                  "WiPay",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    aria-label={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Fade>
          </div>

          <JackInTheBox fraction={0.5} triggerOnce>
            <div className="hidden md:flex ">
              <Image
                height={300}
                width={300}
                src="/assets/svg/work_exp.svg"
                alt="Work Experience Illustration"
                className="w-full"
              />
            </div>
          </JackInTheBox>
        </div>
      </div>
    </section>
  );
}
