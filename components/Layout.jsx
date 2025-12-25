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
        <title>Hemanth Kumar | Full Stack Developer & Cybersecurity Enthusiast</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta
          name="description"
          content="Hemanth Kumar (HK) is a Full-stack Developer and Cybersecurity Enthusiast specializing in MERN, Flutter, and IoT solutions. Explore my portfolio."
        />
        <meta
          name="keywords"
          content="Hemanth Kumar, HK, Hemanth Kumar Portfolio, Full Stack Developer, Cybersecurity, Flutter Developer, IoT, MERN Stack, React Developer"
        />
        <meta name="author" content="Hemanth Kumar" />
        <meta name="theme-color" content="#f13024" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hemanthkumarportfolio.vercel.app/" />
        <meta property="og:title" content="Hemanth Kumar | Full Stack Developer & Cybersecurity Enthusiast" />
        <meta property="og:description" content="Hemanth Kumar (HK) is a Full-stack Developer and Cybersecurity Enthusiast. View my projects and skills." />
        <meta property="og:image" content="https://hemanthkumarportfolio.vercel.app/social-preview.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hemanthkumarportfolio.vercel.app/" />
        <meta property="twitter:title" content="Hemanth Kumar | Full Stack Developer" />
        <meta property="twitter:description" content="Portfolio of Hemanth Kumar - Full Stack Developer, Cybersecurity Researcher, and IoT Enthusiast." />
        <meta property="twitter:image" content="https://hemanthkumarportfolio.vercel.app/social-preview.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://hemanthkumarportfolio.vercel.app/" />
        
        {/* Favicon & Manifest */}
        <link rel="icon" href="/avatar.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Hemanth Kumar",
              "alternateName": "HK",
              "url": "https://hemanthkumarportfolio.vercel.app/",
              "jobTitle": "Full Stack Developer",
              "sameAs": [
                "https://github.com/HemanthKumar52",
                "https://www.linkedin.com/in/hemanthkumar52/",
                "https://www.instagram.com/_hkxzz_",
                "https://facebook.com" 
              ],
              "knowsAbout": [
                "Full Stack Development",
                "Cybersecurity", 
                "IoT",
                "Machine Learning",
                "Flutter",
                "MERN Stack"
              ]
            }),
          }}
        />
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
