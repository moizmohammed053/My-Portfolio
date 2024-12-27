import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
   
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
  
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "ITBA",
        company_name: "Conestoga College",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Sep 2023 - Dec 2024",
        points: [
            "Gained expertise in business analysis, including requirements gathering, process mapping, and solution design.",
            "Developed strong technical skills in project management, using tools like JIRA, MS Project, and other business analysis software.",
            "Learned to effectively communicate with stakeholders and collaborate on cross-functional teams to deliver IT solutions.",
            "Gained hands-on experience through case studies and practical projects, focusing on real-world IT business challenges.",
        ],
    },
    {
        title: "B.Commerce (Computer Application)",
        company_name: "Osmania Univeristy",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2019 - Aug 2022",
        points: [
            "Gained a solid foundation in computer programming, software development, and database management.",
            "Acquired knowledge of various programming languages such as JavaScript, C and C++ for building applications and solving problems.",
            "Learned about systems analysis, design methodologies, and software engineering principles to develop efficient software solutions.",
            "Developed problem-solving and analytical skills through hands-on projects and practical exercises in computer applications and technologies.",
        ],
    },
    
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'MERN Chat-App',
        description: '"Developed a MERN stack chat app using TypeScript, ReactJS, HTML, and CSS, showcasing real-time communication and responsive design.".',
        link: 'https://github.com/moizmohammed053/Mern-Chat',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'vanilla js project (Wackmole Game)',
        description: '"Crafted 6 Vanilla JS projects, including a Chrome Extension, Color Flipper, Hex Colors, People Directory, Whack-a-Mole, and Quotes Generator, demonstrating a strong grasp of interactive web functionality and problem-solving with JavaScript.".',
        link: 'https://github.com/moizmohammed053/vanilla-js-projects-',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Dynamic JavaScript',
        description: '"Developed a dynamic Restaurant project using only JavaScript, focusing on interactive features like menu displays, order processing, and real-time updates.',
        link: 'https://github.com/moizmohammed053/Dynamic-JS-Projects/tree/main/resturent%20js%20project%202',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'MERN resturent web app',
        description: '"Created a Restaurant web app using the MERN stack (React, Node.js, MongoDB, Express), implementing features like menu management, online ordering, and customer reviews.".',
        link: '#',
    },
    
    
];