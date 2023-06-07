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
    title: "Red Team Operations",
    icon: web,
  },
  {
    title: "Debian GNU/Linux",
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
  {
    title: "Vice President & Head of Offensive Operations",
    company_name: "Cyber Security Club - HTU · Self-employed",
    icon: starbucks,
    iconBg: "#000",
    date: "May 2023 - Present",
    points: [
      "My role in the cyber security club at HTU is critical, I am currently the head of offensive operations at the club in which my main objective is to train the trainers of students and other security enthusiasts.\n",

      "Some of my responsibilities as the head of offensive operations include:\n",

      "Creating a comprehensive training pathway on GitHub.",
      "Developing and implementing best practices",
      "Providing mentorship and guidance.\n",

      "Also, I was given the role of vice president which my responsibilities became more important to accomplish president tasks when he’s not available.\n",

      "Some of my work as a vice president:\n",

      "Building the base of the cyber security club with a mind map.",
      "Arranging meetings to build communication and relationship between the club members.",
      "Choosing the right students to join our cyber security club and make a difference.",
      "Assisting club members by explaining , guiding and giving a clear accommodation about their responsibilities.",
      "Creating a GitHub & LinkedIn page for the club and building communication with the LinkedIn community so they can get to know our club and share their feedback.",
    ],
  },

  {
    title: "Technical Trainer",
    company_name: "Enlighten Me Club - HTU · Self-employed",
    icon: tesla,
    iconBg: "#FFF",
    date: "Mar 2023 - Present",
    points: [
      "Enlighten Me Club is a student club at Al Hussein Technical University aiming to provide the less fortunate children and teenagers with opportunities to learn programming, english and many more under the emblem of “Knowledge is for everybody”.\n",

      "My responsibilities include:\n",

      "Communication with children and delivering information efficiently.",
      "Develop their creativity, problem solving and guide them to a bright future.",
      "Creating presentations that can help them better understand why learning is important in a entertaining way.",
      "Teach programming and increase their ability to learn, develop and improve their skills in programming.",
    ],
  },
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
    name: "MalwareHolmes",
    description:
      "This is a malware Identifier for my university's programming final project written in java!",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Maven",
        color: "green-text-gradient",
      },
      {
        name: "Malware-detection",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/smadi0x86/MalwareHolmes",
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
    image: facility,
    source_code_link: "https://github.com/smadi0x86/0x01Facility",
  },
];

export { services, technologies, experiences, projects };
// export { services, technologies, experiences, projects };
