// Project Images
import toDoImg from "/src/assets/images/todoapp2.svg";
import shortly from "/src/assets/images/shortly.svg";
import blogr from "/src/assets/images/blogr.svg";
import nailz from "/src/assets/images/nailz.svg";
import aninet from "/src/assets/images/aninet.svg";

// Skills Images
import htmlImg from "/src/assets/images/html.svg";
import cssImg from "/src/assets/images/css.svg";
import tailwindImg from "/src/assets/images/tailwind.svg";
import sassImg from "/src/assets/images/sass.svg";
import reactImg from "/src/assets/images/react.svg";
import javascriptImg from "/src/assets/images/javascript.svg";
import gitImg from "/src/assets/images/git.svg";

export const heroData = [
  {
    id: 1,
    greet: "Nice to meet you! I'm",
    name: "Ioan Gheraszim",
    abouts: `Based in the UK, I'm a front-end developer and Computer Science
        graduate from the University of Bedfordshire, passionate about
        creating user-friendly websites and turning creative ideas into
        reality.`,
  },
];

export const skillsData = [
  {
    id: 1,
    title: "HTML",
    image: htmlImg,
  },
  {
    id: 2,
    title: "CSS",
    image: cssImg,
  },
  {
    id: 3,
    title: "Tailwind",
    image: tailwindImg,
  },
  {
    id: 4,
    title: "SASS",
    image: sassImg,
  },
  {
    id: 5,
    title: "React",
    image: reactImg,
  },
  {
    id: 6,
    title: "JavaScript",
    image: javascriptImg,
  },
  {
    id: 7,
    title: "Git",
    image: gitImg,
  },
];

export const projectData = [
  {
    id: 1,
    title: "ToDo",
    tech: ["React", "SCSS"],
    description:
      "This is a user-friendly task management to-do list application. It facilitates adding new tasks, marking completed ones, and refining existing entries, simplifying the process and helping users stay organized and boost productivity.",
    code: "https://github.com/ioangheraszim/Todo-App",
    live: "https://ioangheraszim.github.io/Todo-App/",
    image: toDoImg,
  },
  {
    id: 2,
    title: "URL Shortner",
    tech: ["React", "SCSS"],
    description:
      "Shortly's URL Shortening API simplifies long URLs, creating compact and user-friendly links for effortless sharing and a streamlined user experience. Perfect for developers and website owners looking to enhance link management.",
    code: "https://github.com/ioangheraszim/url-shortening",
    live: "https://ioangheraszim.github.io/url-shortening/",
    image: shortly,
  },
  {
    id: 3,
    title: "Blogr Landing Page",
    tech: ["JavaScript", "SCSS"],
    description:
      "Blogr Landing Page: A chic gateway to the future of publishing. This sleek and dynamic page introduces the modern features and user-friendly design of the Blogr platform, enticing visitors to explore seamless and stylish content creation.",
    code: "https://github.com/ioangheraszim/Blogr-LandingPage-FE",
    live: "https://ioangheraszim.github.io/Blogr-LandingPage-FE/",
    image: blogr,
  },
  {
    id: 4,
    title: "Nailz",
    tech: ["React", "SCSS"],
    description:
      "Nailz, a solo frontend project dedicated to the world of nail beauty and education. This project is a personal endeavor to create a captivating and user-friendly e-commerce website that focuses exclusively on nail products and online/offline nail art courses.",
    code: "https://github.com/ioangheraszim/Nailz",
    live: "https://ioangheraszim.github.io/Nailz/",
    image: nailz,
  },
  {
    id: 5,
    title: "AniNet",
    tech: ["React", "Tailwind"],
    description:
      "AniNet, an online platform designed to help you explore, discover, and delve into the world of anime. AniNet is a web application created with the goal of providing an immersive experience for anime enthusiasts.",
    code: "https://github.com/ioangheraszim/AniNet",
    live: "https://ioangheraszim.github.io/AniNet/",
    image: aninet,
  },
];
