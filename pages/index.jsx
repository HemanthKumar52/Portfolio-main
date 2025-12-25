import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { BsArrowRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
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
} from "react-icons/si";

import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import ParticlesContainer from "../components/ParticlesContainer";

import Bulb from "../components/Bulb";
import ServiceSlider from "../components/ServiceSlider";
import WorkSlider from "../components/WorkSlider";
import Socials from "../components/Socials";
import { fadeIn } from "../variants";

//  about data
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
];

export const experienceData = [
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
];



const Home = () => {
  const [index, setIndex] = useState(0);
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [showChip, setShowChip] = useState(true);

  useEffect(() => {
    // Hide chip after 3 seconds
    const timer = setTimeout(() => setShowChip(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const honeypot = formData.get("_honey");

    // Honeypot check (Anti-spam)
    if (honeypot) {
      setIsLoading(false);
      // Silently fail for bots
      toast.success("Message sent successfully!"); 
      return; 
    }

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    // Strict Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    // Block using the owner's email as sender
    if (email.toLowerCase().trim() === "hemanthkumar215hk@gmail.com") {
      toast.error("Please enter your own email address, not mine.");
      setIsLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_8x6r2xf",
        "template_ffk64mi",
        formRef.current,
        "QvtkJSMZNCxcMHv8l"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            zIndex: 9999,
          });
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message: " + error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full">
      {/* HOME SECTION */}
      <section id="home" className="h-screen relative overflow-hidden">
        <div className="h-full">



          {/* text */}
          <div className="w-full h-full z-10 relative">
            <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
              {/* title */}
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h1"
              >
                Transforming Ideas <br /> Into{" "}
                <span className="text-accent">Digital Reality</span>
              </motion.h1>

              {/* subtitle */}
              <motion.p
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-10"
              >
                I specialize in creating modern, high-quality digital solutions
                that combine strong design with reliable functionality to turn
                ideas into impactful products.
              </motion.p>
              
              {/* Intro Block */}
              <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 bg-white/10 backdrop-blur-sm p-4 rounded-lg border-l-4 border-accent"
              >
                <p className="text-white/80 text-sm font-light">
                  Oops, missing the intro! I'm <span className="text-white font-bold">Hemanth Kumar</span>, Turning ideas into reality. Developers and Friends call me <span className="text-accent font-bold">HK</span>.
                </p>
              </motion.div>
              
              {/* Chip (replaces ProjectsBtn) */}
              <AnimatePresence>
                {showChip && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
                  >
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                      Navigate down to know more
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {/* image */}
          <div className="w-[1280px] h-full absolute right-0 bottom-0">
            {/* avatar */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-0 lg:bottom-0 lg:right-[8%]"
            >
              <Avatar />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen py-32 text-center xl:text-left relative">


        {/* avatar img */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden xl:flex absolute bottom-0 -left-[370px]"
        >
          <Avatar />
        </motion.div>

        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="h2"
            >
              Visionary <span className="text-accent">ideas</span> bring
              exceptional designs to life.
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              As I grow as a developer, I've been involved in building and
              collaborating on digital products, gaining practical experience
              with real-world problem-solving and modern development workflows.
            </motion.p>

            {/* counters */}
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="flex flex-1 xl:gap-x-6">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={1} duration={30} />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience.
                  </div>
                </div>

                {/* projects */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={40} duration={30} />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Finished projects.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* info */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
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
                  <div className="font-light mb-1 sm:mb-2 md:mb-0">
                    {item.title}
                  </div>
                  <div className="hidden sm:flex">-</div>
                  <div className="mb-2 sm:mb-0">{item.stage}</div>

                  <div className="flex gap-x-2 sm:gap-x-3 md:gap-x-4 flex-wrap justify-center">
                    {item.icons?.map((Icon, iconI) => (
                      <div
                        key={iconI}
                        className="text-xl sm:text-2xl text-white"
                      >
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* EXPERIENCE SECTION */}
      <section id="experience" className="min-h-screen py-36 flex items-center relative">

        <div className="container mx-auto">
           <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="h2 text-center xl:text-left mb-12 xl:mb-20"
            >
              Experience <span className="text-accent"></span>
            </motion.h2>

            <div className="flex flex-col gap-y-8">
              {experienceData.map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn("up", 0.4 + (i * 0.1))} // cascading delay
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-x-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-accent font-bold text-xl md:w-[30%]">{item.stage}</div>
                  <div className="text-white text-lg font-light md:w-[70%]">{item.title}</div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="min-h-screen py-36 flex items-center relative">

        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30%] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="h2 xl:mt-8"
              >
                My services <span className="text-accent"></span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                I offer a wide range of services to help you achieve your
                business goals. From web design to development, I have got you
                covered.
              </motion.p>
            </div>

            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full xl:max-w-[65%]"
            >
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </section>

      {/* WORK SECTION */}
      <section id="work" className="min-h-screen py-36 flex items-center relative">

        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30%] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="h2 xl:mt-12"
              >
                My work <span className="text-accent"></span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                Take a look at some of my recent projects. I have worked on a
                variety of projects, ranging from simple applications to complex
                applications.
              </motion.p>
            </div>

            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full xl:max-w-[62%] overflow-hidden"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen relative">

        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          {/* text & form */}
          <div className="flex flex-col w-full max-w-[700px]">
            {/* text */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="h2 text-center mb-12"
            >
              Let's connect with <span className="text-accent">HK</span>
            </motion.h2>

            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <Socials />
            </motion.div>

            {/* form */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              {/* input group */}
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input"
                  disabled={isLoading}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input"
                  disabled={isLoading}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="subject"
                className="input"
                disabled={isLoading}
              />
              <textarea
                name="message"
                placeholder="message"
                className="textarea"
                disabled={isLoading}
              />
              
              {/* Honeypot field (hidden from users) */}
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <button
                type="submit"
                disabled={isLoading}
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  {isLoading ? "Sending..." : "Let's talk"}
                </span>
                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  aria-hidden
                />
              </button>
            </motion.form>
          </div>
        </div>
        {/* Copyright */}
        <div className="absolute bottom-4 w-full text-center text-white/50 z-20">
          <p>© 2025 Hemanth Kumar. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
