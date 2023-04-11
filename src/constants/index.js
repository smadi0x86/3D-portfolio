/*
 ! This file contains all the constants used in the project, can be used to change the content of the website.
*/
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Penetration Testing",
    icon: web,
  },
  {
    title: "Low Level Programming",
    icon: mobile,
  },
  {
    title: "Malware Development",
    icon: backend,
  },
  {
    title: "Research",
    icon: creator,
  },
];

const technologies = [
  {
    name: "c",
    icon: html,
  },
  {
    name: "python",
    icon: mongodb,
  },
  {
    name: "java",
    icon: javascript,
  },
  {
    name: "assembly",
    icon: css,
  },
  {
    name: "bash",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  /* {
    title: "Coming Soon",
    company_name: "COMPANY NAME",
    icon: starbucks,
    iconBg: "#383E56",
    date: "DATE",
    points: ["INFO"],
  },

  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  */
];

const projects = [
  {
    name: "Offensive operations pathway",
    description:
      "As a head of offensive operations in my university's cyber security club, I developed this pathway to help new members learn the basics of offensive operations.",
    tags: [
      {
        name: "red team",
        color: "blue-text-gradient",
      },
      {
        name: "offensive operations",
        color: "green-text-gradient",
      },
      {
        name: "pathway",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/smadi0x86/CSC-RedOps",
  },
  {
    name: "Java Teach2Learn",
    description:
      "This is a study technique that I developed to help me learn Java for my university, It tricks your brain into thinking you already know these concepts and that you are teaching it to someone else.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Teach2Learn",
        color: "green-text-gradient",
      },
      {
        name: "University",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/smadi0x86/java0x01",
  },
  {
    name: "0x01Facility",
    description:
      "This is a collection of methodolgies and techniques I learned and used in my pentesting journey.",
    tags: [
      {
        name: "Methods",
        color: "blue-text-gradient",
      },
      {
        name: "Pentesting",
        color: "green-text-gradient",
      },
      {
        name: "Cheatsheets",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/smadi0x86/0x01Facility",
  },
];

export { services, technologies, experiences, projects };
// export { services, technologies, experiences, projects };
