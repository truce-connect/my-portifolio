import project1 from "../assets/estilitproject1.jpg";
import project2 from "../assets/gpt3-project.png";
import project3 from "../assets/Projects/project-3.jpg";
import project4 from "../assets/miara kitchen.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: " Full Stack Developer",
    company: "GMC",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: 'Tunde-solution',
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "react.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Frontend =Developer",
    company: "Bitxbase technology",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["javascript", "html ", "css", "react-js", 'Node-js'],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "real estate  Website",
    image: project1,
    description:
      "A responsive real estate site built with React and Nodejs, featuring dynamic listings and secure transactions",
    link :'https://estility.com/',
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    
  },
  {
    title: "Truce gpt  website",
    image: project2,
    description:
      "A single-page app showcasing GPT-3 with a real-time chat interface, mimicking the ChatGPT experience for dynamic conversations.",
    link: 'https://ptgt-oale-git-main-truces-projects.vercel.app/',
      technologies: ["HTML", "CSS", "react", "vercel"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
      link:"",
    technologies: ["HTML", "CSS", "vanilla-javascript", "Bootstrap"],
  },
  {
    title: "Miara Kitchen website ",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    link : "https://miaarakitchen-jfcr.vercel.app/",
      technologies: ["HTML", "CSS", "React-js", "Taiwind", ],
  },
];

export const CONTACT = {
  address: "1 adeloju akoka bariga  ",
  phoneNo: "+234 8083771511 ",
  email: "Tayotruce@gmail.com",
};
