import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Zeptac from "./assets/zeptac.png";
import Movix from "./assets/movix.png";
import Leva from "./assets/leva.png";
import DSVisual from "./assets/ds-visualizer.png";
import StickyNote from "./assets/sticky-note.png";
import FineFinish from "./assets/fine-finish.png";
import Fusion from "./assets/fusion.png";
import Airbnb from "./assets/airbnb.png";
import Easyties from "./assets/easyties.png";
import Fitness from "./assets/fitness.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

const DOB = new Date("2000-01-01"); // YYYY-MM-DD

function getAge(dob) {
  const diffMs = Date.now() - dob.getTime();
  const ageDt = new Date(diffMs);
  return Math.abs(ageDt.getUTCFullYear() - 1970);
}

export const heroData = {
  name: "I'm Rohan Shirke.",
  role: "Software Engineer & Freelancer",
  description:
    "Backend-focused engineer and freelancer skilled in building scalable systems and APIs using Java Spring Boot, Laravel, Django, and Node.js. I deliver reliable, high-performance solutions for businesses and individual clients.",
};

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  { id: 1, title: "Full Name : ", description: "Rohan Shirke" },
  { id: 2, title: "Age : ", description: `${getAge(DOB)} Years` },
  { id: 3, title: "Nationality : ", description: "Indian" },
  { id: 4, title: "Freelance Status : ", description: "Available" },
  { id: 5, title: "Location : ", description: "Thane, Mumbai, India" },
  {
    id: 6,
    title: "Phone : ",
    description: "+91 9082795689",
    link: "tel:+919082795689",
  },
  {
    id: 7,
    title: "Email : ",
    description: "rohanshirke2k@gmail.com",
    link: "mailto:rohanshirke2k@gmail.com",
  },
  {
    id: 8,
    title: "GitHub : ",
    description: "github.com/rohan-shirke",
    link: "https://github.com/rohan-shirke",
  },
  {
    id: 9,
    title: "LinkedIn : ",
    description: "linkedin.com/in/shirke-rohan",
    link: "https://linkedin.com/in/shirke-rohan",
  },
  { id: 10, title: "Languages : ", description: "English, Hindi, Marathi" },
];

export const stats = [
  {
    id: 1,
    no: "2.5+",
    title: "Years of <br /> Experience",
  },
  {
    id: 2,
    no: "5000+",
    title: "API Endpoints <br /> Developed",
  },
  {
    id: 3,
    no: "5+",
    title: "Enterprise Modules <br /> Delivered",
  },
  {
    id: 4,
    no: "300+",
    title: "GitHub <br /> Contributions",
  },
];

export const resume = [
  // ------------------ EXPERIENCE ------------------
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Jul 2023 - Present",
    title: "Founding Software Engineer <span>@ Decode Digital</span>",
    desc: "Developed and maintained enterprise-grade ERP modules using Java Spring Boot, Laravel, and Vue.js. Implemented 5000+ REST APIs, ensuring scalable and secure backend solutions.",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Dec 2022 - Jun 2023",
    title: "Backend Developer <span>@ Leva Patidar Samaj Mandal</span>",
    desc: "Built and deployed RESTful APIs for a matrimonial website using Laravel and MySQL. Integrated with React frontend for seamless user experience.",
  },
  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Jan 2023 - Jun 2023",
    title: "Web Developer Intern <span>@ PBS Solution & Agro Products</span>",
    desc: "Developed business portfolio websites and Java Swing billing application. Contributed to front-end and back-end development using React.js and Node.js.",
  },

  // ------------------ EDUCATION ------------------
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019 - 2023",
    title:
      "Bachelor of Engineering (IT) <span>@ M.H. Saboo Siddik College of Engineering, Mumbai University</span>",
    desc: "Self-taught and driven, I honed my skills in Software Engineering, Database Management, and Web Development independently. Focused on personal projects, building ERP and backend systems to strengthen practical expertise and problem-solving abilities.",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018 - 2019",
    title: "HSC <span>@ Satish Pradhan Dnyanasadhana College, Thane</span>",
    desc: "Successfully completed higher secondary education (HSC) from Satish Pradhan Dnyanasadhana College, Thane.",
  },
  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2016 - 2017",
    title: "SSC <span>@ Peoples' Education Society, Thane</span>",
    desc: "Successfully completed secondary education (SSC) from Peoples' Education Society, Thane.",
  },
];

export const skills = [
  // Backend & Core Languages
  {
    id: 1,
    title: "Java",
    percentage: "95",
  },
  {
    id: 2,
    title: "Node.js",
    percentage: "90",
  },
  {
    id: 3,
    title: "Spring Boot",
    percentage: "88",
  },
  {
    id: 4,
    title: "Laravel",
    percentage: "88",
  },

  // Frontend Frameworks
  {
    id: 5,
    title: "React.js",
    percentage: "85",
  },
  {
    id: 6,
    title: "Vue.js",
    percentage: "75",
  },

  // Databases & APIs
  {
    id: 7,
    title: "MySQL",
    percentage: "90",
  },
  {
    id: 8,
    title: "PostgreSQL",
    percentage: "88",
  },
  {
    id: 9,
    title: "MongoDB",
    percentage: "85",
  },
  {
    id: 10,
    title: "RESTful APIs",
    percentage: "95",
  },

  // Tools / DevOps
  {
    id: 11,
    title: "Docker",
    percentage: "80",
  },
  {
    id: 12,
    title: "Postman",
    percentage: "90",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Zeptac,
    title: "Zeptac",
    details: [
      {
        icon: <FiFileText />,
        title: "Summary : ",
        desc: "Complete ERP MVP developed in Laravel & Vue.js monolithic architecture and fully implemented in Microservices using Spring Boot. Includes Quality, Sales, HR, Thermal, and Calibration modules. Designed for scalability and enterprise-grade performance. End-to-end development of backend APIs and frontend interfaces. Focused on maintainability and modular architecture.",
      },
      {
        icon: <FaCode />,
        title: "Tech Stack : ",
        desc: "Laravel, Vue.js, MySQL, PostgreSQL, Spring Boot, Java, Docker",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "https://app.zeptac.com",
      },
    ],
  },
  {
    id: 2,
    img: Leva,
    title: "LevaBhavan",
    details: [
      {
        icon: <FiFileText />,
        title: "Summary : ",
        desc: "Matrimonial platform with backend in Laravel and frontend in React. Implements user registration, matchmaking, messaging, and admin moderation features. Designed for secure and efficient data handling. Focused on usability and seamless user experience. Complete full-stack solution for matrimonial service.",
      },
      {
        icon: <FaCode />,
        title: "Tech Stack : ",
        desc: "Laravel Backend, React Frontend, MySQL",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "https://levabhavandombivli.com/",
      },
    ],
  },
  {
    id: 3,
    img: Easyties,
    title: "Easyties",
    details: [
      {
        icon: <FiFileText />,
        title: "Summary : ",
        desc: "Society amenities management system with Laravel backend and React frontend. Handles booking, notifications, and admin dashboard management. Designed for community convenience and operational efficiency. Full-stack development with responsive and interactive UI. Ensures data security and easy maintenance.",
      },
      {
        icon: <FaCode />,
        title: "Tech Stack : ",
        desc: "Laravel Backend, Tailwind, React Frontend, MySQL",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "Private Repo",
      },
    ],
  },
  {
    id: 4,
    img: Fusion,
    title: "Fusion (Video Merger)",
    details: [
      {
        icon: <FiFileText />,
        title: "Summary : ",
        desc: "Video merging application with Laravel backend and Vue.js frontend. Allows users to combine multiple video files, manage output formats, and preview merged content. Optimized for performance and usability. Includes modular backend architecture and reusable UI components. Complete full-stack implementation for internal tooling.",
      },
      {
        icon: <FaCode />,
        title: "Tech Stack : ",
        desc: "Laravel Backend, Vue.js Frontend",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "https://github.com/rohan-shirke/fusion",
      },
    ],
  },
  {
    id: 5,
    img: DSVisual,
    title: "DS Visualizer",
    details: [
      {
        icon: <FiFileText />,
        title: "Summary : ",
        desc: "Data structure and algorithm visualizer built with React.js. Provides interactive visualizations for various data structures, sorting algorithms, and search algorithms. Enhances learning and debugging experience. Fully responsive UI with modular components. Designed for education and personal development.",
      },
      {
        icon: <FaCode />,
        title: "Tech Stack : ",
        desc: "React.js, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "Private Repo",
      },
    ],
  },
  {
    id: 6,
    img: Movix,
    title: "Movix",
    details: [
      {
        icon: <FiFileText />,
        title: "Summary : ",
        desc: "Responsive movie discovery platform utilizing The Movie Database (TMDb) API. Features trending movies, search, details, watchlists, and personalized recommendations. Designed for high performance and intuitive user experience. Fully responsive and scalable front-end using React.js. Provides seamless browsing and content discovery.",
      },
      {
        icon: <FaCode />,
        title: "Tech Stack : ",
        desc: "React.js, TMDb API",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "https://rdev-movix.vercel.app/",
      },
    ],
  },
  {
    id: 7,
    img: FineFinish,
    title: "FineFinish",
    details: [
      {
        icon: <FiFileText />,
        title: "Summary : ",
        desc: "ERP system for a Carbon Fiber testing lab, enabling efficient sample management, testing, and report generation. Built with Laravel backend and Vue.js frontend, it handles data extraction, analytics, and secure operations. Designed for accuracy, traceability, and streamlined lab processes.",
      },
      {
        icon: <FaCode />,
        title: "Tech Stack : ",
        desc: "Laravel, Vue.js, MySQL",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "Private Repo",
      },
    ],
  },
  {
    id: 8,
    img: Airbnb,
    title: "Airbnb Clone",
    details: [
      {
        icon: <FiFileText />,
        title: "Summary : ",
        desc: "Full-stack Airbnb clone built with React.js and Node.js. Features include property listings, bookings, search, and user authentication. Implements real-time availability checks and dynamic filtering. Designed for responsive user experience and scalability. Complete project built for personal learning and portfolio showcase.",
      },
      {
        icon: <FaCode />,
        title: "Tech Stack : ",
        desc: "React.js, Node.js, MongoDB",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "https://github.com/rohan-shirke/airbnb",
      },
    ],
  },
  {
    id: 9,
    img: Fitness,
    title: "Fitness App",
    details: [
      {
        icon: <FiFileText />,
        title: "Summary : ",
        desc: "A simple and user-friendly fitness application where users can log in, record daily activities, and track basic progress. The system analyzes user inputs and provides AI-based workout recommendations to improve their routine. Built with a clean UI, lightweight backend, and smooth interaction flow for everyday use.",
      },
      {
        icon: <FaCode />,
        title: "Tech Stack : ",
        desc: "React.js, Spring Boot, Java, PostgreSQL",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "https://github.com/rohan-shirke/fitness-microservices",
      },
    ],
  },
  {
    id: 10,
    img: StickyNote,
    title: "Sticky Notes",
    details: [
      {
        icon: <FiFileText />,
        title: "Summary : ",
        desc: "A drag & drop sticky notes application built with React JS and Appwrite. Users can create, move, and customize notes with persistence in the database. Features include color customization, auto-grow note size, and instant autosave while typing. Full-stack implementation focuses on user-friendly design and modular architecture.",
      },
      {
        icon: <FaCode />,
        title: "Tech Stack : ",
        desc: "React.js, Appwrite",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "https://rdev-sticky-notes.vercel.app/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedinIn />,
    url: "https://linkedin.com/in/shirke-rohan",
  },
  {
    id: 2,
    icon: <FaGithub />,
    url: "https://github.com/rohan-shirke",
  }
];

export const myEmailId = "rohanshirke2k@gmail.com";
export const myPhoneNo = "9082795689";