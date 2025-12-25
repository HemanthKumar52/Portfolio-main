"use client"

import * as React from "react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { BsArrowRight, BsGithub } from "react-icons/bs"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const projects = {
  fullStack: [
    {
      title: "Smart Resume Analyser",
      link: "https://github.com/HemanthKumar52/Smart-Resume-Analyser",
      description: "Built an AI system that analyzes resumes, extracts skills, compares them to a job description, and generates an improved ATS-friendly version with recommendations. Integrated RAG architecture, NLP models, cloud-based document processing, and automated scoring.",
      tech: "Gen Ai Full Stack",
    },
    {
      title: "Defensive Root Kit Monitor",
      link: "https://github.com/HemanthKumar52/Defensive-Root-Kit-Monitor",
      description: "A comprehensive security tool designed to detect and prevent kernel-mode and user-mode rootkits. Features real-time memory scanning and integrity checks.",
      tech: "Cybersecurity + Full Stack",
    },
    {
      title: "Employee Management System",
      link: "https://github.com/HemanthKumar52/Employee-management-System",
      description: "A complete web application to simplify workforce management. Handles employee profiles, attendance tracking, payroll processing, and performance reviews.",
      tech: "MERN Stack",
    },
    {
      title: "Email Classifier",
      link: "https://github.com/HemanthKumar52/Email-Classifier",
      description: "Intelligent email sorting application that uses Machine Learning to categorize incoming emails into Spam, Work, Personal, and Promotions automatically.",
      tech: "MERN Stack",
    },
    {
      title: "Pivot Table Generator",
      link: "https://github.com/HemanthKumar52/Pivote-table",
      description: "Web-based data analysis tool allowing users to upload datasets and generate dynamic pivot tables and charts for visualizing complex data relationships.",
      tech: "MERN Stack",
    },
    {
      title: "Smart DNS Scan & Alert System",
      link: "https://github.com/HemanthKumar52/Smart-DNS-Tracker",
      description: "Cybersecurity utility that monitors DNS records for unauthorized changes, DNS spoofing, and propagation issues, sending real-time alerts to administrators.",
      tech: "Cybersecurity + Full Stack",
    },
  ],
  mobile: [
    {
      title: "Smart To-Do List manager",
      link: "https://github.com/HemanthKumar52",
      description: "A feature-rich task management app with priority levels, deadline reminders, and category organization to help users stay productive.",
      tech: "Flutter",
    },
    {
      title: "International Currency Converter",
      link: "https://github.com/HemanthKumar52/",
      description: "Real-time currency conversion app supporting over 150 currencies. Features offline mode, historical charts, and a user-friendly calculator interface.",
      tech: "Flutter + RUST",
    },
    {
      title: "Musync",
      link: "https://github.com/HemanthKumar52/Defensive-Root-Kit-Monitor",
      description: "Modern music player and sync tool. Manages local libraries and syncs playlists across devices with a focus on high-performance and fluid UI.",
      tech: "Flutter + Supabase + Rest APIs + Rust",
    },
    {
      title: "Simple Music Player",
      link: "https://github.com/HemanthKumar52/",
      description: "Lightweight and elegant music player for local audio files. Includes playlist creation, equalizer settings, and background playback controls.",
      tech: "Flutter + Firebase",
    },
    {
      title: "Smart Internet and Domain Tester",
      link: "https://github.com/HemanthKumar52/",
      description: "Mobile network utility to diagnose internet connection speed, ping, and verify domain health and DNS propagation status on the go.",
      tech: "Flutter + Node",
    },
    {
      title: "Smart Defensive Root Kit Monitor for Mobile",
      link: "https://github.com/HemanthKumar52/",
      description: "Mobile endpoint security application capable of scanning Android devices for signs of rootkits, unauthorized root access, and malicious background processes.",
      tech: "Cybersecurity + Flutter + Python",
    },
  ],
  ml: [
    {
      title: "Smart Resume Analyser",
      link: "https://github.com/HemanthKumar52/",
      description: "Python-based core engine for resume analysis. Utilizes NLP and keyword matching to score resumes against job descriptions effectively.",
      tech: "Python",
    },
    {
      title: "Emotion Detection",
      link: "https://github.com/HemanthKumar52/",
      description: "Deep learning model trained to recognize and classify human emotions from facial expressions in images and video streams.",
      tech: "Python",
    },
    {
      title: "Smart Attendance System using ML",
      link: "https://github.com/HemanthKumar52/Defensive-Root-Kit-Monitor",
      description: "Automated attendance tracking system using facial recognition technology. Eliminates manual roll calls and prevents proxy attendance.",
      tech: "Python",
    },
  ],
  embedded: [
    {
      title: "Smart Water Level Monitoring",
      link: "https://wokwi.com/projects/328451800839488084",
      description: "Automatic water level monitoring system using ultrasonic sensors to control a water pump. Prevents overflow and dry run conditions.",
      tech: "Arduino UNO, Ultrasonic Sensor, Embedded C",
    },
    {
      title: "Gas Leakage Detection",
      link: "https://wokwi.com/projects/297787059514376717",
      description: "Safety system using MQ-series gas sensors that triggers alarms and visual alerts when harmful gas levels are detected.",
      tech: "Arduino UNO, Gas Sensor, Embedded C",
    },
    {
      title: "Smart Environmental Monitoring",
      link: "#",
      description: "Multi-sensor system to measure temperature, humidity, and air quality in real time and display values on an LCD interface.",
      tech: "Arduino UNO, DHT11, MQ Sensor, I2C",
    },
    {
      title: "IoT-Based Smart Agriculture",
      link: "#",
      description: "Soil moisture monitoring and irrigation automation system that controls water flow based on real-time soil moisture conditions.",
      tech: "NodeMCU, Soil Moisture Sensor, IoT",
    },
    {
      title: "Smart Home Automation",
      link: "#",
      description: "Prototype for controlling appliances using sensors and relay modules with safety-based automation logic.",
      tech: "Arduino UNO, Relay Module, Embedded C",
    },
    {
      title: "Smart Weather Monitoring",
      link: "#",
      description: "Weather station that monitors temperature, humidity, and atmospheric pressure using digital sensors and displays live readings.",
      tech: "Arduino UNO, DHT22, BMP280",
    },
    {
      title: "IoT-Based Load Cell System",
      link: "#",
      description: "Digital weighing system using a load cell and amplifier to provide accurate real-time weight measurements.",
      tech: "ESP32, HX711, Embedded C",
    },
  ],
  automation: [
    {
      title: "Intelligent Task Automation",
      link: "#",
      description: "Automation engine that executes scheduled and event-based tasks such as file processing, notifications, and system actions.",
      tech: "Python, Cron Jobs",
    },
    {
      title: "Smart Workflow Automation",
      link: "#",
      description: "End-to-end workflow automation system that connects multiple services and triggers actions based on events and rules.",
      tech: "Node.js, Webhooks, REST APIs",
    },
    {
      title: "CI/CD Pipeline Automation",
      link: "#",
      description: "Automated build, test, and deployment pipeline with version control integration and environment-based deployments.",
      tech: "GitHub Actions, Docker, Shell Scripting",
    },
    {
      title: "Auto Resume Processing",
      link: "#",
      description: "System that processes resumes by extracting text, classifying data, and generating structured outputs.",
      tech: "Python, OCR, NLP",
    },
    {
      title: "Smart Notification Bot",
      link: "#",
      description: "Automation bot that sends real-time alerts and system messages through messaging platforms like Telegram or Discord.",
      tech: "Node.js, Telegram API",
    },
  ],
};

