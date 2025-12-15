import { useLenis } from "@studio-freight/react-lenis";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  const lenis = useLenis();

  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element && lenis) {
      lenis.scrollTo(element, {
        offset: 0,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <div className="mx-auto xl:mx-0">
      <button
        onClick={scrollToWork}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <img
          src="/rounded-text.png"
          alt="My Projects"
          className="animate-spin-slow w-[141px] h-[148px] object-contain"
        />
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
          aria-hidden
        />
      </button>
    </div>
  );
};

export default ProjectsBtn;
