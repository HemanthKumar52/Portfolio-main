import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "Home", section: "home", icon: HiHome },
  { name: "About", section: "about", icon: HiUser },
  { name: "Experience", section: "experience", icon: HiRectangleGroup }, // Using RectangleGroup as a placeholder for Exp
  { name: "Services", section: "services", icon: HiViewColumns },
  { name: "Projects", section: "work", icon: HiViewColumns }, // Re-using for now or distinct key
  { name: "Contact", section: "contact", icon: HiEnvelope },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showTransition, setShowTransition] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollTime = useRef(0);

  // Screen size detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // xl breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Active Section Detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navData.map(item => item.section);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjusted threshold for mobile scrolling
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll & Key Lock logic (Desktop Only)
  useEffect(() => {
    if (isMobile) return; // Disable scrolljacking on mobile

    const handleWheel = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime.current < 2000) return; 

      const direction = e.deltaY > 0 ? 1 : -1;
      navigate(direction);
    };

    const handleKeyDown = (e) => {
      if (["ArrowUp", "ArrowDown", " "].includes(e.key)) {
        e.preventDefault();
        const now = Date.now();
        if (now - lastScrollTime.current < 2000) return;

        if (e.key === "ArrowUp") navigate(-1);
        if (e.key === "ArrowDown" || e.key === " ") navigate(1);
      }
    };

    const navigate = (direction) => {
      const currentIndex = navData.findIndex(item => item.section === activeSection);
      let nextIndex = currentIndex + direction;

      if (nextIndex < 0) nextIndex = 0;
      if (nextIndex >= navData.length) nextIndex = navData.length - 1;

      if (nextIndex !== currentIndex) {
         lastScrollTime.current = Date.now();
         const targetSection = navData[nextIndex].section;
         setActiveSection(targetSection);
         scrollToSection(targetSection);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSection, isMobile]);

  const scrollToSection = (sectionId) => {
    if (!isMobile) setShowTransition(true); // Only show transition curtain on desktop
    
    // Smooth scroll for everyone, but with delay for curtain on desktop
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (!isMobile) setTimeout(() => setShowTransition(false), 200);
    }, isMobile ? 0 : 800); 
  };

  const transitionVariants = {
    initial: { x: "100%", width: "100%" },
    animate: { x: "0%", width: "0%" },
    exit: { x: ["0%", "100%"], width: ["0%", "100%"] },
  };

  return (
    <>
      <AnimatePresence>
        {showTransition && !isMobile && (
          <>
            <motion.div className="fixed inset-y-0 right-full w-screen bg-[#2e2257] z-[50]" variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }} />
            <motion.div className="fixed inset-y-0 right-full w-screen bg-[#3b2d71] z-[40]" variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }} />
            <motion.div className="fixed inset-y-0 right-full w-screen bg-[#4b3792] z-[30]" variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }} />
          </>
        )}
      </AnimatePresence>

      {/* Desktop Header */}
      <header className="hidden xl:flex fixed top-0 w-full z-50 items-center justify-between px-4 xl:px-12 py-6 pointer-events-none">
        
        {/* Left: Status Line */}
        <div className="font-mono text-[13px] lg:text-sm tracking-wide text-white/90 gap-x-4 items-center bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg pointer-events-auto min-w-[340px] justify-center flex">
          <div className="flex items-center gap-x-2">
              <span className="text-white/60">status:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <FaCircle className="text-[8px] animate-pulse" /> building
              </span>
          </div>
          <span className="text-white/20">|</span>
            <div className="flex items-center gap-x-2">
              <span className="text-white/60">bugs:</span>
              <span className="text-red-400 font-bold">hunting</span>
          </div>
          <span className="text-white/20">|</span>
            <div className="flex items-center gap-x-2">
              <span className="text-white/60">coffee:</span>
              <span className="text-yellow-400 font-bold">active</span>
          </div>
        </div>

        {/* Center: Nav Pills */}
        <div className="pointer-events-auto">
          <div className="flex items-center gap-x-1 bg-black/30 backdrop-blur-md px-2 py-2 rounded-full border border-white/10 shadow-lg">
            {navData.map((link, i) => {
              const isActive = link.section === activeSection;
              return (
                <button 
                  key={i} 
                  onClick={() => {
                    lastScrollTime.current = Date.now();
                    setActiveSection(link.section);
                    scrollToSection(link.section);
                  }}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${isActive ? "text-white" : "text-white/70 hover:text-white"}`}
                >
                  {isActive && (
                    <motion.span 
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white/15 rounded-full -z-10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-x-4 pointer-events-auto">
            <Link
              href="/contact"
              className="laser-btn rounded-full px-6 py-3 transition-all duration-300 flex items-center justify-center group text-white"
              style={{ "--btn-bg": "#131424" }} 
            >
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase whitespace-nowrap z-10 relative group-hover:text-accent transition-colors">
                Let's Connect
              </span>
            </Link>
             <Link
              href="/Hemanth Kumar Res.pdf"
              target="_blank"
              className="laser-btn rounded-full px-6 py-3 transition-all duration-300 flex items-center justify-center group text-white"
              style={{ "--btn-bg": "#F13024" }}
            >
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase whitespace-nowrap z-10 relative">
                Hire Me!
              </span>
            </Link> 
        </div>
      </header>

      {/* Mobile/Tablet Bottom Nav */}
      <nav className="xl:hidden fixed bottom-0 w-full z-50 bg-black/20 backdrop-blur-lg border-t border-white/10 pb-safe">
        <div className="flex w-full justify-between items-center px-6 py-4 max-w-md mx-auto">
           {navData.map((link, i) => {
              const isActive = link.section === activeSection;
              const Icon = link.icon;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setActiveSection(link.section);
                    scrollToSection(link.section);
                  }}
                  className={`relative flex items-center justify-center group transition-all duration-300 ${isActive ? "text-accent -translate-y-1" : "text-white/50 hover:text-white"}`}
                >
                   {isActive && (
                     <motion.div 
                        layoutId="mobile-active"
                        className="absolute -top-10 w-1 p-1 bg-accent rounded-full shadow-[0_0_10px_#f13024]"
                     />
                   )}
                   <div className="flex flex-col items-center gap-1">
                      <Icon className="text-2xl" />
                      <span className="text-[10px] uppercase tracking-wider opacity-100">{link.name}</span>
                   </div>
                </button>
              );
           })}
        </div>
      </nav>
    </>
  );
};

export default Nav;
