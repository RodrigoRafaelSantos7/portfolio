import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rodrigo Santos",
  initials: "RS",
  url: "https://dillion.io",
  location: "Lisbon, Portugal",
  locationLink: "https://www.google.com/maps/place/lisbon",
  description:
    "Computer Science Student turned Entrepreneur. I love building things and helping people. Very passionate about Cryptography.",
  summary:
    "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at [Nova School of Science and Technology](https://www.fct.unl.pt/en). My passion for cryptography and theoretical computer science developed during my second year, and I am now focused on obtaining a Master's degree in Computer Science with a specialization in Cryptography. In addition to my studies, I am a dedicated developer and entrepreneur, having founded my own company where I create innovative web applications using cutting-edge technologies.",
  avatarUrl: "./me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Prisma",
    "TailwindCSS",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "OCaml",
    "LaTeX",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RodrigoRafaelSantos7",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rodrigo-santos-502b802b9/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:rodrigorafaelsantos7@icloud.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Quantum Studio",
      href: "https://rodrigorafaelsantos7.github.io/portfolio/",
      badges: [],
      location: "Remote",
      title: "Co-Founder & Full-Stack Developer",
      logoUrl: "./atomic.png",
      start: "Sep 2024",
      end: "Present",
      description:
        "I co-founded a company focused on delivering innovative web applications using cutting-edge technologies. I oversee the development of all projects and manage client relationships, including acquiring new clients. To date, we have created websites that serve tens of thousands of users daily.",
    },
  ],
  education: [
    {
      school: "Nova School of Science and Technology",
      href: "https://www.fct.unl.pt/en",
      degree: "Bachelor's Degree of Computer Science and Engineering (BCSE)",
      logoUrl: "./nova.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "Cambridge English",
      href: "https://www.cambridgeenglish.org/exams-and-tests/advanced/",
      degree: "C1 Advanced - Overall Score: 194/210",
      logoUrl: "./cambridge.png",
      start: "2024",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "The Profit Blueprint",
      href: "https://the-profit-blueprint.com/",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "The Profit Blueprint is an innovative online platform designed to educate users on generating income through various online strategies. I was responsible for developing both the front-end and back-end of the website, ensuring it can handle over 10,000 users daily.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "Typescript",
        "Firebase",
        "Vercel",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://the-profit-blueprint.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "./TPB2.png",
      video: "",
    },
  ],
} as const;
