import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    nicolle,
    kim,
    shirt,
    food,
    ecommerce,
    project,
    bootstrap,
    sass,
    next,
    python,
    flask,
    django,
    threejs,
    product,
    store,
    portrait1
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Full Stack Developer",
        icon: backend,
    },
    {
        title: "Frontend Specialist",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "SASS",
        icon: sass,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux",
        icon: redux,
    },
    {
        name: "Next JS",
        icon: next, 
    },
    {
        name: "Tailwind",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySQL",
        icon: nodejs, // NEED
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Flask",
        icon: flask, // NEED
    },
    {
        name: "Django",
        icon: django
    },
    {
        name: "ThreeJs",
        icon: threejs,
    },
    {
        name: "Git",
        icon: git,
    },
    // {
    //     name: "Figma",
    //     icon: figma,
    // },
    // {
    //     name: "Docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Freelance Frontend Developer",
        company_name: "Better Brands",
        iconBg: "#383E56",
        date: "Oct 2023 - Current",
        points: [
            "Developing and maintaining a web application using React.js and other related technologies as well as completely designing everything from scratch.",
            "Collaborating with cross-functional teams including designers, marketing professionals to create high-quality designs.",
            "Implementing responsive design, ensuring cross-browser compatibility, speed and security.",
            "No code to show yet but should be ready to include in my portfolio very soon.",
        ],
    },
    {
        title: "Freelance React Developer",
        company_name: "Kim Bowen",
        iconBg: "#383E56",
        date: "Sep 2021 - Sep 2022",
        points: [
            "Developing and maintaining a web application using react.js, css animaitons, api for form interaction with Gmail and ",
            "Based on youtube open source video only for layout purposes and learning responive animations.",
            "Probably my best work for freelance since I took the layout from the video and completly redesigned it with including aditional features of my own.",
            "Also used photoshop to design the form background since I wanted to create an impressive design.",
        ],
    },
    {
        title: "Freelance React Developer",
        company_name: "Nicolle Bustos",
        iconBg: "#383E56",
        date: "Sep 2023 - Sep 2023",
        points: [
            "Helped my girlfriend develop a portfolio website with React, tailwind, framer motion and form API that works with Gmail.",
            "Based on Ed Roh youtube video, wanting to learn more about using different apis for forms and design techniques with tailwind.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Understood what it takes to build a website for someone and gain freelance experience.",
        ],
    },
    {
        title: "Freelance Web Developer",
        company_name: "Diamond Wings",
        iconBg: "#383E56",
        date: "April 2023 - May 2023",
        points: [
            "Helped put together all of the components from an already built design. Did not do much coding but got to see what it's like to work with people in a tech like workspace.",
            "Inserted a few blocks of code to make the website more unique to meet the needs of my employer.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Implemented automated services for renting a ride and emails from a database that was already pre-built and just needed a few connections",
        ],
    },
    {
        title: "Technical Manager",
        company_name: "MyHomeLA",
        iconBg: "#383E56",
        date: "Feb 2021 - Dec 2021",
        points: [
            "Initially, assisted the original tech manager put together the website and design html email design.",
            "Added more automated services to increase conversion rates with services like zapier, click funnels, mailchimp, etc...",
            "Handled database and organization of clients based on cold, warm, or hot categories while keeping them updated with properties.",
            "Handled all of the forms and paperwork to close deals as a transaction coordinator for the team with Docusign.",
            "Reason for leaving was to begin my journey as a software developer due to the fact that I loved handling the digital aspects of the business.",
        ],
    },

];

const testimonials = [
    {
        testimonial:
            "Cameron was able to help me when I needed something quickly, he found a solution and made it happen ",
        name: "Nicolle Bustos",
        designation: "Marketing",
        company: "CSUN",
        image: portrait1,
    },
    {
        testimonial:
            "I've never met a person in the computer industry so good with people and solving problems ",
        name: "Mike Brown",
        designation: "CEO",
        company: "Better Brands",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "Even though we felt no one could help, Cameron helped find a solution.",
        name: "Frank Bustos",
        designation: "CEO",
        company: "Diamond Wings",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Kim Bowen",
        description:
            "Completley redesigned the structure and code from an open source project and tutorial, too really learn more about css animations with responsive behavior and have a boilerplate to work off. Hosted and secure with Hostinger.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "rest_api",
                color: "green-text-gradient",
            },
            {
                name: "css_animations",
                color: "pink-text-gradient",
            },
        ],
        image: kim,
        source_code_link: "https://github.com/",
    },
    {
        name: "Nicolle Bustos",
        description:
            "Used an open source project to help build my girlfriend a portfolio. Learned more about different techniques used designing with tailwind, motion divs and apis used for forms. Also getting used to inline styling. Hosted and secure with Hostinger.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "rest_api",
                color: "green-text-gradient",
            },
            {
                name: "tailwind_css",
                color: "pink-text-gradient",
            },
        ],
        image: nicolle,
        source_code_link: "https://github.com/",
    },
    {
        name: "Shirt Customizer w/ ChatGPT",
        description:
            "Used an open source project to help build my girlfriend a portfolio. Learned more about different techniques used designing with tailwind, motion divs and apis used for forms. Also getting used to inline styling. Hosted and secure with Hostinger.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "vite",
                color: "green-text-gradient",
            },
            {
                name: "openai",
                color: "pink-text-gradient",
            },
        ],
        image: shirt,
        source_code_link: "https://github.com/",
    },
    {
        name: "Ecommerce Store w/ Strapi and Redux ",
        description:
            "Used an open source project to help build my girlfriend a portfolio. Learned more about different techniques used designing with tailwind, motion divs and apis used for forms. Also getting used to inline styling. Hosted and secure with Hostinger.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "strapi",
                color: "green-text-gradient",
            },
            {
                name: "redux",
                color: "pink-text-gradient",
            },
            {
                name: "postressql",
                color: "blue-text-gradient",
            },
        ],
        image: ecommerce,
        source_code_link: "https://github.com/",
    },
    {
        name: "Restuarant Delivery Site w/ Redux",
        description:
            "Used an open source project to help build my girlfriend a portfolio. Learned more about different techniques used designing with tailwind, motion divs and apis used for forms. Also getting used to inline styling. Hosted and secure with Hostinger.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: food,
        source_code_link: "https://github.com/",
    },
    {
        name: "My Portfolio",
        description:
            "Used an open source project to help build my girlfriend a portfolio. Learned more about different techniques used designing with tailwind, motion divs and apis used for forms. Also getting used to inline styling. Hosted and secure with Hostinger.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: project,
        source_code_link: "https://github.com/",
    },
    {
        name: "Product Manager",
        description:
            "Used an open source project to help build my girlfriend a portfolio. Learned more about different techniques used designing with tailwind, motion divs and apis used for forms. Also getting used to inline styling. Hosted and secure with Hostinger.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: product,
        source_code_link: "https://github.com/",
    },
    {
        name: "Django Ecommerce Store",
        description:
            "Used an open source project to help build my girlfriend a portfolio. Learned more about different techniques used designing with tailwind, motion divs and apis used for forms. Also getting used to inline styling. Hosted and secure with Hostinger.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: store,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };