import Link from "next/link";

import {
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
  RiDiscordLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/_hkxzz_?utm_source=qr",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/venkatesan.hemanth?mibextid=ZbWKwL",
    Icon: RiFacebookLine,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/hemanthkumar52/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/hemanthkumar52",
    Icon: RiGithubLine,
  },
  {
    name: "Discord",
    link: "https://discordapp.com/users/1222111425569357857",
    Icon: RiDiscordLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="bg-accent rounded-full p-[5px] hover:text-white transition-all duration-300"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
