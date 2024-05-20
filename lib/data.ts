import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import CUapp1 from "@/public/CUapp1.png";
import TMDBapp from "@/public/TMDBapp.png";
import ytdb from "@/public/ytdb.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    location: "Just My Roots",
    description: `
    Optimized the product search API, achieving a significant performance improvement by reducing response time from 550 ms to 200 ms. Utilized Java's multithreading and data structures alongside MongoDB for enhanced performance. Improved MongoDB schema design, resulting in a 20% decrease in data retrieval times, leveraging Java frameworks like Hibernate and Spring for efficient processing. Redesigned the logging system, leading to a reduction in issue resolution time through the implementation of Java logging frameworks such as Log4j for error handling.`,    
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Apr 2023",
  },
  {
    title: "Software Engineer",
    location: "Newgen Software Technologies Ltd",
    description: `
    Led development of a loan origination system for Bank Muscat Oman, boosting profitability. Streamlined Equity Bank's operations, eliminating over 100 hours of manual work weekly, earning the Pinnacle performance award. Digitized KCB Uganda’s account opening, resulting in a 30% increase in accounts opened. Addressed critical challenges for Ecobank Group’s T24 core banking system, deployed across 32 countries. Created an advanced installer, reducing manual installation time by 6 hours, earning the Standing Ovation award.`,    icon: React.createElement(CgWorkAlt),
    date: "Sep 2020 - Aug 2022",
  }
  
  
] as const;

export const projectsData = [
  {
    title: "YTDb - Youtube Insights and Recommendations",
    description:
      "Are you tired of sifting through countless YouTube channels to find the content that truly interests you? Our project aims to provide a responsive web app that simplifies the discovery of exciting YouTube channels by offering a range of features and innovations. ",
    tags: [
      "MongoDb",
      "Express",
      "React",
      "NodeJs",
     
    ],
    imageUrl: ytdb,
    link: "https://github.com/jatin51997/ytdb-project",
    website: "https://ytdb-project.vercel.app/",
  },
  {
    title: "Concordia Career Services App",
    description:
      "A Career Service Application aimed at bridging the gap between job seekers and employers. A multi-user platform enabling students to upload and manage portfolios,apply to jobs posted while allowing companies to post job openings and search through the possible candidates.",
    tags: ["React", "Javascript", "MongoDB", "Tailwind", "NodeJs", "Express"],
    imageUrl: CUapp1,
    link: "https://github.com/jatin51997/careerServices",
    website: "https://career-services.vercel.app/",
  },
  
  
] as const;

export const skillsData = [
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "React.js",
  "Springboot",
  "Amazon Web Services",
  "Eclipse",
  "Git",
  "Docker",
  "Postman",
  "JIRA",
  "RESTful API",
  "SOAP",
  "Maven",
  "Linux",
  "Agile (XP & TDD)",
  "Front-end",
  "Back-end",
  "Unit testing",
  "Micro-services",
  "CI/CD",
  "SCRUM",
  "Devops",
  "MySQL",
  "Oracle",
  "MongoDB",
] as const;