const CategoryCarousel = ({ title, items, delay = 2000 }) => {
  const plugin = React.useRef(
    Autoplay({ delay, stopOnInteraction: true })
  )

  return (
    <div className="w-full mb-12">
      <h3 className="text-2xl font-bold mb-6 text-accent pl-2 border-l-4 border-accent">
        {title}
      </h3>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {items.map((item, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-full bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] border border-white/10 transition-colors duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-xl text-white group-hover:text-accent transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-xs font-mono text-white/60">
                      {item.tech}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/80 line-clamp-4">
                      {item.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={item.link}
                      target="_blank"
                      className="text-sm flex items-center gap-2 hover:underline text-accent"
                    >
                      View Project <BsArrowRight />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 bg-primary/20 hover:bg-primary/40 border-none text-white" />
        <CarouselNext className="hidden md:flex -right-4 bg-primary/20 hover:bg-primary/40 border-none text-white" />
      </Carousel>
    </div>
  );
};

const WorkSlider = () => {
  return (
    <div className="w-full h-full overflow-y-auto pb-20 custom-scrollbar max-h-[600px] pr-4">
      <CategoryCarousel title="Full Stack Development" items={projects.fullStack} delay={3000} />
      <CategoryCarousel title="Mobile App Development" items={projects.mobile} delay={3500} />
      <CategoryCarousel title="Machine Learning" items={projects.ml} delay={4000} />
      <CategoryCarousel title="Embedded Systems & IoT" items={projects.embedded} delay={3000} />
      <CategoryCarousel title="Automation Systems" items={projects.automation} delay={4500} />
    </div>
  );
};

export default WorkSlider;
