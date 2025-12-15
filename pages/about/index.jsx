import { motion } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaMicrochip,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
  SiRust,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiFlutter,
  SiDart,
  SiSupabase,
  SiFirebase,
  SiZapier,
  SiGooglecloud,
  SiVercel,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import LogoLoop from "../../components/LogoLoop";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
          FaNodeJs,
          SiRust,
          SiPostgresql,
          SiMongodb,
          SiPrisma,
        ],
      },
      {
        title: "App Development",
        icons: [SiFlutter, SiDart, SiSupabase, SiFirebase],
      },
      {
        title: "Agentic AI Development",
        stage: "N8N, Mindpal, Sim, Opal",
        icons: [SiZapier],
      },
      {
        title: "Cloud Services",
        icons: [FaAws, SiGooglecloud],
      },
      {
        title: "Embedded Software & IoT",
        stage: "IoT systems & device integration, sensors, embedded design",
        icons: [FaMicrochip],
      },
      {
        title: "Productivity & Tools",
        icons: [FaGitAlt, FaGithub, FaDocker, SiVercel],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Product Developer Intern - StrideHub",
        stage: "2026 - Present",
      },
      {
        title: "Product Developer Intern - PI ACADEMY AUSTRALIA",
        stage: "2025 - Present",
      },
      {
        title: "Full Stack Developer Intern - Learncorp",
        stage: "2025",
      },
      {
        title: "Embedded IoT Intern - Anna University EDC",
        stage: "2024",
      },
      {
        title: "Web Designer Intern - CodeClause",
        stage: "2023",
      },
    ],
  },
];

const techLogos = [
  { node: <FaReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
  { node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <FaDocker />, title: "Docker", href: "https://www.docker.com/" },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-0 text-center xl:text-left flex items-center justify-center">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col justify-center items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Visionary <span className="text-accent">ideas</span> bring exceptional designs to life.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            As I grow as a developer, I’ve been involved in building and collaborating on digital products, gaining practical experience with real-world problem-solving and modern development workflows.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={30}/>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40} duration={30}/>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Logo Loop Animation */}
          <div className="w-full max-w-[500px] xl:max-w-[480px] mx-auto xl:mx-0 mt-2 mb-8 relative z-10">
              <LogoLoop
                logos={techLogos}
                speed={50}
                direction="left"
                logoHeight={32}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut={false} // Disable for now to match transparent bg
                ariaLabel="Technology partners"
              />
          </div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] min-h-[400px] sm:min-h-[450px] md:h-[480px]"
        >
          <div className="flex gap-x-3 gap-y-2 sm:gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 flex-wrap justify-center xl:justify-start text-sm sm:text-base">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize text-sm sm:text-base xl:text-lg relative after:w-6 sm:after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 sm:py-4 xl:py-6 flex flex-col gap-y-3 sm:gap-y-2 xl:gap-y-4 items-center xl:items-start overflow-y-auto max-h-[300px] sm:max-h-[350px] md:max-h-none px-2">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col sm:flex-row max-w-max gap-x-2 items-center text-center text-white/60 text-xs sm:text-sm md:text-base"
              >
                {/* title */}
                <div className="font-light mb-1 sm:mb-2 md:mb-0">{item.title}</div>
                <div className="hidden sm:flex">-</div>
                <div className="mb-2 sm:mb-0">{item.stage}</div>

                <div className="flex gap-x-2 sm:gap-x-3 md:gap-x-4 flex-wrap justify-center">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-xl sm:text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

