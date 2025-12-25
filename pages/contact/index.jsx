import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { fadeIn } from "../../variants";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import Socials from "../../components/Socials";


const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const honeypot = formData.get("_honey");

    // Honeypot check
    if (honeypot) {
      setIsLoading(false);
      toast.success("Message sent successfully!");
      return;
    }

    // Validation
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

    // EmailJS logic - Using Hardcoded keys to ensure it works like the Home page if envs are missing
    // Otherwise fallback to envs
    const serviceId = "service_8x6r2xf" || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = "template_ffk64mi" || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = "QvtkJSMZNCxcMHv8l" || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(
        serviceId,
        templateId, 
        formRef.current,
        publicKey 
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            zIndex: 9999
          });
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message: " + error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="h-full bg-primary/30">

      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's connect with <span className="text-accent">HK</span>
          </motion.h2>

          {/* socials */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center mb-8"
          >
            <Socials />
          </motion.div>

          {/* form */}
          <motion.form
            ref={formRef}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            
            {/* Honeypot field (hidden from users) */}
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
      <div className="absolute bottom-4 w-full text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} Hemanth Kumar. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;
