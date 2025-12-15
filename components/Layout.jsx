import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import ParticlesContainer from "../components/ParticlesContainer";


// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we are roughly in the first viewport/section
      // You can adjust the threshold (e.g., window.innerHeight * 0.5)
      setIsHome(window.scrollY < window.innerHeight / 2);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className={`page text-white ${sora.variable} font-sora relative min-h-screen`}
    >
      {/* Background: Blast BG (Home) vs Blue (Others) */}
      <div 
        className={`fixed inset-0 z-0 pointer-events-none transition-all duration-700 ease-in-out ${
          isHome ? "bg-explosion bg-cover bg-center bg-no-repeat opacity-70" : "bg-[#131424]"
        }`} 
      />

      {/* metadata */}
      <Head>
        <title>Hemanth Kumar | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta
          name="description"
          content="Hemanth Kumar is a Full-stack web developer with 1+ years of experience."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Hemanth Kumar" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      {/* Particles */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <ParticlesContainer />
      </div>

      <Nav />
      <Header />

      {/* main content */}
      <div className="relative z-20 w-full">
        {children}
      </div>
    </main>
  );
};

export default Layout;
