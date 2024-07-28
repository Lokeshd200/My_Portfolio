import Image from "next/image";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section className="bg-custom-gradient text-white min-h-screen flex items-center">
      <div className="flex mx-4 mt-20 md:mt-32 lg:my-auto sm:mx-10 md:mx-20 flex-col-reverse justify-between gap-5 w-full md:flex-row mb-10 ">
        <div className="flex-1 my-auto text-center md:text-left">
          <Slide
            direction="left"
            duration={1250}
            damping={0.5}
            cascade
            triggerOnce
          >
            <h1 className=" text-xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">
              Hi There! I'm Pratham Agrawal
            </h1>
            <p className="  text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl">
              Full Stack Web Developer specializing in creating dynamic and
              engaging web experiences. Skilled in transforming ideas into
              reality with innovative and engaging solutions. Committed to
              collaborating with teams to build amazing projects.
            </p>
            <Link
              href="https://drive.google.com/file/d/1OVrswJHsqFC_02D2gdEcuPfqEBbmFOj8/view?usp=drive_link"
              target="_blank"
              className="btn btn--bg btn--theme  "
            >
              Resume
            </Link>
          </Slide>
        </div>
        <div className="flex-1 max-w-[50%] my-auto mx-auto rounded-xl sm:max-w-[40%] md:max-w-[30%]">
          <Fade triggerOnce delay={500}>
            <Image
              onDragStart={(e) => {
                e.preventDefault();
                return false;
              }}
              priority={true}
              height={500}
              width={500}
              src="/assets/png/me.jpg"
              // src="/assets/png/me_bg_remove.png"
              className="   rounded-lg backdrop-blur-lg"
              alt="image of pratham agrawal"
            />
          </Fade>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont animate-bounce ">
        <div className="mouse"></div>
      </div>
    </section>
  );
}
