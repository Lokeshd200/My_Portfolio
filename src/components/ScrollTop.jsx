import { useEffect, useState } from "react";

export const scrollUP = () => {
  window["scrollTo"]({ top: 0, behavior: "smooth" });
};
const ScrollTop = () => {
  const [isTrue, setIsTrue] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsTrue(true);
      } else {
        setIsTrue(false);
      }
    });
  }, [isTrue]);
  return (
    <div>
      <button
        type="button"
        aria-label="scroll to top"
        onClick={scrollUP}
        className={` ${
          isTrue ? "opacity-100" : "opacity-0"
        } !fixed bottom-2 end-2 md:end-5 md:bottom-5 duration-500 bg-custom-gradient hover:animate-bounce  rounded-full bg-primary dark:bg-bg_dark dark:hover:bg-bg_dark_2 dark:focus:bg-bg_dark p-3  shadow-md  text-white focus:outline-none focus:ring-0 `}
      >
        {isTrue && (
          <span className="[&>svg]:w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </span>
        )}
      </button>
    </div>
  );
};

export default ScrollTop;
